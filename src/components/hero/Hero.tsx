import Navbar from "./Navbar";
import HeroSun from "./HeroSun";
import "../../styles/hero.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type HeroProps = {
  showHero: boolean;
};

export default function Hero({
  showHero=false,
}: HeroProps) {
  const navigate = useNavigate();
  return (
    <div
  className={`hero ${
    showHero ? "hero-visible" : ""
  }`}
>
      <div className="stars"></div>
  <Navbar />

  <div
  className={`hero-content ${
    showHero ? "content-visible" : ""
  }`}
>

    <div className="hero-left">
       <p className="hero-tag">
          THE COSMIC BUILDER
        </p>
      <motion.h1
  layoutId="hero-name"
>
  VAISHNAVI
</motion.h1>

      <div className="hero-line"></div>

      <p className="hero-description">
         I create immersive digital experiences powered by AI,
        full-stack engineering, and cinematic design —
        turning ideas into interactive products that feel alive.
      </p>

      <div className="hero-buttons">

        <button className="hero-btn" onClick={() => navigate("/projects")}>
          ENTER THE SPACE
        </button>
      </div>

    </div>

    <div className="hero-right">

      <HeroSun />

    </div>

  </div>

</div>

  );
}