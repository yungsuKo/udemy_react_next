import style from './SubLayout.module.css';

export default function SubLayout({ children }) {
  return (
    <div>
      {children}
      <footer className={style.footer}>@yungsuKo</footer>
    </div>
  );
}
