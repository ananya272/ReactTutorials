import 'react'; // Fixed the React import syntax
import { NavLink } from 'react-router-dom'; // Removed unused Link import
import './Navbar.css'; // Assuming styles are defined here

const Navbar = () => {
  return (
    <nav> {/* Changed div to nav for semantic HTML */}
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
