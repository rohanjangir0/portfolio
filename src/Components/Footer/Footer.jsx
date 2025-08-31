import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  // Scroll to top when button clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <hr className="footer-line" />
      <p className="footer-text">
        © {year} Rohan Jangir. Crafted with <span className="emoji">❤️</span> and lots of <span className="emoji">☕</span>
      </p>
      <button className="scroll-top" onClick={scrollToTop}>
        ↑
      </button>
    </footer>
  );
}

export default Footer;
