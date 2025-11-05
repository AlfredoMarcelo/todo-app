import React, { useState } from "react";
import './InputTask.css'

function generateId() {
	return crypto.randomUUID()
}


const InputTask = ({handleAddTask}) => {

  const [newTask, setNewTask] = useState({})
  const [valueInput, setValueInput] = useState("")
  
  const handleInputValue = (event) =>{
    const newTask = event.target.value
    setValueInput(newTask)
    if(!newTask.trim())return
    createTask(newTask)
  }

  const createTask = (newTask) =>{
    const createdTask = {
      id: generateId(),
      task: newTask,
      done: false
    }
    setNewTask(createdTask)
  }

  
  const handlePushTask = () =>{
    console.log("entroo")
    if(!valueInput.trim())return
    console.log("pero no paso")
    handleAddTask(newTask)
    setValueInput("")
  }

  return (
    <div className="InputTask">
      <div className="InputTask__input">
        <input value={valueInput}  onChange={(e)=>handleInputValue(e)} placeholder="Estudiar para prueba.." type="text" name="" id="InputTask__input-text" />
      </div>
      <div className="InputTask__add__btn">
        <button onClick={handlePushTask}>Agregar Tarea</button>
      </div>
    </div>
  );
};

export default InputTask;
