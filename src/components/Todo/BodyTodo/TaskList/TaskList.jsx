import React from "react";
import Task from "./Task/Task";
import './TaskList.css'

const TaskList = ({tasks}) => {

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
