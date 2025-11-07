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
  const [taskToUpdate, setTaskToUpdate] = useState("")
  const [taskUpdated, setTaskUpdated] = useState(null)

  // funcion para agregar nueva tarea al arreglo
  const handleAddTask = (newTask) => {setTasks([newTask,...tasks])};
  // funcion para eliminar tarea al arreglo
  const handleDeleteTask = (taskToDeletID) => {
    const tasksWithoutTaskDeleted = tasks.filter(task => task.id !== taskToDeletID)
    setTasks(tasksWithoutTaskDeleted)
  };

  // funcion para capturar tarea desde Lista y enviar a input para editar
  const handleUpdateTask = (taskToUpdateID) => {
    const copyTaskToUpdate = tasks.map(task => task).find(taskFound => taskFound.id === taskToUpdateID)
    console.log(copyTaskToUpdate)
    if(!copyTaskToUpdate) return
    setTaskUpdated(copyTaskToUpdate)
    setTaskToUpdate(copyTaskToUpdate.task)
  };

  // funcion para guardar tarea editada y crear nuevo arreglo
  const handleSaveUpdateTask = (taskUpdateFromInput) => {
    const copyTask = {...taskUpdated, task: taskUpdateFromInput}
    const arrWithTaskUpdated = tasks.map(task => task.id === taskUpdated.id ? copyTask : task)
    console.log(arrWithTaskUpdated)
    setTasks(arrWithTaskUpdated)
    setTaskToUpdate("")
  }

  return (
    <div className="Todo">
      <div className="Todo__container">
        <HeaderTodo handleAddTask={handleAddTask}  taskToUpdate={taskToUpdate} handleSaveUpdateTask={handleSaveUpdateTask}/>
        <BodyTodo tasks={tasks} handleDeleteTask={handleDeleteTask} handleUpdateTask={handleUpdateTask}/>
      </div>
    </div>
  );
};

export default Todo;
