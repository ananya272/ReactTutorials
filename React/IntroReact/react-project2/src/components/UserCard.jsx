
import "./UserCard.css"
import PropTypes from 'prop-types';

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={props.image} alt={props.name} />
      <p id='user-desc'>{props.desc}</p>
    </div>
  );
};

// Props validation
UserCard.propTypes = {
  style: PropTypes.object,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default UserCard;
