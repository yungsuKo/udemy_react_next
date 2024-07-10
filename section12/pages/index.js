import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const code = 'KOR';
  const router = useRouter();
  const onClickButton = () => {
    router.push('/search');
  };
  return (
    <div>
      Home page
      <div>
        <button onClick={onClickButton}>search page 로 이동</button>
      </div>
      <div>
        <Link href={'/search'}>Search</Link>
      </div>
      <div>
        <Link href={`/country/${code}`}>{code} 페이지로 이동</Link>
      </div>
    </div>
  );
}
