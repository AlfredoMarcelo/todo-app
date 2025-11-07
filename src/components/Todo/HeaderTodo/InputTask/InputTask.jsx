import React, { useEffect, useState } from "react";
import './InputTask.css'
import { generateId } from "../../../../utils/generateID";

const InputTask = ({handleAddTask, taskToUpdate, handleSaveUpdateTask}) => {

  const [valueInput, setValueInput] = useState("")
  
  
  const handleInputValue = (event) =>{
    const newTask = event.target.value
    setValueInput(newTask)
  }
  
  const handlePushTask = () =>{
    if(!valueInput.trim())return
    const createdTask = {
      id: generateId(),
      task: valueInput,
      done: false
    }
    handleAddTask(createdTask)
    setValueInput("")
  }

  const handlePushUpdateTask = () =>{
     if(!valueInput.trim())return
    handleSaveUpdateTask(valueInput)
    setValueInput("")
  }
  // al renderizar verifica si en la props esta el nombre de la tarea a editar
  // si esta presente, setea el valor de input para editar y cambia el boton
  useEffect(()=>{
    if(taskToUpdate){
      setValueInput(taskToUpdate)
    }
  }, [taskToUpdate])

  return (
    <div className="InputTask">
      <div className="InputTask__input">
        <input value={valueInput}  onChange={(e)=>handleInputValue(e)} placeholder="Estudiar para prueba.." type="text" name="" id="InputTask__input-text" />
      </div>
      <div className="InputTask__add">
        { taskToUpdate ?
          <button className="InputTask__add__btn" onClick={handlePushUpdateTask}>Guardar cambios</button>
          :
          <button className="InputTask__add__btn" onClick={handlePushTask}>Agregar Tarea</button>
        }
      </div>
    </div>
  );
};

export default InputTask;
