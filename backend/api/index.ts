import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import "../src/config/db";

import { createUserTable } from "../src/models/userModel";
import { createTaskTable } from "../src/models/taskModel";

import authRoutes from "../src/routes/authRoutes";
import taskRoutes from "../src/routes/taskRoutes";
import aiRoutes from "../src/routes/aiRoutes";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "https://ai-task-management-frontend-7iam.onrender.com",
    ],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/ai", aiRoutes);


const startDatabase = async () => {
  try {
    await createUserTable();
    await createTaskTable();

    console.log("Database tables initialized");
  } catch (error) {
    console.log("Database table creation failed:", error);
  }
};

startDatabase();


app.get("/", (req, res) => {
  res.json({
    message: "AI Task Management Backend Running",
  });
});

export default app;