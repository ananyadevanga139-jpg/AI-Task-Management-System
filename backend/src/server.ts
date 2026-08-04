import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import { createUserTable } from "./models/userModel";
import { createTaskTable } from "./models/taskModel";

import authRoutes from "./routes/authRoutes";
import taskRoutes from "./routes/taskRoutes";
import aiRoutes from "./routes/aiRoutes";

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


// Body parser
app.use(express.json());


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/ai", aiRoutes);


// Database initialization
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


// Root route
app.get("/", (req, res) => {
  res.json({
    message: "AI Task Management Backend Running",
  });
});


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});