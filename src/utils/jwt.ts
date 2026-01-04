import jwt, { SignOptions } from "jsonwebtoken";

const JWT_SECRET_ENV = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN as SignOptions["expiresIn"];

if (!JWT_SECRET_ENV) {
  throw new Error("JWT_SECRET not defined");
}

//Garantia para o TS que NÃO é undefined
const JWT_SECRET: string = JWT_SECRET_ENV;

export function generateToken(payload: object): string {
  const options: SignOptions = {
    expiresIn: JWT_EXPIRES_IN || "1d",
  };

  return jwt.sign(payload, JWT_SECRET, options);
}