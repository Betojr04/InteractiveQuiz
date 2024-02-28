/* This component will be the navbar that will be displayed on the top of the page. It will include the logo, a search bar, and the links to the different pages of the blog. It will be a functional component. */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const searchButton = () => {
    alert("This button will be used to submit the form with the search input");
  };

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
        <button onClick={searchButton} type="submit">
          Search
        </button>
      </form>

      <div className="nav-items">
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
            <Link to="/contactus">Contact Us/Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
