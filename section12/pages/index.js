import { fetchCountries, fetchCoutry } from '@/api';
import Button from '@/components/test/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home({ countries }) {
  const code = 'KOR';
  const router = useRouter();
  const onClickButton = () => {
    router.push('/search');
  };
  return (
    <div>
      {/* <Button text={'클릭'} bgColor={'black'} textColor={'white'} /> */}
      {countries.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  // api에서 불러와서 가져오도록 수정하기
  const countries = await fetchCountries();
  return {
    props: { countries },
  };
};
