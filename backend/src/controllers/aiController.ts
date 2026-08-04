import { Request, Response } from "express";


export const generateSuggestions = async (
  req: Request,
  res: Response
) => {

  try {

    const suggestions = [

      "Complete pending project tasks",

      "Review today's progress and update task status",

      "Plan tomorrow's important activities",

      "Break large tasks into smaller steps",

      "Organize and prioritize unfinished work"

    ];


    res.json({

      message:"AI suggestions generated successfully",

      suggestions

    });


  } catch(error){


    console.log(error);


    res.status(500).json({

      message:"AI suggestion generation failed"

    });


  }

};