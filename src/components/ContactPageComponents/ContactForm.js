import React from "react";

export const ContactForm = () => {
  return (
    <section>
      <form>
        <label for="name">Name:</label>
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
