// Education.js
import React from 'react';
import collegeLogo from '../../assets/clg.png'; // Make sure this path is correct for your college logo
import './education.css';

const Education = () => {
  return (
    <section id="education" className="educationSection">
      <h2>Education</h2>
      <div className="educationContent">
        <div className="educationItem">
          <img src={collegeLogo} alt="College Logo" className="collegeLogo" />
          <h3>B.Tech (CSE) 2022-2026</h3>
          <p>JK Lakshmipat University, Jaipur</p>
        </div>
        <div className="educationItem">
          <h3>12th Grade (RBSE) 2021</h3>
          <p>Ready to Read School, Hindaun City</p>
        </div>
        <div className="educationItem">
          <h3>10th Grade (RBSE) 2019</h3>
          <p>Ready to Read School, Hindaun City</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
