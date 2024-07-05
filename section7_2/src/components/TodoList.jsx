import { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

export default function TodoList({ todos, onClickIsDone, onClickDelete }) {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const todoFilter = () => {
    if (search === '') return todos;
    return todos.filter((todo) => todo.content.includes(search));
  };

  return (
    <div className="TodoList">
      <div className="Searchbar">
        <input
          placeholder="🔍 검색어를 입력하세요"
          onChange={onChangeSearch}
          value={search}
        />
      </div>
      <div className="TodoWrapper">
        {todoFilter().map((todo) => (
          <TodoItem
            {...todo}
            key={todo.id}
            onClickIsDone={onClickIsDone}
            onClickDelete={onClickDelete}
          />
        ))}
      </div>
    </div>
  );
}
