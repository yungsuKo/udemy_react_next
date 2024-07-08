import { useSearchParams } from 'react-router-dom';
import { fetchSearchResults } from '../api';
import { useEffect } from 'react';
import { useState } from 'react';
import CountryItem from '../components/CountryItem';
import style from './Search.module.css';
import SearchBar from '../components/SearchBar';
import CountryList from '../components/CountryList';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q');

  const [countries, setCountries] = useState([]);
  const setInitData = async () => {
    const data = await fetchSearchResults(q);
    setCountries(data);
  };

  useEffect(() => {
    setInitData();
  }, [q]);
  return (
    <div className={style.container}>
      <SearchBar q={q} />
      <div>
        <b>{q}</b> 검색결과
      </div>
      <CountryList countries={countries} />
    </div>
  );
}
