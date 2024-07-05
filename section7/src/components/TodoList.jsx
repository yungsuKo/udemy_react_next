import { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';
import PropTypes from 'prop-types';

export default function TodoList({ todos, onUpdate, onDelete }) {
  const [search, setSearch] = useState('');
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const todoFilter = () => {
    if (search === '') return todos;
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <div className="TodoList">
      <h4>Todos</h4>
      <input
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onSearchChange}
      />
      <div className="TodoWrapper">
        {todoFilter().map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};
