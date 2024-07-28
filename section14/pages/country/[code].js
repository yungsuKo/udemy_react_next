import { fetchCoutry } from '@/api';
import SubLayout from '@/components/SubLayout';
import { useRouter } from 'next/router';

export default function Country({ country }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  if (!country) {
    return <div>존재하지 않는 국가입니다.</div>;
  }
  return <div>Country page {country.commonName} </div>;
}

Country.Layout = SubLayout;

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { code: 'ABW' },
      },
      {
        params: { code: 'KOR' },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  // 코드에 따라 여러 개의 페이지가 존재하기 때문에 staticprops 사용이 부적절할 수 잇음.
  // 동적 경로를 가질 때는 경로를 찾을 수 있는 함수가 필요함
  let country = null;
  console.log(`${context.params.code} 페이지 생성!`);
  country = await fetchCoutry(context.params.code);

  return {
    props: {
      country,
    },
    revalidate: 3,
  };
};
