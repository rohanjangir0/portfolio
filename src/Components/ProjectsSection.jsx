// src/components/ProjectsSection.jsx
import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import "./projects.css";

export default function ProjectsSection() {
  return (
    <section className="projects-section">
      <h2>Featured Projects</h2>
      <p>A selection of my recent work showcasing different technologies and creative solutions.</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
