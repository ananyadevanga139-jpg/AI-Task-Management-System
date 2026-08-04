interface TaskCardProps {

  title: string;
  count: number;

}


function TaskCard({title,count}:TaskCardProps){


  return (

    <div className="bg-white p-6 rounded-xl shadow-md">


      <h3 className="text-gray-500">
        {title}
      </h3>


      <p className="text-3xl font-bold text-blue-600 mt-3">
        {count}
      </p>


    </div>

  );

}


export default TaskCard;