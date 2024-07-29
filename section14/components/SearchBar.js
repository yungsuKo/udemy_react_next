import { useState } from 'react';
import style from './SearchBar.module.css';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SearchBar({ q }) {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const onClick = () => {
    if (search !== '') {
      router.push(`/search?q=${search}`);
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
