import { useEffect } from 'react';

export default function Even() {
  useEffect(() => {
    return () => {
      console.log('언마운트');
    };
  }, []);
  return <>짝수</>;
}
