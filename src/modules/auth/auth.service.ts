import bcrypt from "bcrypt";
import { prisma } from "../../prisma";
import { RegisterDTO, LoginDTO } from "./auth.types";
import { generateToken } from "../../utils/jwt";

export class AuthService {
  static async register(data: RegisterDTO) {
    const { name, email, password, role = "user" } = data;

    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    };
  }

  // 🔐 LOGIN
  static async login(data: LoginDTO) {
    const { email, password } = data;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Invalid email or password");
    }

    const token = generateToken({
      sub: user.id,
      role: user.role,
    });

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }
}