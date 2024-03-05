import React from "react";
import { TeamDisplay } from "../components/TeamPageComp/TeamDisplay.js";

export const Team = () => {
  return (
    <main>
      <div className="title">
        <h1>Meet Our Team</h1>
      </div>
      <section>
        <TeamDisplay />
      </section>
    </main>
  );
};
