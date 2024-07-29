import { fetchCountries, fetchCoutry } from '@/api';
import CountryList from '@/components/CountryList';
import SearchBar from '@/components/SearchBar';
import Button from '@/components/test/Button';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home({ countries }) {
  const code = 'KOR';
  const router = useRouter();
  const onClickButton = () => {
    router.push('/search');
  };
  return (
    <>
      <Head>
        <title>NARAS</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="NARAS" />
        <meta property="og:description" content="나라 정보" />
      </Head>
      <SearchBar />
      <CountryList countries={countries} />
    </>
  );
}

export const getStaticProps = async () => {
  // SSR을 위해 서버측에서 페이지 컴포넌트에게 전달할 데이터를 설정하는 함수
  // api에서 불러와서 가져오도록 수정하기
  console.log('countries 데이터 불러옴');
  const countries = await fetchCountries();
  return {
    props: { countries },
  };
};
