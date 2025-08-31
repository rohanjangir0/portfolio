import React, { useState } from "react";
import "./ContactSection.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import axios from "axios";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/send-message", formData);
      if (res.data.success) {
        setStatus("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    }
  };

  return (
    <section className="contact-section">
      <h2 className="title">Let's Work Together</h2>
      <p className="subtitle">Ready to bring your ideas to life? Let's discuss your next project!</p>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>I'm always open to discussing new opportunities...</p>
          <div className="info-card">
            <FaEnvelope className="icon" />
            <div>
              <h4>Email</h4>
              <p>rohancjj2003@gmail.com</p>
            </div>
          </div>
          <div className="info-card">
            <FaPhone className="icon" />
            <div>
              <h4>Phone</h4>
              <p>+91 8107171472</p>
            </div>
          </div>
          <div className="info-card">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h4>Location</h4>
              <p>Attapur, HYD-48</p>
            </div>
          </div>
          <div className="socials">
            <p>Follow me on</p>
            <div className="social-icons">
              <a href="https://github.com/rohanjangir0"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/rohanjangir0/"><FaLinkedin /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </label>
          <button type="submit">Send Message</button>
          {status && <p>{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
