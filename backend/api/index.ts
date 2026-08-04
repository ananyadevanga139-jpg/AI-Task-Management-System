import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "../src/routes/authRoutes";
import taskRoutes from "../src/routes/taskRoutes";
import aiRoutes from "../src/routes/aiRoutes";

dotenv.config();

const app = express();


// CORS Configuration
app.use(
  cors({
    origin: "https://ai-task-management-frontend-7iam.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.options("*", cors());


// Middleware
app.use(express.json());


// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/ai", aiRoutes);


// Test route
app.get("/", (req, res) => {
  res.json({
    message: "AI Task Management Backend Running",
  });
});


export default app;