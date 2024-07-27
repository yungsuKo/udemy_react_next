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
  // SSR을 위해 서버측에서 페이지 컴포넌트에게 전달할 데이터를 설정하는 함수
  // api에서 불러와서 가져오도록 수정하기
  const countries = await fetchCountries();
  return {
    props: { countries },
  };
};
