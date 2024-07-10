import style from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <div className={style.header}>NARAS</div>
      <main className={style.main}>{children}</main>
    </div>
  );
}
