import React from "react";
import HeaderTodo from "./HeaderTodo/HeaderTodo";
import BodyTodo from "./BodyTodo/BodyTodo";
import "./Todo.css";

const Todo = () => {
  return (
    <div className="Todo">
      <div className="Todo__container">
        <HeaderTodo />
        <BodyTodo />
      </div>
    </div>
  );
};

export default Todo;
