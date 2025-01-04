const LogoutBtn = ({ onClick }) => {
  console.log("Rendering LogoutBtn");
  return (
    <button onClick={onClick} className="logout-btn">
      Logout
    </button>
  );
};

export default LogoutBtn;
