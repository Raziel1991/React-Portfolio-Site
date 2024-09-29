import React from 'react';
import Mine from '../img/mine.jpg';
import '../index.css'; 

const About = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <h1>About Me</h1>      
      <div className='about-me'>
        <img src={Mine} alt="My Face" />
        <h3>Alfonso Raziel Mendoza Avila</h3>
        <p>I'm a passionate Infra Admin and developer with experience in various technologies.</p>
        <p>I have provided server services to companies such as Suncor, HPE, iHeartRadio, Blackbaud, and Ferrara Candy as a contractor, and to KPMG and Robert Bosch as an employee.</p>
        {/* Link to PDF Resume */}
        <p>
          <a href="./Raziel Mendoza.docx" target="_blank" rel="noopener noreferrer">
            Download My Resume
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
