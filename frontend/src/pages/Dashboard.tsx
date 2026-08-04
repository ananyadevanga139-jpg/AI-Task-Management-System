import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");


  const [tasks,setTasks] = useState<any[]>([]);

  const [suggestions,setSuggestions] = useState<string[]>([]);

  const [loading,setLoading] = useState(false);



  const fetchTasks = async()=>{

    try{

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


    }catch(error){

      console.log(error);

    }

  };





  useEffect(()=>{

    fetchTasks();

  },[]);






  const generateSuggestions = async()=>{

    try{

      setLoading(true);


      const response = await fetch(
        "http://localhost:5000/api/ai/suggestions",
        {
          headers:{
            Authorization:`Bearer ${token}`,
          },
        }
      );


      const data = await response.json();


      setSuggestions(data.suggestions);


    }catch(error){

      console.log(error);

    }
    finally{

      setLoading(false);

    }

  };





  const logout = ()=>{

    localStorage.removeItem("token");

    navigate("/");

  };





  const completed =
    tasks.filter(
      task=>task.status==="Completed"
    ).length;



  const pending =
    tasks.filter(
      task=>task.status==="Pending"
    ).length;





  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100">


      <nav className="bg-white shadow-md px-8 py-5 flex justify-between items-center">


        <h1 className="text-2xl font-bold text-blue-700">

          AI Task Management

        </h1>



        <button

          onClick={logout}

          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"

        >

          Logout

        </button>


      </nav>






      <main className="p-8">


        <h2 className="text-4xl font-bold text-gray-800">

          Welcome Back 👋

        </h2>



        <p className="text-gray-600 mt-2">

          Track productivity and manage your tasks efficiently.

        </p>







        <div className="grid md:grid-cols-3 gap-6 mt-8">



          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">


            <h3 className="text-gray-500">

              Total Tasks

            </h3>


            <p className="text-5xl font-bold text-blue-600 mt-3">

              {tasks.length}

            </p>


          </div>






          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">


            <h3 className="text-gray-500">

              Completed

            </h3>


            <p className="text-5xl font-bold text-green-600 mt-3">

              {completed}

            </p>


          </div>







          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">


            <h3 className="text-gray-500">

              Pending

            </h3>


            <p className="text-5xl font-bold text-orange-500 mt-3">

              {pending}

            </p>


          </div>



        </div>








        <div className="bg-white rounded-2xl shadow-xl p-8 mt-10">


          <h2 className="text-2xl font-bold text-purple-700">

            🤖 AI Productivity Assistant

          </h2>



          <p className="text-gray-600 mt-3">

            Generate smart suggestions to organize your workflow and improve productivity.

          </p>





          <button

            onClick={generateSuggestions}

            className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition"

          >

            {
              loading
              ? "Generating..."
              : "Generate Task Suggestions"
            }


          </button>








          {
            suggestions.length > 0 &&


            <div className="mt-6 bg-purple-50 p-5 rounded-xl">


              <h3 className="font-bold text-lg">

                AI Suggestions

              </h3>



              <ul className="mt-3 space-y-2">


                {
                  suggestions.map(
                    (item,index)=>(

                      <li
                        key={index}
                        className="bg-white p-3 rounded-lg shadow-sm"
                      >

                        ✓ {item}

                      </li>

                    )
                  )
                }


              </ul>


            </div>


          }



        </div>







        <button

          onClick={()=>navigate("/tasks")}

          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition"

        >

          Manage My Tasks

        </button>




      </main>


    </div>

  );

};


export default Dashboard;