import React, { useState, useCallback } from "react";
import { MdDoneAll } from "react-icons/md";
import "./TodoInsert.scss";

export const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value],
  );

  console.log(value);
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdDoneAll />
      </button>
    </form>
  );
};

//새 할일 입력-추가. state로 input 상태관리
