import 'react';

const LoginBtn = ({ onClick }) => {
  console.log("Rendering LoginBtn");
  return (
    <button onClick={onClick} className="login-btn">
      Login
    </button>
  );
};
export default LoginBtn;
