const API_URL = "https://ai-task-management-system.onrender.com/api";


// Login API
export const loginUser = async (
  email:string,
  password:string
)=>{

  try{


    const response = await fetch(
      `${API_URL}/auth/login`,
      {

        method:"POST",

        headers:{
          "Content-Type":"application/json",
        },


        body:JSON.stringify({

          email,
          password

        })

      }
    );



    const data = await response.json();



    return {

      status:response.status,

      data

    };


  }
  catch(error){


    return {

      status:500,

      data:{
        message:"Server connection failed"
      }

    };


  }


};







// Register API
export const registerUser = async(
  name:string,
  email:string,
  password:string
)=>{


  try{


    const response = await fetch(
      `${API_URL}/auth/register`,
      {

        method:"POST",

        headers:{
          "Content-Type":"application/json",
        },


        body:JSON.stringify({

          name,

          email,

          password

        })

      }
    );



    const data = await response.json();



    return {

      status:response.status,

      data

    };


  }
  catch(error){


    return {

      status:500,

      data:{
        message:"Server connection failed"
      }

    };


  }


};








// Get Tasks API
export const getTasks = async()=>{


  try{


    const token =
      localStorage.getItem("token");



    const response = await fetch(
      `${API_URL}/tasks`,
      {

        headers:{

          Authorization:`Bearer ${token}`

        }

      }
    );



    const data =
      await response.json();



    return {

      status:response.status,

      data

    };



  }
  catch(error){


    return {

      status:500,

      data:{
        message:"Unable to load tasks"
      }

    };


  }


};







// AI Suggestions API
export const getAISuggestions = async()=>{


  try{


    const token =
      localStorage.getItem("token");



    const response = await fetch(
      `${API_URL}/ai/suggestions`,
      {

        headers:{
          Authorization:`Bearer ${token}`
        }

      }
    );



    const data =
      await response.json();



    return {

      status:response.status,

      data

    };



  }
  catch(error){


    return {

      status:500,

      data:{
        message:"AI service unavailable"
      }

    };


  }


};