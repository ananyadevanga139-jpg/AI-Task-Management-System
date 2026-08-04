import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";


const Register = () => {


  const navigate = useNavigate();



  const [name,setName] = useState("");

  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");



  const [loading,setLoading] = useState(false);


  const [error,setError] = useState("");


  const [success,setSuccess] = useState("");







  const handleRegister = async(
    e:React.FormEvent
  )=>{


    e.preventDefault();



    setError("");

    setSuccess("");

    setLoading(true);





    const result = await registerUser(
      name,
      email,
      password
    );





    setLoading(false);






    if(
      result.status===200 ||
      result.status===201
    ){


      setSuccess(
        "Registration successful! Redirecting to login..."
      );



      setTimeout(()=>{

        navigate("/");

      },1500);



    }
    else{


      setError(
        result.data.message ||
        "Registration failed"
      );


    }


  };








  return (

    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">


      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">


        <h1 className="text-3xl font-bold text-center text-purple-600">

          Create Account

        </h1>




        <p className="text-center text-gray-500 mt-2">

          Join AI Task Management

        </p>








        {
          error &&

          <div className="bg-red-100 text-red-600 p-3 rounded-lg mt-5">

            {error}

          </div>

        }








        {
          success &&

          <div className="bg-green-100 text-green-600 p-3 rounded-lg mt-5">

            {success}

          </div>

        }









        <form

          onSubmit={handleRegister}

          className="space-y-5 mt-6"

        >






          <input

            type="text"

            placeholder="Full Name"

            className="w-full border p-3 rounded-lg"


            value={name}


            onChange={
              e=>setName(e.target.value)
            }


            required


          />








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

            disabled={loading}

            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg"

          >


            {
              loading
              ?
              "Creating Account..."
              :
              "Register"
            }



          </button>





        </form>








        <p className="text-center mt-5 text-gray-600">


          Already have an account?


          <button

            onClick={()=>navigate("/")}

            className="text-blue-600 ml-2"

          >

            Login

          </button>



        </p>





      </div>



    </div>

  );

};


export default Register;