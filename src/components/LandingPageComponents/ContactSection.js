import React from "react";
import "../../styles/LandingPageStyles/contactsection.css";

export const ContactSection = () => {
  return (
    <section>
      <div className="contact-header">
        <h2 className="contact-title">Join The Waitlist</h2>
        <p>
          Be among the pioneers to embrace a new era of health with Prosperum.
          Get exclusive updates on our journey, including funding news, team
          expansions, special promotions, and our much-anticipated app store
          launch. Dive into the future of wellness by staying connected.
        </p>
      </div>
      <form action="submit">
        <input type="text" name="first_name" placeholder="First Name" />
        <input type="text" name="last_name" placeholder="Last Name" />
        <input type="text" name="first_name" placeholder="email@example.com" />

        <input className="button" type="submit" value="Submit" />
      </form>
    </section>
  );
};
