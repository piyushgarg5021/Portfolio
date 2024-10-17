// Contact.js
import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contactSection">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out through any of the following platforms:</p>
      <ul className="contactList">
        <li>
          <strong>Email:</strong> <a href="pysg5021@gmail.com">pysg5021@gmail.com</a>
        </li>
        <li>
          <strong>LinkedIn:</strong> <a href="https://in.linkedin.com/in/piyush-garg-a14368256" target="_blank" rel="noopener noreferrer">piyush-garg-linkedin</a>
        </li>
        <li>
          <strong>GitHub:</strong> <a href="https://github.com/your-github-id" target="_blank" rel="noopener noreferrer">github.com/your-github-id</a>
        </li>
      </ul>
      <a href="/my_cv.pdf" download className="downloadResumeButton">Download Resume</a>
    </section>
  );
};

export default Contact;
