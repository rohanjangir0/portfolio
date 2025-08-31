import React, { useRef } from "react";
import ForceGraph2D from "react-force-graph-2d";
import "./SkillTree.css";

const skills = [
  { id: "JavaScript", desc: "Dynamic language for web development" },
  { id: "Python", desc: "High-level programming for AI & backend" },
  { id: "React", desc: "Frontend library for building UI" },
  { id: "Express", desc: "Minimalist backend framework for Node.js" },
  { id: "MongoDB", desc: "NoSQL database for flexible storage" },
  { id: "MySQL", desc: "Relational SQL database system" },
  { id: "AWS", desc: "Cloud services for scalable apps" },
  { id: "HTML", desc: "Markup language for web pages" },
  { id: "CSS", desc: "Styling language for modern UI" },
  { id: "Excel", desc: "Data organization and analysis tool" },
];

const links = [
  { source: "JavaScript", target: "React" },
  { source: "JavaScript", target: "Express" },
  { source: "Express", target: "MongoDB" },
  { source: "Python", target: "MySQL" },
  { source: "AWS", target: "MongoDB" },
  { source: "AWS", target: "MySQL" },
  { source: "HTML", target: "CSS" },
  { source: "React", target: "CSS" },
  { source: "Excel", target: "Python" },
];

const data = { nodes: skills, links };

const SkillTree = () => {
  const fgRef = useRef();

  return (
    <div className="skill-tree-container">
      <h2 className="skill-tree-title">💡 My Skills</h2>
      <div className="skill-tree-wrapper">
        <div className="skill-tree-rectangle">
          <ForceGraph2D
            ref={fgRef}
            graphData={data}
            nodeCanvasObject={(node, ctx, globalScale) => {
              const label = node.id;
              const fontSize = 12 / globalScale;

              ctx.beginPath();
              ctx.arc(node.x, node.y, 18, 0, 2 * Math.PI, false);
              ctx.fillStyle = "rgba(255, 248, 220, 0.9)";
              ctx.fill();
              ctx.strokeStyle = "#5c3520";
              ctx.lineWidth = 2;
              ctx.stroke();

              ctx.font = `${fontSize}px Poppins`;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillStyle = "#3E2723";
              ctx.fillText(label, node.x, node.y);
            }}
            linkColor={() => "#e6c4a8"}
            linkWidth={1.2}
            backgroundColor="transparent"
            width={850}
            height={320}
            nodeRelSize={8}
            linkDirectionalParticles={0}
            onNodeHover={(node) => {
              const tooltip = document.getElementById("tooltip");
              if (node) {
                tooltip.style.display = "block";
                tooltip.innerText = node.desc;
                tooltip.style.left = node.x + 430 + "px";
                tooltip.style.top = node.y + 200 + "px";
              } else {
                tooltip.style.display = "none";
              }
            }}
          />
          <div id="tooltip" className="tooltip"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillTree;
