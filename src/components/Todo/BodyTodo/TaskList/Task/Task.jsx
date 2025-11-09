import React from "react";
import "./Task.css";
import EditIcon from "../../../Icons/EditIcon";
import DeleteIcon from "../../../Icons/DeleteIcon";

const Task = ({ task, IDTask, done, handleDeleteTask, handleUpdateTask, handleTaskIsDonde}) => {


  const handleStateTask = (e) => {
    console.log("cambio el checkbox", e.target.checked,  "  ", IDTask);
    const isCheked = e.target.checked
    handleTaskIsDonde(IDTask,isCheked)
    // necesito enviar id y done al arreglo para que actualice el estado 
    // setear el valor done de la tarea
    // pasar el valor de done a task, si es true => rayar, false mostrar normal

  }
  return (
    <>
      <li className="Task">
        <label>
          <input  type="checkbox" name="task" onChange={(e)=> handleStateTask(e)}/>
          <span className={ `Task__name${done ? "--done": ""}` }>{task}</span> 
        </label>
        <div className="Task__btns">
          <button
            className="Task__btn_edit"
            type="button"
            onClick={() => handleUpdateTask(IDTask)}
          >
            <EditIcon />
          </button>
          <button
            className="Task__btn_delete"
            type="button"
            onClick={() => handleDeleteTask(IDTask)}
          >
            <DeleteIcon />
          </button>
        </div>
      </li>
    </>
  );
};

export default Task;
