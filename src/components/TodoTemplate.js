import "./TodoTemplate.scss";

export const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

// 화면 가운데 정렬, 앱 타이틀 표시.
// children으로 내부 jsx를 props로 받아와서 상태에 따라 다른 스타일의 UI를 렌더링
