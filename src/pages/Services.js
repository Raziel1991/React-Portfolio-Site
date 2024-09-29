// Services.js
/*
  File name: Services.js
  Student's Name: Alfonso Raziel Mendoza Avila
  Student ID: 301336913
  Date: 9-28-2024
*/

import React from 'react';
import webDevImg from '../img/web-development.png'; 
import powershellImg from '../img/powershell.png'; 
import programmingImg from '../img/programming.png';
import './Services.css';


// as is to much text is better if we save it into a array var
const services = [
  {
    title: "Web Development",
    description: "Build responsive and user-friendly websites using modern frameworks and technologies.",
    image: webDevImg,
  },
  {
    title: "PowerShell Scripting",
    description: "Automate tasks and manage systems efficiently with robust PowerShell scripts.",
    image: powershellImg,
  },
  {
    title: "General Programming",
    description: "Expertise in various programming languages and technologies for diverse projects.",
    image: programmingImg,
  },
];

// Component to display a single service card
const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <img src={service.image} alt={service.title} className="service-image" />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
};

// Main Services component to display all services
const Services = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <h1>Services I Offer</h1>
      <p>Here are some of the services I provide:</p>
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
      <div className="Margin-bottom"></div>
    </div>
  );
};

export default Services;
