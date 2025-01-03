import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import authRoutes from "./routes/auth.js";
const app = express();

app.use(express.json());

app.use(cors());

// Middleware
app.use(errorHandler);

app.use("/api/v1/auth", authRoutes);

export default app;
