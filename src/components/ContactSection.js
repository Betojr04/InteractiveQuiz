import React from "react";
import "../styles/contactsection.css";

export const ContactSection = () => {
  return (
    <section>
      <div className="contact-header">
        <h3>Contact Us</h3>
      </div>
      <form action="submit">
        <label htmlFor="name">First Name :</label>
        <input type="text" />
        <label htmlFor="name">Last Name :</label>
        <input type="text" />
        <label htmlFor="email_address">Email Adress :</label>
        <input type="text" />
        <label htmlFor="name">Message :</label>
        <input type="text" />
      </form>
    </section>
  );
};
