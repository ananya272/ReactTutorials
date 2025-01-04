import 'react';
import PropTypes from 'prop-types';

const Card = ({ title, name, setName }) => {
  return (
    <div className="card">
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter name"
      />
      <p>
        Name state variable ki value inside {title}: {name}
      </p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
};

Card.defaultProps = {
  title: 'Default Title',
};

export default Card;
