import { useState } from 'react';
import './TodoEditor.css';
import { useRef } from 'react';
export default function TodoEditor({ onCreate }) {
  const [content, setContent] = useState('');
  const inputRef = useRef();
  const onChanegecontent = (e) => {
    setContent(e.target.value);
  };

  const onClick = () => {
    if (content == '') {
      inputRef.current.focus();
      return;
    }
    setContent('');
    onCreate(content);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) onClick();
  };

  return (
    <div className="Editor">
      <input
        ref={inputRef}
        placeholder="새로운 Todo를 입력해 보세요."
        onChange={onChanegecontent}
        onKeyDown={onKeyDown}
        value={content}
      />
      <button onClick={onClick}>추가</button>
    </div>
  );
}
