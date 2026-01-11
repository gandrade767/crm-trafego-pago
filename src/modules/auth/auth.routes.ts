import { Router } from "express";
import { AuthController } from "./auth.controller";
import { authMiddleware, AuthRequest } from "../../middleware/auth.middleware";

const router = Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

// ROTA /ME (OBRIGATÓRIA PARA TESTE)
router.get("/me", authMiddleware, (req: AuthRequest, res) => {
  return res.json({
    user: req.user,
  });
});

export default router;