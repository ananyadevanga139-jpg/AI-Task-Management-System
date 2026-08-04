function Navbar() {

  return (

    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">

      <h1 className="text-xl font-bold text-blue-600">
        AI Task Management
      </h1>


      <div className="flex items-center gap-4">

        <span className="text-gray-600">
          Welcome, User
        </span>


        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
          Logout
        </button>

      </div>


    </nav>

  );

}


export default Navbar;