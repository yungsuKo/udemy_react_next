import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
import { useRef } from 'react';
import { useReducer } from 'react';

const mockData = [
  {
    id: 0,
    isDone: true,
    content: '리액트 공부하기',
    createDt: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '운동하기',
    createDt: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: '악기 배우기',
    createDt: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE': {
      return [...state, action.data];
    }
    case 'UPDATE': {
      return state.map((todo) => {
        if (todo.id == action.data) return { ...todo, isDone: !todo.isDone };
        return todo;
      });
    }
    case 'DELETE': {
      return state.filter((todo) => todo.id !== action.data);
    }
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      createDt: new Date().getTime(),
    };
    dispatch({
      type: 'CREATE',
      data: newTodo,
    });
  };

  const onUpdate = (targetId) => {
    // setTodos(
    // todos.map((todo) => {
    //   if (todo.id == targetId) return { ...todo, isDone: !todo.isDone };
    //   return todo;
    // })
    // );
    dispatch({
      type: 'UPDATE',
      data: targetId,
    });
  };

  const onDelete = (targetId) => {
    // setTodos(todos.filter((todo) => todo.id !== targetId));
    dispatch({
      type: 'DELETE',
      data: targetId,
    });
  };

  return (
    <>
      <div className="App">
        <Header />
        <TodoEditor onCreate={onCreate} />
        <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </>
  );
}

export default App;
