import { useEffect, useState } from "react";
import Intro from "./intro";
import Hero from "../hero/Hero";
import { LayoutGroup } from "framer-motion";

export default function IntroSequence() {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHero(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
  <LayoutGroup>
    <Intro showHero={showHero} />
    <Hero showHero={showHero} />
  </LayoutGroup>
);
}