import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">About Me</h2>
      <p className="about-subtitle">
        Passionate about creating digital experiences that combine functionality
        with aesthetics
      </p>

      <div className="about-container">
        <div className="about-text">
          <p>
            I'm a <b>full-stack developer</b> with a passion for creating
            beautiful, functional, and user-centered digital experiences. With
            over <b>1 years of experience</b> in the field, I've worked on a
            variety of projects ranging from small business websites to complex
            web applications.
          </p>
          <p>
            My approach combines technical expertise with creative
            problem-solving. I believe in writing clean, maintainable code and
            staying up-to-date with the latest technologies and best practices.
          </p>

          <div className="skills-tags">
            <span>Problem Solving</span>
            <span>Creative Thinking</span>
            <span>Team Leadership</span>
            <span>Continuous Learning</span>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-box">
            <h3>5+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-box">
            <h3>1+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-box">
            <h3>20+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-box">
            <h3>100%</h3>
            <p>Dedication</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
