import 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <div>
      {props.children}
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    </div>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Button.defaultProps = {
  text: 'Click me',
  children: null,
};

export default Button;
