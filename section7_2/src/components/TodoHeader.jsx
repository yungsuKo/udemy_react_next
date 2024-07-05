import './TodoHeader.css';

export default function TodoHeader() {
  return (
    <header>
      <h1>{new Date().toLocaleDateString()}</h1>
    </header>
  );
}
