import { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import MainPage from './Components/MainPage/MainPage'
import FakeCli from './Components/FakeCli/FakeCli'
import ProjectEstimator from './Components/ProjectEstimator/ProjectEstimator'
import About from './Components/About/About'
import SkillTree from './Components/SkillTree/SkillTree'
import ContactSection from './Components/ContactSection/ContactSection'
import ProjectsSection from './Components/ProjectsSection'
import Footer from './Components/Footer/Footer'

function App() {
   const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true); // Start fade
    }, 2000); // show splash for 2s

    const timer2 = setTimeout(() => {
      setLoading(false); // remove splash
    }, 3000); // total 3s before site loads

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (loading) {
    return (
      <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
        <div className="coffee-cup">
          <span className="steam steam1"></span>
          <span className="steam steam2"></span>
          <span className="steam steam3"></span>
          <div className="cup"></div>
        </div>
        <h1 className="splash-text">Brewing... ☕</h1>
      </div>
    );
  }
  return (
    <>
    <div>
      <Navbar />

      {/* Home Section */}
      <section id="home">
        <MainPage />
        <FakeCli />
        <ProjectEstimator />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <SkillTree />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>
      
      <Footer/>
    </div>
    
    </>
  )
}

export default App
