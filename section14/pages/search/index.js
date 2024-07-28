import { fetchCountries, fetchSearchResults } from '@/api';
import SubLayout from '@/components/SubLayout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  const [countries, setCountries] = useState([]);

  const setData = async () => {
    const data = fetchSearchResults(q);
    setCountries(data);
  };

  useEffect(() => {
    if (q) {
      setData();
    }
  }, [q]);

  return (
    <div>
      Seach page
      {countries.map((country) => {
        return <div key={country.code}>{country.commonName}</div>;
      })}
    </div>
  );
}

Search.Layout = SubLayout;
