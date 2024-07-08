import { memo } from 'react';
import './TodoItem.css';
import PropTypes from 'prop-types';

function TodoItem({ todo, onUpdate, onDelete }) {
  function getFormatDate(date) {
    var year = date.getFullYear(); //yyyy
    var month = 1 + date.getMonth(); //M
    month = month >= 10 ? month : '0' + month; //month 두자리로 저장
    var day = date.getDate(); //d
    day = day >= 10 ? day : '0' + day; //day 두자리로 저장
    return year + '-' + month + '-' + day; //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
  }

  const isDoneClicked = () => {
    onUpdate(todo.id);
  };
  const isClicked = () => {
    onDelete(todo.id);
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={todo.isDone} onChange={isDoneClicked} />
      <div className="Content">{todo.content}</div>
      <div className="Date">{getFormatDate(new Date(todo.createDt))}</div>
      <button onClick={isClicked}>삭제</button>
    </div>
  );
}

export default memo(TodoItem);

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};
