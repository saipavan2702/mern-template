import React from "react";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">Mern</Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt />
            Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser />
            Register
          </Link>
        </li>
        {/* <li>
          <Link to="/logout">
            <FaSignOutAlt />
          </Link>
        </li> */}
      </ul>
    </div>
  );
}

export default Header;
