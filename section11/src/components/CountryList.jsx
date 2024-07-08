import CountryItem from './CountryItem';
import style from './CountryList.module.css';

export default function CountryList({ countries }) {
  return (
    <div className={style.container}>
      {countries.map((country) => {
        return <CountryItem key={country.code} {...country} />;
      })}
    </div>
  );
}
