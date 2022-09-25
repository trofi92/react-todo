import React, { useState } from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdBorderColor,
  MdCheckCircle,
} from "react-icons/md";
import cn from "classnames";
import "./TodoListItem.scss";

export const TodoListItem = ({ todos, todo, setTodos, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  const [edited, setEdited] = useState(false);
  // 수정 상태 감지, defalut value = false

  const [newText, setNewText] = useState(todo.text);
  // 교체된 텍스트 감지, todo.text를 대체할 예정
  const onEditInput = (e) => {
    setNewText(e.target.value);
  };
  console.log(newText);

  const onModify = () => {
    setEdited(true);
  };

  const onConfirm = () => {
    setTodos(
      todos.map(
        (item) => ({
          ...item,
          text: item.id === todo.id ? item.id && newText : item.text,
        }),
        [todos],
      ),
    );
    setEdited(false);
  };

  console.log(todo);
  //수정 완료 후 input을 닫고 다시 수정 가능토록 defalut state로 변경

  return (
    <div className="TodoListItem">
      <div className={cn("checkbox", { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>

      {edited ? (
        <>
          <form onSubmit={onConfirm}>
            <button type="button" className="modify" onClick={onConfirm}>
              <MdCheckCircle />
            </button>
            <input
              onChange={onEditInput}
              type="text"
              placeholder="새로운 할 일을 입력해주세요"
              required
            ></input>
          </form>
        </>
      ) : (
        <button type="button" className="modify" onClick={onModify}>
          <MdBorderColor />
        </button>
      )}
    </div>
  );
};
//각 할 일에 대한 정보를 보여줌. todo객체를 props로 받아온 후,
//상태에 따라 다른 스타일의 ui를 보여줌
