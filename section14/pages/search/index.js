import { fetchCountries, fetchSearchResults } from '@/api';
import CountryList from '@/components/CountryList';
import SearchBar from '@/components/SearchBar';
import SubLayout from '@/components/SubLayout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  const [countries, setCountries] = useState([]);

  const setData = async () => {
    const data = await fetchSearchResults(q);

    setCountries(data);
  };

  useEffect(() => {
    if (q) {
      setData();
    }
  }, [q]);

  return (
    <>
      <Head>
        <title>NARAS 검색결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="NARAS" />
        <meta property="og:description" content="나라 정보" />
      </Head>
      <SearchBar q={q} />
      <CountryList countries={countries} />
    </>
  );
}

Search.Layout = SubLayout;
