import React from "react";
import "../../styles/LandingPageStyles/solutionsection.css";

export const SolutionSection = () => {
  return (
    <section className="solution-section">
      <div className="problem-text">
        <h2 className="problem-title">The Problem</h2>
        <p>
          Today's health tech obsession with calories overlooks the essence of
          true well-being. This narrow view leads to frustration and a
          disconnect from the nutrients that genuinely fuel health. We're here
          to challenge that, making your path to wellness both clear and
          fulfilling.
        </p>
      </div>
      <div className="solution-text">
        <h2 className="solution-title">The Solution</h2>
        <p>
          Prosperum redefines health tech by prioritizing nutrient balance over
          calorie counting. Our streamlined apps guide you towards informed
          choices and a harmonious lifestyle. Embrace the power of nutrients
          with Prosperum, where your well-being journey begins with clarity and
          empowerment.
        </p>
      </div>
    </section>
  );
};
