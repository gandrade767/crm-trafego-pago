import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface TokenPayload {
  sub: number;
  role: string;
}

export interface AuthRequest extends Request {
  user?: {
    id: number;
    role: string;
  };
}

export function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token not provided" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as unknown;

    // Narrowing manual
    if (
      typeof decoded === "object" &&
      decoded !== null &&
      "sub" in decoded &&
      "role" in decoded
    ) {
      const payload = decoded as TokenPayload;

      req.user = {
        id: payload.sub,
        role: payload.role,
      };

      return next();
    }

    return res.status(401).json({ error: "Invalid token payload" });
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
}