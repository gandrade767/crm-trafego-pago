import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const user = await AuthService.register(req.body);

      return res.status(201).json({
        message: "User created successfully",
        user,
      });
    } catch (error: any) {
      return res.status(400).json({
        error: error.message,
      });
    }
  }

  // 🔐 LOGIN
  static async login(req: Request, res: Response) {
    try {
      const result = await AuthService.login(req.body);

      return res.json(result);
    } catch (error: any) {
      return res.status(401).json({
        error: error.message,
      });
    }
  }
}