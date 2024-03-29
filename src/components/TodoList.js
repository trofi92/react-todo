import React from "react";
import { TodoListItem } from "./TodoListItem";
import "./TodoList.scss";

export const TodoList = ({
  nextId,
  setTodos,
  todos,
  onRemove,
  onToggle,
  onConfirm,
}) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          setTodos={setTodos}
          todos={todos}
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
          onConfirm={onConfirm}
        />
      ))}
    </div>
  );
};

//todos배열을 props로 받아 온 후,
//map을 이용해서 TodoListItem 컴포넌트로 변환하여 보여줌
