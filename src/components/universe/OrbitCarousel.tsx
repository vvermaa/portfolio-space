import { projects } from "../../data/projects";
import { motion } from "framer-motion";

type OrbitCarouselProps = {
  current: number;
  setCurrent: React.Dispatch<
    React.SetStateAction<number>
  >;
};

export default function OrbitCarousel({
  current,
  setCurrent,
}: OrbitCarouselProps) {

  const prevProject = () => {
    setCurrent(
      (current - 1 + projects.length) %
      projects.length
    );
  };

  const nextProject = () => {
    setCurrent(
      (current + 1) %
      projects.length
    );
  };

  const leftIndex =
    (current - 1 + projects.length) %
    projects.length;

  const rightIndex =
    (current + 1) %
    projects.length;

  return (
    <div className="orbit-container">

      <button
        className="orbit-arrow left-arrow"
        onClick={prevProject}
      >
        ←
      </button>

      <div className="planet-wrapper left-wrapper">
      
        <motion.div
  className="planet left"
  style={{
  backgroundImage:
    `url(/textures/${projects[leftIndex].planet}.jpg)`
}}
  animate={{
    scale: 0.8,
  }}
  transition={{
    duration: 0.6,
  }}
/>

        <p className="planet-label-left">
          {projects[leftIndex].name}
        </p>

      </div>

      <motion.div
  className="planet front"
  style={{
  backgroundImage:
    `url(/textures/${projects[current].planet}.jpg)`
}}
  key={current}
  initial={{
    scale: 0.8,
    opacity: 0.5,
  }}
  animate={{
    scale: 1,
    opacity: 1,
  }}
  transition={{
    duration: 0.6,
  }}
/>

      <div className="planet-wrapper right-wrapper">

       <motion.div
  className="planet right"
  style={{
  backgroundImage:
    `url(/textures/${projects[rightIndex].planet}.jpg)`
}}
  animate={{
    scale: 0.8,
  }}
  transition={{
    duration: 0.6,
  }}
/>

        <p className="planet-label-right">
          {projects[rightIndex].name}
        </p>

      </div>

      <button
        className="orbit-arrow right-arrow"
        onClick={nextProject}
      >
        →
      </button>

    </div>
  );
}