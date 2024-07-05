import { useRef } from 'react';
import './TodoEditor.css';

export default function TodoEditor({
  todo,
  onChangeInput,
  onSubmitTodo,
  setTodo,
}) {
  const inputRef = useRef();
  const onClick = () => {
    if (todo === '') {
      inputRef.current.focus();
      return;
    }
    onSubmitTodo();
    setTodo('');
  };
  return (
    <div className="TodoEditor">
      <input ref={inputRef} value={todo} onChange={onChangeInput} />
      <button onClick={onClick}>추가</button>
    </div>
  );
}
