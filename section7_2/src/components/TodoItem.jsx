import './TodoItem.css';

export default function TodoItem({
  id,
  content,
  isDone,
  createDt,
  onClickIsDone,
  onClickDelete,
}) {
  const onChange = () => {
    onClickIsDone(id);
  };
  const onClick = () => {
    onClickDelete(id);
  };
  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChange} />
      <div className="Content">{content}</div>
      <div className="Date">{new Date(createDt).toLocaleDateString()} </div>
      <button onClick={onClick}>삭제</button>
    </div>
  );
}
