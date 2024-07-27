import { fetchCoutry } from '@/api';
import SubLayout from '@/components/SubLayout';
import { useRouter } from 'next/router';

export default function Country({ country }) {
  const router = useRouter();
  return <div>Country page : {country.commonName}</div>;
}

Country.Layout = SubLayout;

export const getServerSideProps = async (context) => {
  const country = await fetchCoutry(context.params.id[0]);
  return {
    props: {
      country,
    },
  };
};
