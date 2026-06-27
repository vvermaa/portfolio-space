import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import Navbar from "../components/hero/Navbar";
import ProjectPlanet from "../components/universe/ProjectPlanet";
import "../styles/projectPage.css";

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="project-page">
        <Navbar />
        <p style={{ color: "white", textAlign: "center", marginTop: "40vh" }}>
          Project not found.
        </p>
      </div>
    );
  }

  return (
    <div className="project-page">
      <div className="stars"></div>
      <Navbar />

      <div className="project-page-content">
        <div className="project-page-left">
          <p className="project-page-tag">PROJECT</p>
          <h1 className="project-page-title">{project.name}</h1>
          <div className="project-page-line" style={{ background: project.color }}></div>
          <p className="project-page-description">{project.description}</p>
          <div className="project-page-buttons">
            
              <a href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-live-btn"
            >
              VIEW LIVE
            </a>
            <button className="project-back-btn" onClick={() => navigate("/projects")}>
              ← BACK
            </button>
          </div>
        </div>

        <div className="project-page-right">
          <ProjectPlanet planet={project.planet} />
        </div>
      </div>
    </div>
  );
}