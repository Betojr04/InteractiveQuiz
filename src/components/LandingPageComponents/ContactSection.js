import React from "react";
import "../../styles/LandingPageStyles/contactsection.css";

export const ContactSection = () => {
  return (
    <section>
      <div className="contact-header">
        <h3>Join The Wellness Revolution</h3>
        <p>
          Be among the pioneers to embrace a new era of health with Prosperum.
          Get exclusive updates on our journey, including funding news, team
          expansions, special promotions, and our much-anticipated app store
          launch. Dive into the future of wellness by staying connected.
        </p>
      </div>
      <form action="submit">
        <label htmlFor="name">First Name :</label>
        <input type="text" name="first_name" placeholder="First Name" />
        <label htmlFor="name">Last Name :</label>
        <input type="text" name="last_name" placeholder="Last Name" />
        <label htmlFor="email_address">Email Adress :</label>
        <input type="text" name="first_name" placeholder="email@example.com" />

        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};
