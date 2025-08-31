import React, { useState } from "react";
import "./ProjectEstimator.css";

const PROJECTS = {
  "Website": { basePrice: 3000, baseTime: 4 },
  "Mobile App": { basePrice: 5000, baseTime: 6 },
  "Dashboard": { basePrice: 4000, baseTime: 5 }
};

const FEATURES = [
  { name: "Authentication", price: 800, time: 2 },
  { name: "Database Integration", price: 1200, time: 2 },
  { name: "Payment Processing", price: 1500, time: 2 }
];

const ProjectEstimator = () => {
  const [projectType, setProjectType] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [estimate, setEstimate] = useState(null);

  const toggleFeature = (feature) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const calculateEstimate = () => {
    if (!projectType) return;

    let base = PROJECTS[projectType];
    let totalCost = base.basePrice;
    let totalTime = base.baseTime;

    selectedFeatures.forEach((feature) => {
      let f = FEATURES.find((f) => f.name === feature);
      totalCost += f.price;
      totalTime += f.time;
    });

    setEstimate({ cost: totalCost, time: totalTime });
  };

  const handleWhatsApp = () => {
    const message = `Hello! I'd like a project estimate for a ${projectType}. 
Features: ${selectedFeatures.join(", ") || "None"}.
Estimated Cost: $${estimate.cost}, Estimated Time: ${estimate.time} weeks.`;

    window.open(
      `https://wa.me/1234567890?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="estimator-container">
      <h2 className="estimator-title">⚡ Project Estimator</h2>
      <p className="estimator-sub">Get an instant estimate for your next project</p>

      <div className="estimator-card">
        <label className="estimator-label">Project Type</label>
        <select
          className="estimator-select"
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
        >
          <option value="">Select project type</option>
          {Object.keys(PROJECTS).map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <div className="features-section">
          <h4>Additional Features</h4>
          {FEATURES.map((f) => (
            <label key={f.name} className="feature-option">
              <input
                type="checkbox"
                checked={selectedFeatures.includes(f.name)}
                onChange={() => toggleFeature(f.name)}
              />
              {f.name} <span className="feature-price">+${f.price}</span>
            </label>
          ))}
        </div>

        <button className="estimate-btn" onClick={calculateEstimate}>
          ⚡ Estimate Now
        </button>
      </div>

      {estimate && (
        <div className="estimate-result">
          <div className="estimate-box">
            <p className="estimate-label">⏳ Estimated Time</p>
            <h3>{estimate.time} weeks</h3>
          </div>
          <div className="estimate-box">
            <p className="estimate-label">💲 Estimated Cost</p>
            <h3>${estimate.cost}</h3>
          </div>
          <div className="estimate-breakdown">
            <h4>Cost Breakdown:</h4>
            <p>Base {projectType}: {PROJECTS[projectType].baseTime} weeks, ${PROJECTS[projectType].basePrice}</p>
            {selectedFeatures.map((f) => {
              let feat = FEATURES.find((x) => x.name === f);
              return <p key={f}>+ {f}: ${feat.price}</p>;
            })}
          </div>

          <button className="whatsapp-btn" onClick={handleWhatsApp}>
            💬 Send on WhatsApp
          </button>
          <p className="note">* This is an estimate. Final pricing may vary based on specific requirements.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectEstimator;
