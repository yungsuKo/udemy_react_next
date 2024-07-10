import SubLayout from '@/components/SubLayout';
import { useRouter } from 'next/router';

export default function Country() {
  const router = useRouter();
  const { id } = router.query;
  return <div>Country page : {id}</div>;
}

Country.Layout = SubLayout;
