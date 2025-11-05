import React from "react";
import "./Task.css";
import EditIcon from "../../../Icons/EditIcon";
import DeleteIcon from "../../../Icons/DeleteIcon";

const Task = ({ task, IDTask, handleDeleteTask}) => {
  console.log(IDTask)
  return (
    <>
      <li className="Task">
        {task}
        <div className="Task__btns">
          <button className="Task__btn_edit" type="button">
            <EditIcon />
          </button>
          <button className="Task__btn_delete" type="button" onClick={() =>handleDeleteTask(IDTask)}>
            <DeleteIcon />
          </button>
        </div>
      </li>
    </>
  );
};

export default Task;
