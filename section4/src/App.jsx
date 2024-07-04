import { useState, useEffect } from 'react';
import './App.css';
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import { useRef } from 'react';
import Even from './components/Even';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const isMountRef = useRef(false);
  // 1. 마운트, 빈배열만 넣어두면 아무것도 검사하지 않기때문에 마운트에만 호출될 수 있음.
  useEffect(() => {
    console.log('마운트');
  }, []);
  // 2. 업데이트, array가 비어있으면 모든 업데이트를 다룰수있음.
  // 다만 첫 마운트에서도 해당 함수가 실행되니 이때는 ref를 사용해서 이를 제어할 수 있음.
  useEffect(() => {
    if (!isMountRef.current) {
      isMountRef.current = true;
      return;
    }
    console.log('업데이트');
  });
  // 3. 언마운트

  const onClickButton = (val) => {
    setCount(count + val);
  };
  const onChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={onChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller count={count} onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
