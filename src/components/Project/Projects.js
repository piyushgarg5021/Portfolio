import React from 'react';
import './projects.css';

// Importing project images
import AlumniImage from '../../assets/alumni-management.png';
import ATMImage from '../../assets/atm-machine.png';
import PortfolioImage from '../../assets/portfolio-showcase.png';
import SDGImage from '../../assets/sdg-research.png';
import StrokeDataImage from '../../assets/stroke-data-ml.png';
import WeatherAppImage from '../../assets/weather-app.png';

const Projects = () => {
  return (
    <section id="projects" className="projectsSection">
      <h2>Projects</h2>
      <div className="projectsContent">
        
        {/* Alumni Management System */}
        <div className="projectItem">
          <img src={AlumniImage} alt="Alumni Management System" className="projectImage" />
          <h3>Alumni Management System</h3>
          <p><strong>Technologies Used:</strong> MySQL</p>
        </div>

        {/* ATM Machine GUI */}
        <div className="projectItem">
          <img src={ATMImage} alt="ATM Machine GUI" className="projectImage" />
          <h3>ATM Machine GUI</h3>
          <p><strong>Technologies Used:</strong> Tinkercad</p>
        </div>

        {/* Research and Analysis on SDG-10 */}
        <div className="projectItem">
          <img src={SDGImage} alt="SDG Research" className="projectImage" />
          <h3>Research and Analysis on SDG-10</h3>
          <p><strong>Technologies Used:</strong> Data analysis tools (Excel, R, or Python)</p>
        </div>

        {/* Weather App */}
        <div className="projectItem">
          <img src={WeatherAppImage} alt="Weather App" className="projectImage" />
          <h3>Weather App</h3>
          <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript, APIs for weather data</p>
        </div>

        {/* Portfolio Showcase Website */}
        <div className="projectItem">
          <img src={PortfolioImage} alt="Portfolio Showcase Website" className="projectImage" />
          <h3>Portfolio Showcase Website</h3>
          <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript, Node.js (or similar backend framework)</p>
        </div>

        {/* Research on Stroke Data in Machine Learning */}
        <div className="projectItem">
          <img src={StrokeDataImage} alt="Stroke Data Research" className="projectImage" />
          <h3>Research on Stroke Data in Machine Learning</h3>

          <p><strong>Technologies Used:</strong> Python, machine learning libraries (e.g., scikit-learn, Pandas)</p>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
