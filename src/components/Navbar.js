/* This component will be the navbar that will be displayed on the top of the page. It will include the logo, a search bar, and the links to the different pages of the blog. It will be a functional component. */
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      {/* LOGO SECTION */}
      <div className="nav-logo">
        <Link to="/">Logo</Link>
      </div>
      {/* this form below will include a onSubmit={} once I start implementing the logic code. This comment serves as a reminder for future beto that this part still needs to be done */}
      <form className="nav-search" action="/search" method="GET">
        <label htmlFor="search">Search:</label>
        <input type="search" name="query" />
        <button type="submit">Search</button>{" "}
        {/* this button will be hidden and will be used to submit the form with the search input */}
      </form>
      {/* HAMBURGER MENU */}

      <div className="hamburger-menu">
        <button
          className="hamburger"
          aria-label="Toggle-menu"
          aria-expanded="false"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div className="menu-items" hidden>
          <ul>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Recipes</Link>
            </li>
            <li>
              <Link to="/">Key Features</Link>
            </li>
            <li>
              <Link to="/">Our Team</Link>
            </li>
            <li>
              <Link to="/">Sign Up</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};