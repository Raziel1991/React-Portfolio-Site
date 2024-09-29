/*
  File name: Projects.js
  Student's Name: Alfonso Raziel Mendoza Avila
  Student ID: 301336913
  Date: 9-28-2024
*/


import React from 'react';
import first from '../img/WeatherBotApiTeleGRam.png';
import second from '../img/TinyApiSQL.png';
import third from '../img/piglet.png';
import './Projects.css';

const Projects = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <h1>My Projects</h1>
      <p>Here are some of the projects I've worked on.</p>

      {/* First project */}
      <div className="project-container">
        <div className="text-container">
          <p>
            WeatherBotAPITelegram is a Telegram bot designed to provide users with real-time weather information using an external weather API. The bot allows users to easily obtain weather forecasts for their preferred locations by sending simple commands. Built with a focus on user-friendliness, this project showcases the integration of APIs and bot functionality in a seamless and interactive way.
          </p>
        </div>
        <img className="main-image" src={first} alt="WeatherBotAPITelegram" />
      </div>

      {/* Second project */}
      <div className="project-container reverse">
        <img className="main-image" src={second} alt="TinyWebAPISQL" />
        <div className="text-container">
          <p>
            TinyWebAPISQL is a lightweight RESTful API built with ASP.NET Core, designed to manage car data in a SQL database. This project provides a straightforward interface for performing CRUD (Create, Read, Update, Delete) operations on car records, making it ideal for developers looking to implement a simple yet effective API structure.
          </p>
        </div>
      </div>

      {/* Third project */}
      <div className="project-container reverse"> {/* Ensure to include 'reverse' here */}
        <div className="text-container">
          <p>
            Embark on a whimsical journey in Crayon Piglet Adventure, where players step into the adorable shoes of a lively piglet, beautifully illustrated in charming crayon art style. This 2D platformer combines vibrant visuals with engaging gameplay mechanics, creating a delightful experience for players of all ages.
          </p>
        </div>
        <img className="main-image" src={third} alt="Crayon Piglet Adventure" />
      </div>
      
      <div className="Margin-bottom"></div>
    </div>
  );
};

export default Projects;
