import 'react';
import PropTypes from 'prop-types';

const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
};

Card.defaultProps = {
  children: null,
};

export default Card;
