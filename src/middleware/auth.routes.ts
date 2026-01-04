import { Router } from "express";
import { AuthController } from "../modules/auth/auth.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

// 🔒 rota protegida (teste)
router.get("/me", authMiddleware, (req, res) => {
  return res.json({ message: "rota protegida OK", user: (req as any).user });
});

export default router;