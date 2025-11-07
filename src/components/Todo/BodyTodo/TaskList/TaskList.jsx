import React from "react";
import Task from "./Task/Task";
import './TaskList.css'

const TaskList = ({tasks, handleDeleteTask, handleUpdateTask}) => {

  return (
    <div className="TaskList">
      <ul className="TaskList__list">
        {
          tasks && tasks.map(({id,task,done})=>{
            return <Task key={id} IDTask={id} task={task} done={done} handleDeleteTask={handleDeleteTask} handleUpdateTask={handleUpdateTask}/>
          })
        }
      </ul>
    </div>
  );
};

export default TaskList;
