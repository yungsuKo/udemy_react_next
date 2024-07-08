import style from './Country.module.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCoutry } from '../api';
import { useEffect } from 'react';
export default function Country() {
  const params = useParams();
  const [country, setCountry] = useState();
  const setInitData = async () => {
    const data = await fetchCoutry(params.code);
    setCountry(data);
  };

  useEffect(() => {
    setInitData();
  }, [params.code]);
  if (!country) return <>Loading...</>;
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.commonName}>
          {country.flagEmoji} &nbsp; {country.commonName}
        </div>
        <div className={style.officialName}>{country.officialName}</div>
      </div>
      <img
        src={country.flagImg}
        alt={`${country.commonName}의 국기 이미지 입니다.`}
      />
      <div className={style.body}>
        <div>
          <b>코드 :</b>&nbsp;{country.code}
        </div>
        <div>
          <b>수도 :</b>&nbsp;{country.capital.join(',')}
        </div>
        <div>
          <b>지역 :</b>&nbsp;{country.region}
        </div>
        <div>
          <b>지도 :</b>&nbsp;
          <a target="_blank" href={country.googleMapURL}>
            {country.googleMapURL}
          </a>
        </div>
      </div>
    </div>
  );
}
