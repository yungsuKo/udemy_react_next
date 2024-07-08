import { useState, useMemo, useContext } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';
import PropTypes from 'prop-types';

import { TodoStateContext } from '../TodoStateContext';
import { TodoDispatchContext } from '../TodoDispatchContext';

export default function TodoList() {
  const { onDelete, onUpdate } = useContext(TodoDispatchContext);
  const { todos } = useContext(TodoStateContext);
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

  const { totalCount, doneCount, noDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const noDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, noDoneCount };
  }, [todos]);

  return (
    <div className="TodoList">
      <h4>Todos</h4>
      <input
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onSearchChange}
      />
      <div>전체 투두 : {totalCount}</div>
      <div>완료 투두 : {doneCount}</div>
      <div>미완 투두 : {noDoneCount}</div>

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
