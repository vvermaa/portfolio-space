import "../../styles/intro.css";
import { motion } from "framer-motion";

type IntroProps = {
  showHero: boolean;
};

function Intro({ showHero }: IntroProps) {

  return (
    <div
  className={`intro-container ${
    showHero ? "intro-hide" : ""
  }`}
>
      <div className="intro-stars"></div>
      
      <motion.h1
  layoutId="hero-name"
  className="intro-name"
>
  VAISHNAVI
</motion.h1>

      <p className="intro-subtitle">
        WELCOME TO MY UNIVERSE
      </p>

    </div>
    
  );
}

export default Intro;