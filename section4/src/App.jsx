import { useState } from 'react';
import './App.css';
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import Even from './components/Even';
import useUpdate from './hooks/useUpdate';
import useInput from './hooks/useInput';

function App() {
  const [count, setCount] = useState(0);
  const [text, onChangeText] = useInput();

  useUpdate(() => {
    console.log('app component update');
  });
  // 1. 마운트, 빈배열만 넣어두면 아무것도 검사하지 않기때문에 마운트에만 호출될 수 있음.
  // useEffect(() => {
  //   console.log('마운트');
  // }, []);
  // 2. 업데이트, array가 비어있으면 모든 업데이트를 다룰수있음.
  // 다만 첫 마운트에서도 해당 함수가 실행되니 이때는 ref를 사용해서 이를 제어할 수 있음.

  // 3. 언마운트

  const onClickButton = (val) => {
    setCount(count + val);
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
