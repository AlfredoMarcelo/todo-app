import React from "react";
import Task from "./Task/Task";
import './TaskList.css'

const TaskList = () => {
  const tasks = [
    { id: 1, task: "Lavar los platos", done: false },
    { id: 2, task: "Hacer las compras", done: true },
    { id: 3, task: "Estudiar JavaScript", done: false },
    { id: 4, task: "Sacar al perro", done: true },
    { id: 5, task: "Llamar al cliente", done: false },
  ];

  console.log(tasks);

  return (
    <div className="TaskList">
      <ul className="TaskList__list">
        {
          tasks && tasks.map(({id,task,done})=>{
            return <Task key={id} task={task} done={done}/>
          })
        }
      </ul>
    </div>
  );
};

export default TaskList;
