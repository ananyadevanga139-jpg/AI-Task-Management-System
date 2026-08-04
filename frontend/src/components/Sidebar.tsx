import { Link } from "react-router-dom";


function Sidebar() {


  return (

    <aside className="w-64 min-h-screen bg-blue-600 text-white p-6">


      <h2 className="text-2xl font-bold mb-8">
        Menu
      </h2>


      <nav className="space-y-4">


        <Link
          to="/dashboard"
          className="block hover:bg-blue-700 p-3 rounded-lg"
        >
          Dashboard
        </Link>


        <Link
          to="/tasks"
          className="block hover:bg-blue-700 p-3 rounded-lg"
        >
          My Tasks
        </Link>


      </nav>


    </aside>

  );

}


export default Sidebar;