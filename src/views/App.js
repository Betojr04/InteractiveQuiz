import React from "react";
import "../styles/App.css";

export const App = () => {
  return (
    <main>
      <section className="hero-section">
        <h1>PROSPERUM</h1>
        <p className="title-paragraph">
          Revolutionize Your Nutrition Experience
        </p>
        <img
          src="https://images.unsplash.com/photo-1607522154118-75801cf8f2e9?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="healthy"
        />
      </section>

      <section className="solution-section">
        <div className="problem-text">
          <h2>The Problem</h2>
          <p>
            In the current health tech landscape, individuals often struggle
            with maintaining a sustainable approach to well-being. The
            prevailing focus on calorie counting oversimplifies the intricacies
            of a balanced lifestyle, leaving people feeling overwhelmed and
            restricted in their choices. The lack of emphasis on nutrient
            empowerment results in a disconnect between individuals and the
            vital components that contribute to their overall health. This
            imbalance in approach leads to ineffective health management,
            dissatisfaction with limited results, and an unhealthy relationship
            with food.
          </p>
        </div>
        <div className="solution-text">
          <h2>The Solution</h2>
          <p>
            Meet Prosperum, an innovative health tech platform that shifts the
            approach from calorie counting to nutrient empowerment. Our mobile
            and web apps guide users in understanding the essential harmony for
            well-being. Unlike traditional methods, Prosperum emphasizes the
            core principle that a healthy life starts with embracing nutrient
            balance and informed choices. Join us in reshaping health tech.
            Prosperum – because true well-being begins with understanding and
            embracing the dynamic power of nutrients. Explore our key features
            here.
          </p>
        </div>
      </section>
    </main>
  );
};
