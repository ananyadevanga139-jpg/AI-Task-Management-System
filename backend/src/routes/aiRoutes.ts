import express from "express";

import {
  generateSuggestions
} from "../controllers/aiController";


import authMiddleware from "../middleware/authMiddleware";


const router = express.Router();



router.get(
  "/suggestions",
  authMiddleware,
  generateSuggestions
);



export default router;