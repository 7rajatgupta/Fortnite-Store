import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h3>Logo here</h3>
      <ul className="links">
        <Link className="link" to="/about">
          <li>About</li>
        </Link>
        <Link className="link" to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
