import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className="navbar-top">
        <div className="nav-logo">
          <Link to="/">Logo</Link>
        </div>
        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="nav-expanded">
          <ul className="nav-items">
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Our Team</Link>
            </li>
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/">Recipe</Link>
            </li>
            <li>
              <Link to="/contactus">Contact/Sign Up</Link>
            </li>
          </ul>
          <form className="nav-search" onSubmit={(e) => e.preventDefault()}>
            <input type="search" name="query" />
            <button type="submit">Search</button>
          </form>
        </div>
      )}
    </nav>
  );
};
