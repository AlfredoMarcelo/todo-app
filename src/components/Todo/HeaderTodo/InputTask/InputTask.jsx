import React from "react";
import './InputTask.css'

const InputTask = () => {
  return (
    <div className="InputTask">
      <div className="InputTask__input">
        <input placeholder="Estudiar para prueba.." type="text" name="" id="InputTask__input-text" />
      </div>
      <div className="InputTask__add__btn">
        <button type="button">Agregar Tarea</button>
      </div>
    </div>
  );
};

export default InputTask;
