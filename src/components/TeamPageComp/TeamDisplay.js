import React from "react";
import { teamMembers } from "./TeamInfo";
import "../../styles/TeamPageStyles/teamdisplay.css";

export const TeamDisplay = () => {
  return (
    <section>
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member">
          <img src={member.img} alt={member.name} />
          <div>
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>{member.bio}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
