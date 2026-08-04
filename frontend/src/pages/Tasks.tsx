import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Tasks = () => {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");


  const [tasks,setTasks] = useState<any[]>([]);

  const [filter,setFilter] = useState("All");


  const [title,setTitle] = useState("");

  const [description,setDescription] = useState("");

  const [priority,setPriority] = useState("Medium");


  const [editId,setEditId] = useState<number|null>(null);





  const fetchTasks = async()=>{

    const response = await fetch(
      "http://localhost:5000/api/tasks",
      {
        headers:{
          Authorization:`Bearer ${token}`,
        },
      }
    );


    const data = await response.json();

    setTasks(data);

  };





  useEffect(()=>{

    fetchTasks();

  },[]);







  const saveTask = async(
    e:React.FormEvent
  )=>{

    e.preventDefault();


    if(editId){


      await fetch(
        `http://localhost:5000/api/tasks/${editId}`,
        {

          method:"PUT",

          headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`,
          },


          body:JSON.stringify({

            title,
            description,
            priority,
            status:"Pending"

          })

        }
      );


      setEditId(null);



    }
    else{


      await fetch(
        "http://localhost:5000/api/tasks",
        {

          method:"POST",

          headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`,
          },


          body:JSON.stringify({

            title,
            description,
            priority

          })

        }
      );


    }


    setTitle("");

    setDescription("");

    setPriority("Medium");


    fetchTasks();

  };






  const editTask=(task:any)=>{


    setEditId(task.id);

    setTitle(task.title);

    setDescription(
      task.description || ""
    );

    setPriority(task.priority);


  };







  const completeTask=async(task:any)=>{


    await fetch(
      `http://localhost:5000/api/tasks/${task.id}`,
      {

        method:"PUT",

        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${token}`,
        },


        body:JSON.stringify({

          title:task.title,

          description:task.description,

          priority:task.priority,

          status:"Completed"

        })

      }
    );


    fetchTasks();

  };







  const deleteTask=async(id:number)=>{


    await fetch(
      `http://localhost:5000/api/tasks/${id}`,
      {

        method:"DELETE",

        headers:{
          Authorization:`Bearer ${token}`,
        }

      }
    );


    fetchTasks();

  };







  const filteredTasks =
    tasks.filter(task=>{

      if(filter==="All")
        return true;


      return task.status===filter;


    });






  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 p-8">


      <div className="flex justify-between items-center">


        <h1 className="text-4xl font-bold text-gray-800">

          My Tasks

        </h1>




        <button

          onClick={()=>navigate("/dashboard")}

          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl"

        >

          Dashboard

        </button>


      </div>








      <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">


        <h2 className="text-2xl font-bold mb-5">

          {editId ? "Update Task" : "Create New Task"}

        </h2>




        <form
          onSubmit={saveTask}
          className="space-y-4"
        >


          <input

            className="w-full border rounded-xl p-3"

            placeholder="Task title"

            value={title}

            onChange={
              e=>setTitle(e.target.value)
            }

            required

          />





          <textarea

            className="w-full border rounded-xl p-3"

            placeholder="Task description"

            value={description}

            onChange={
              e=>setDescription(e.target.value)
            }

          />







          <select

            className="w-full border rounded-xl p-3"

            value={priority}

            onChange={
              e=>setPriority(e.target.value)
            }

          >

            <option>Low</option>

            <option>Medium</option>

            <option>High</option>


          </select>






          <button

            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"

          >

            {editId ? "Update Task" : "Add Task"}

          </button>



        </form>



      </div>








      <div className="flex gap-4 mt-8">


        {
          ["All","Pending","Completed"].map(item=>(


            <button

              key={item}

              onClick={()=>setFilter(item)}

              className={

                filter===item

                ?

                "bg-blue-600 text-white px-6 py-2 rounded-xl"

                :

                "bg-white px-6 py-2 rounded-xl shadow"

              }

            >

              {item}

            </button>


          ))
        }


      </div>







      <div className="mt-8">


        {

          filteredTasks.length===0

          ?

          (

            <div className="bg-white p-8 rounded-xl shadow text-center">

              <h2 className="text-xl font-bold">
                No Tasks Found
              </h2>

              <p className="text-gray-500">
                Create your first task to get started.
              </p>

            </div>

          )


          :


          filteredTasks.map(task=>(


            <div

              key={task.id}

              className="bg-white rounded-2xl shadow-lg p-6 mb-5 hover:shadow-xl transition"

            >


              <div className="flex justify-between">


                <h2 className="text-xl font-bold">

                  {task.title}

                </h2>


                <span

                  className={

                    task.status==="Completed"

                    ?

                    "bg-green-100 text-green-700 px-3 py-1 rounded-full"

                    :

                    "bg-orange-100 text-orange-700 px-3 py-1 rounded-full"

                  }

                >

                  {task.status}

                </span>


              </div>





              <p className="text-gray-600 mt-3">

                {task.description}

              </p>





              <p className="mt-3 font-semibold">

                Priority:

                <span className="ml-2 text-blue-600">

                  {task.priority}

                </span>

              </p>







              <div className="flex gap-3 mt-5">


                <button

                  onClick={()=>editTask(task)}

                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg"

                >

                  Edit

                </button>





                {
                  task.status!=="Completed" &&


                  <button

                    onClick={()=>completeTask(task)}

                    className="bg-green-600 text-white px-4 py-2 rounded-lg"

                  >

                    Complete

                  </button>

                }





                <button

                  onClick={()=>deleteTask(task.id)}

                  className="bg-red-500 text-white px-4 py-2 rounded-lg"

                >

                  Delete

                </button>



              </div>



            </div>


          ))

        }


      </div>



    </div>

  );

};


export default Tasks;