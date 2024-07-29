import { useRouter } from 'next/router';
import style from './CountryItem.module.css';
import Image from 'next/image';

export default function CountryItem({
  code,
  commonName,
  flagEmoji,
  flagImg,
  capital,
  region,
  population,
}) {
  const router = useRouter();
  const gotoCounty = () => {
    router.push(`/country/${code}`);
  };

  return (
    <div className={style.container} onClick={gotoCounty}>
      <div className={style.flag_img}>
        <Image src={flagImg} fill />
        {/* 이미지 태그는 앱솔루트 포지션을 갖고 있기 때문에 부모요소에 relative로 설정해주어야 한다. */}
      </div>
      <div className={style.content}>
        <div className={style.name}>
          {flagEmoji} {commonName}
        </div>
        <div>지역 : {region}</div>
        <div>수도 : {capital.join(',')}</div>
        <div>인구 : {population}</div>
      </div>
    </div>
  );
}
