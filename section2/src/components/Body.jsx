import { useRef, useState } from 'react';
import './Body.css';
import Button from './Button';

export default function Body() {
  // const [name, setName] = useState('');
  // const [gender, setGender] = useState('');
  // const [bio, setBio] = useState('');
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const nameRef = useRef();

  const [state, setState] = useState({
    name: '',
    gender: '',
    bio: '',
  });
  const onSubmit = () => {
    console.log(state);
    if (state.name === '') {
      nameRef.current.focus();
      return;
    }
    alert(`${state.name}님 회원가입을 축하합니다.`);
  };

  return (
    <div className="body">
      <div>
        <input
          value={state.name}
          onChange={onChange}
          name={'name'}
          ref={nameRef}
        />
        {name.length} / 500
      </div>
      <div>
        <select value={state.gender} onChange={onChange} name={'gender'}>
          <option value="">밝히지 않음</option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
      </div>
      <div>
        <textarea value={state.bio} onChange={onChange} name={'bio'} />
      </div>
      <div>
        <button onClick={onSubmit}>회원가입</button>
      </div>
    </div>
  );
}
