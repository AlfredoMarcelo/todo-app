import React, { useState } from "react";
import HeaderTodo from "./HeaderTodo/HeaderTodo";
import BodyTodo from "./BodyTodo/BodyTodo";
import "./Todo.css";

// enviamos datos a componentes hijos
const data = [
  { id: 1, task: "Lavar los platos", done: false },
  { id: 2, task: "Hacer las compras", done: true },
  { id: 3, task: "Estudiar JavaScript", done: false },
  { id: 4, task: "Sacar al perro", done: true },
  { id: 5, task: "Llamar al cliente", done: false },
];

const Todo = () => {
  const [tasks, setTasks] = useState(data ? data : []);

  // funcion para agregar nueva tarea al arreglo
  const handleAddTask = (newTask) => {setTasks([newTask,...tasks])};
  // funcion para eliminar tarea al arreglo
  const handleDeleteTask = (taskToDeletID) => {
    console.log(taskToDeletID)
    //=>  recorrer lista actual
    //=> buscar por id
    //=> filtrar el id y crear nuevo arreglo sin el id
    const tasksWithoutTaskDeleted = tasks.filter(task => task.id !== taskToDeletID)
    //=> setear lista por nueva copia
    setTasks(tasksWithoutTaskDeleted)
  };
  return (
    <div className="Todo">
      <div className="Todo__container">
        <HeaderTodo handleAddTask={handleAddTask}  />
        <BodyTodo tasks={tasks} handleDeleteTask={handleDeleteTask}/>
      </div>
    </div>
  );
};

export default Todo;
