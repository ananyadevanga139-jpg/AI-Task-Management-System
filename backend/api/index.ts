import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "../src/routes/authRoutes";
import taskRoutes from "../src/routes/taskRoutes";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "https://ai-task-manager-ilha.vercel.app",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "AI Task Management Backend Running",
  });
});

export default app;