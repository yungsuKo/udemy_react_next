import { useRef, useState } from 'react';
import './App.css';
import TodoEditor from './components/TodoEditor';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

function App() {
  const mockData = [
    {
      id: 0,
      content: 'aaaa',
      createDt: new Date().getTime(),
      isDone: false,
    },
    { id: 1, content: 'aaaa', createDt: new Date().getTime(), isDone: false },
    { id: 2, content: 'aaaa', createDt: new Date().getTime(), isDone: false },
  ];

  const idRef = useRef(3);
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState(mockData);

  const onChangeInput = (e) => {
    setTodo(e.target.value);
  };
  const onSubmitTodo = () => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: todo,
        createDt: new Date().getTime(),
        isDone: false,
      },
    ]);
  };
  const onClickIsDone = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const onClickDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <TodoHeader />
      <TodoEditor
        todo={todo}
        onChangeInput={onChangeInput}
        onSubmitTodo={onSubmitTodo}
        setTodo={setTodo}
      />
      <TodoList
        todos={todos}
        onClickIsDone={onClickIsDone}
        onClickDelete={onClickDelete}
      />
    </div>
  );
}

export default App;
