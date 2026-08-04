import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";


const Login = () => {


  const navigate = useNavigate();



  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");


  const [loading,setLoading] = useState(false);


  const [error,setError] = useState("");






  const handleLogin = async(
    e:React.FormEvent
  )=>{


    e.preventDefault();


    setError("");

    setLoading(true);



    const result = await loginUser(
      email,
      password
    );



    setLoading(false);




    if(result.status===200){


      localStorage.setItem(
        "token",
        result.data.token
      );


      navigate("/dashboard");


    }
    else{


      setError(
        result.data.message ||
        "Login failed"
      );


    }


  };






  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">


      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">


        <h1 className="text-3xl font-bold text-center text-blue-600">

          AI Task Management

        </h1>



        <p className="text-center text-gray-500 mt-2">

          Login to manage your tasks smarter

        </p>





        {
          error &&

          <div className="bg-red-100 text-red-600 p-3 rounded-lg mt-5">

            {error}

          </div>

        }







        <form

          onSubmit={handleLogin}

          className="space-y-5 mt-6"

        >




          <input


            type="email"

            placeholder="Email"

            className="w-full border p-3 rounded-lg"


            value={email}


            onChange={
              e=>setEmail(e.target.value)
            }


            required


          />







          <input


            type="password"

            placeholder="Password"

            className="w-full border p-3 rounded-lg"


            value={password}


            onChange={
              e=>setPassword(e.target.value)
            }


            required


          />







          <button


            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"


            disabled={loading}


          >


            {
              loading
              ?
              "Logging in..."
              :
              "Login"
            }



          </button>




        </form>





        <p className="text-center mt-5 text-gray-600">


          Don't have an account?


          <button

            onClick={()=>navigate("/register")}

            className="text-blue-600 ml-2"

          >

            Register

          </button>


        </p>



      </div>


    </div>

  );

};


export default Login;