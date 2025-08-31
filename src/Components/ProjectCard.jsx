// src/components/ProjectCard.jsx
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import "./projects.css";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <span className="project-category">{project.category}</span>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        {/* Tags */}
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>

        {/* Buttons */}
        <div className="project-links">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="demo"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
