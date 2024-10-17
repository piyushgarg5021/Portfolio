// Skills.js
import React from 'react';
import AppDesign from '../../assets/app-design.png';
import c_cppLogo from '../../assets/c_cpp.png';
import javaLogo from '../../assets/java.png';
import my_sqlLogo from '../../assets/my_sql.png';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import './skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skillsSection">
      <h2>Skills</h2>
      <div className="skillsContainer">
        {/* <div className="skillCard">
          <img src={UIDesign} alt="UI Design" className="skillIcon" />
          <h3>UI Design</h3>
        </div> */}

        <div className="UILogo"><img src={UIDesign} alt="UI logo" className="uilogo"/>
        <h3>UI Design</h3>
        </div>
        <div className="WebLogo"><img src={WebDesign} alt="Web logo" className="weblogo"/>
        <h3>Web Development</h3>
        </div>
        <div className="JavaLogo"><img src={javaLogo} alt="java logo" className="javalogo"/>
        <h3>Java Developer</h3>
        </div>
        <div className="c_cppLogo"><img src={c_cppLogo} alt="c_cpp logo" className="c_cpplogo"/>
        <h3>C/C++</h3>
        </div> 
        <div className="my_sqlLogo"><img src={my_sqlLogo} alt="my_sql logo" className="my_sqllogo"/>
        <h3>MySqL</h3>
        </div> 
        {/* <div className="skillCard">
          <img src={WebDesign} alt="Web Design" className="skillIcon" />
          <h3>Web Development</h3>
        </div> */}
        {/* <div className="skillCard">
          <img src={AppDesign} alt="App Design" className="skillIcon" />
          <h3>App Development</h3>
        </div> */}
        <div className="AppLogo"><img src={AppDesign} alt="App logo" className="applogo"/>
        <h3>App Development</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;
