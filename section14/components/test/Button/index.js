import style from './button.module.css';

export default function Button({ text, bgColor, textColor, onClick }) {
  return (
    <button
      style={{
        backgroundColor: `${bgColor}`,
        color: `${textColor}`,
      }}
      className={style.button}
    >
      {text}
    </button>
  );
}
