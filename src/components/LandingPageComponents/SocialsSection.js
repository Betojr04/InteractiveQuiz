import React from "react";
import "../../styles/LandingPageStyles/socialssection.css";

export const SocialsSection = () => {
  return (
    <section>
      <div className="socials-header">
        <h3>Follow Us On Instagram</h3>
        <a
          href="https://www.instagram.com/prosperumhealth"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>@prosperumhealth</p>
        </a>
      </div>
      <div className="posts-container"></div>
    </section>
  );
};
