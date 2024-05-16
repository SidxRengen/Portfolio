import React from "react";
import "../App.css";
const Card = ({ project }) => {
  return (
    <div className="project-card">
      <a href={project.link}>
        <img src={project.image} alt={project.title} />
      </a>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <a href={project.link} className="btn">
        View Project
      </a>
    </div>
  );
};

export default Card;
