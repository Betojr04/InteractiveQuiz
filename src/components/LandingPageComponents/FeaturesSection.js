import React from "react";
import "../../styles/LandingPageStyles/featuressection.css";

// import feature1 from "../../assets//feature1.jpeg";

export const FeatureSection = () => {
  return (
    <section className="features">
      <h1 className="title">FEATURES</h1>
      <div className="features-container">
        <div className="feature1">
          <img src="../../assets/feature1.jpeg" alt="first" />
        </div>
        <div className="feature2"></div>
        <div className="feature3"></div>
      </div>
    </section>
  );
};
