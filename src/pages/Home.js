/*
  File name: Home.js
  Student's Name: Alfonso Raziel Mendoza Avila
  Student ID: 301336913
  Date: 9-28-2024
*/

import React from 'react';
import DesignerPng from '../img/Designer.png';
import '../index.css'; 

const Home = () => {
  return (
    <div className="home-container animate__animated animate__fadeIn">
      <h1>Welcome to My Portfolio</h1>
      <div className="content-container">
        <div className="logo">
          <img src={DesignerPng} alt="My Logo ARMA" />
        </div>
        <div className="myText">
          <p>
            I'm a PowerShell Developer transitioning into full-stack development, with a particular passion for C# and Java. My over a decade of experience as a Windows System Administrator has provided me with a solid foundation in automation and infrastructure management. I'm now applying those skills to build scalable applications and modern software solutions.
          </p>
          <p>
            Beyond my professional experience, I'm a dedicated enthusiast of video game programming. I've always been fascinated by the intricate systems and creative processes that go into crafting immersive game worlds. This passion has fueled my desire to explore new programming languages and frameworks, and I'm eager to contribute my skills to game development projects.
          </p>
          <p>
            Currently, I'm actively developing new projects on GitHub, showcasing my proficiency in back-end and front-end development, cloud computing, API integration, and Agile methodologies. My goal is to join a team where I can leverage my expertise in C# and Java to contribute to complex software projects, particularly those related to game development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
