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
  const handleAddTask = (newTask) => {setTasks([...tasks,newTask])};
  return (
    <div className="Todo">
      <div className="Todo__container">
        <HeaderTodo handleAddTask={handleAddTask} />
        <BodyTodo tasks={tasks} />
      </div>
    </div>
  );
};

export default Todo;
