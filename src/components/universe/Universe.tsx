import "../../styles/universe.css";
import { projects } from "../../data/projects";
import OrbitCarousel from "./OrbitCarousel";
import Navbar from "../hero/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Universe() {
  const [current, setCurrent] = useState(0);
  const currentProject = projects[current];
  const navigate = useNavigate();

  return (
    <div className="universe">
      <div className="stars"></div>
      <Navbar />

      <div className="project-info">
        <p className="project-tag">PROJECTS</p>
        <h1>{currentProject.name}</h1>
        <div className="project-line"></div>
        <p className="project-description">{currentProject.description}</p>
        <button
          className="project-btn"
          onClick={() => navigate(`/projects/${currentProject.id}`)}
        >
          VIEW PROJECT
        </button>
      </div>

      <div className="planet-carousel">
        <OrbitCarousel current={current} setCurrent={setCurrent} />
      </div>
    </div>
  );
}