import { useState } from 'react';
import style from './SearchBar.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function SearchBar({ q }) {
  const [search, setSearch] = useState('');
  const nav = useNavigate();
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const onClick = () => {
    if (search !== '') {
      nav(`/search?q=${search}`);
    }
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) onClick();
  };

  useEffect(() => {
    setSearch(q);
  }, [q]);

  return (
    <div className={style.searchbar}>
      <input
        placeholder="검색어를 입력해주세요"
        value={search}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
      />
      <button onClick={onClick}>검색</button>
    </div>
  );
}
