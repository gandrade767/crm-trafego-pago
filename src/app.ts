import express from "express";
import authRoutes from "./modules/auth/auth.routes";

const app = express();

// Middlewares
app.use(express.json());

// Rotas
app.use("/api/auth", authRoutes);

export default app;