import dotenv from "dotenv";

dotenv.config();

import express from "express";
import cors from "cors";
import pool from "./config/db";

import { createUserTable } from "./models/userModel";
import { createTaskTable } from "./models/taskModel";

import authRoutes from "./routes/authRoutes";
import taskRoutes from "./routes/taskRoutes";
import aiRoutes from "./routes/aiRoutes";


const app = express();


// CORS Configuration
app.use(
  cors({
    origin: [
      "https://ai-task-management-frontend.onrender.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/ai", aiRoutes);

// Create Database Tables
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


const PORT = process.env.PORT || 5000;


// Test API
app.get("/", (req, res) => {
  res.send("AI Task Management Backend Running");
});


// Test Database Connection
app.get("/api/test-db", async (req, res) => {

  try {

    const result = await pool.query(
      "SELECT NOW()"
    );

    res.json({
      message: "Database Connected Successfully",
      time: result.rows[0]
    });


  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Database Connection Failed"
    });

  }

});


// Start Server
app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});