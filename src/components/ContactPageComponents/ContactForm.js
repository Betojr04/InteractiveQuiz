import React from "react";
import "../../styles/ContactPageStyles/contactform.css";

export const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="left-section">
        <h1>Contact Us</h1>
        <p>
          If you have any questions or concerns, please feel free to contact us
          using the form below.
        </p>
      </div>
      <form>
        <label for="first_name">First Name:</label>
        <input type="text" id="name" name="name" required></input>
        <label for="last">Last Name:</label>
        <input type="text" id="name" name="name" required></input>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required></input>
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
