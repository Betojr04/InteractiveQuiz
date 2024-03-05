import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="/link1">Blog</a>
        <a href="/link2">Our Team</a>
        <a href="/link3">Features</a>
      </div>
      <div className="footer-links">
        <a href="/link4">Recipes</a>
        <a href="/link5">Contact/Sign Up</a>
      </div>
      <div className="social-icons">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <p>© 2023 Prosperum</p>
    </footer>
  );
};
