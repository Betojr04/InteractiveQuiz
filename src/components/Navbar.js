import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">Logo</div>
      <div className="nav-search">search bar</div>
      <div className="nav-items">
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Features</Link>
        </li>
      </div>
    </nav>
  );
};
