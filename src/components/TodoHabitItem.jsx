import React from "react";
import { Link } from "react-router-dom";

//todo refactor (join todo and habit)
export const TodoItem = ({ todo }) => {
  const { id, title } = todo;

  return (
    <Link to={`/todo/${id}`} className="clean-link-todo">
      <div className="todo-item">
        <h4>{title}</h4>
      </div>
    </Link>
  );
};

export const HabitItem = ({ habit }) => {
  const { id, title } = habit;

  return (
    <Link to={`/habit/${id}`} className="clean-link-habit">
      <div className="habit-item">
        <h4>{title}</h4>
      </div>
    </Link>
  );
};
