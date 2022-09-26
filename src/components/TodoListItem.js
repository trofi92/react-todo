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

const TodoListItem = ({ todo, todos, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  const [edited, setEdited] = useState(false);
  // 수정 상태 감지, defalut value = false

  const [newText, setNewText] = useState("");
  // 교체된 텍스트 감지, todo.text를 대체할 예정
  const onEditInput = (e) => {
    setNewText(e.target.value);
  };

  const onModify = () => {
    setEdited(true);
  };
  const onConfirm = () => {
    todos.map(
      (x) => ({
        ...x,
        text: x.id === todo.id ? x.id && newText : x.text,
      }),
      [],
    );
    setEdited(false);
  };
  // console.log(todo.id, todo.text);
  //수정 완료 후 input을 닫고 defalut state로 변경,  map으로 변경된 text를 삽입하고 리렌더링

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

export default React.memo(TodoListItem);
//각 할 일에 대한 정보를 보여줌. todo객체를 props로 받아온 후,
//상태에 따라 다른 스타일의 ui를 보여줌
