import { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import Intro from "./components/intro/intro";
import ContactPage from "./pages/ContactPage";
import Universe from "./components/universe/Universe";
import ProjectPage from "./pages/ProjectPage";
import { Routes, Route } from "react-router-dom";
import { LayoutGroup } from "framer-motion";

function HomePage() {
  const [showHero, setShowHero] = useState(
    !!sessionStorage.getItem("introSeen")
  );
  const [showIntro, setShowIntro] = useState(
    !sessionStorage.getItem("introSeen")
  );

  useEffect(() => {
    const introSeen = sessionStorage.getItem("introSeen");
    if (introSeen) {
      setShowIntro(false);
      setShowHero(true);
      return;
    }

    const timer = setTimeout(() => {
      setShowHero(true);
      setShowIntro(false);
      sessionStorage.setItem("introSeen", "true");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LayoutGroup>
      {showIntro && <Intro showHero={showHero} />}
      <Hero showHero={showHero} />
    </LayoutGroup>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<Universe />} />
      <Route path="/projects/:id" element={<ProjectPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
