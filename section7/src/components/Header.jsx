import { memo } from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
}

const OptimizedHeaderComponent = memo(Header);

export default OptimizedHeaderComponent;
// 제공되는 props가 변경되지 않으면, 부모컴포넌트가 리렌더링되더라도 해당 컴포넌트를 렌더링되지 않음
