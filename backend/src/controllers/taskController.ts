import { Request, Response } from "express";
import pool from "../config/db";


// Create Task
export const createTask = async (
  req: Request,
  res: Response
) => {

  try {

    const userId = (req as any).user.id;

    const {
      title,
      description,
      priority
    } = req.body;


    const result = await pool.query(
      `
      INSERT INTO tasks
      (
        user_id,
        title,
        description,
        priority,
        status
      )
      VALUES
      ($1,$2,$3,$4,$5)
      RETURNING *
      `,
      [
        userId,
        title,
        description,
        priority,
        "Pending"
      ]
    );


    res.status(201).json(
      result.rows[0]
    );


  } catch (error) {

    console.log(error);

    res.status(500).json({
      message:"Server error"
    });

  }

};




// Get Tasks
export const getTasks = async (
  req: Request,
  res: Response
) => {

  try {

    const userId = (req as any).user.id;


    const result = await pool.query(
      `
      SELECT *
      FROM tasks
      WHERE user_id=$1
      ORDER BY id DESC
      `,
      [userId]
    );


    res.json(
      result.rows
    );


  } catch(error) {

    console.log(error);

    res.status(500).json({
      message:"Server error"
    });

  }

};




// Update Task
export const updateTask = async (
  req: Request,
  res: Response
) => {

  try {

    const { id } = req.params;


    const {
      title,
      description,
      priority,
      status
    } = req.body;



    const result = await pool.query(
      `
      UPDATE tasks
      SET
        title=$1,
        description=$2,
        priority=$3,
        status=$4
      WHERE id=$5
      RETURNING *
      `,
      [
        title,
        description,
        priority,
        status,
        id
      ]
    );


    if(result.rows.length === 0){

      return res.status(404).json({
        message:"Task not found"
      });

    }


    res.json({
      message:"Task updated successfully",
      task:result.rows[0]
    });



  } catch(error){

    console.log(error);

    res.status(500).json({
      message:"Server error"
    });

  }

};




// Delete Task
export const deleteTask = async (
  req: Request,
  res: Response
) => {

  try {

    const { id } = req.params;


    await pool.query(
      `
      DELETE FROM tasks
      WHERE id=$1
      `,
      [id]
    );


    res.json({
      message:"Task deleted successfully"
    });


  } catch(error){

    console.log(error);

    res.status(500).json({
      message:"Server error"
    });

  }

};