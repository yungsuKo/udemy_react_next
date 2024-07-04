import './Button.css';
import PropTypes from 'prop-types';

export default function Button({ buttonName, color, children }) {
  const onClick = () => {
    alert('버튼을 클릭했습니다.');
  };
  return (
    <button
      onClick={onClick}
      className="button"
      style={{
        backgroundColor: color,
      }}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string,
  color: PropTypes.string,
};
