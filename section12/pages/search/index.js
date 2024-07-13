import { fetchCountries, fetchSearchResults } from '@/api';
import SubLayout from '@/components/SubLayout';

export default function Search({ countries }) {
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

export const getServerSideProps = async (context) => {
  // 검색어를 불러와야함
  // 1. 검색결과로 API 호출
  // 2. props에 검색결과를 넘김

  const countries = await fetchSearchResults(context.query.q);
  console.log(countries);
  return {
    props: { countries },
  };
};
