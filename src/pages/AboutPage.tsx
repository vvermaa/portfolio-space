import "../styles/aboutPage.css";
import Navbar from "../components/hero/Navbar";
import myPhoto from "../assets/2.png"; 

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="stars"></div>
      <Navbar />

      {/* Section 1 — Intro */}
      <section className="about-hero">
        <div className="about-hero-left">
          <p className="about-tag">WHO I AM</p>
          <h1 className="about-title">VAISHNAVI<br />VERMA</h1>
          <div className="about-line"></div>
          <p className="about-bio">
            CS student, cosmic builder, and creative technologist.
            I turn ideas into immersive digital experiences — from
            NGO platforms to hackathon projects — powered by code,
            design, and curiosity.
          </p>
        </div>
        <div className="about-hero-right">
          <div className="about-hero-right">
  <div className="photo-sphere">
    <img src={myPhoto} alt="Vaishnavi" className="photo-img" />
    <div className="sphere-glow"></div>
  </div>
</div>
        </div>
      </section>

      {/* Section 2 — Journey */}
      <section className="about-section">
        <p className="section-tag">MY JOURNEY</p>
        <h2 className="section-title">THE PATH</h2>
        <div className="about-line"></div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p className="timeline-year">2021</p>
              <h3>JMPS, Agra</h3>
              <p>Completed schooling. Discovered a love for computers and problem solving.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p className="timeline-year">2023 — Present</p>
              <h3>UIET — B.Tech CSE</h3>
              <p>Currently in my second year, diving deep into software development,
                AI, and full-stack engineering.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Tech Stack */}
      <section className="about-section">
        <p className="section-tag">WHAT I USE</p>
        <h2 className="section-title">TECH STACK</h2>
        <div className="about-line"></div>
        <div className="stack-group">
          <div className="stack-category">
            <p className="stack-label">LANGUAGES</p>
            <div className="stack-badges">
              <span className="badge">Python</span>
              <span className="badge">C++</span>
              <span className="badge">JavaScript</span>
              <span className="badge">TypeScript</span>
            </div>
          </div>
          <div className="stack-category">
            <p className="stack-label">FRAMEWORKS</p>
            <div className="stack-badges">
              <span className="badge">React</span>
              <span className="badge">Tailwind CSS</span>
              <span className="badge">Framer Motion</span>
            </div>
          </div>
          <div className="stack-category">
            <p className="stack-label">TOOLS</p>
            <div className="stack-badges">
              <span className="badge">Git</span>
              <span className="badge">VS Code</span>
              <span className="badge">Vercel</span>
              <span className="badge">SQLite</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Experience */}
      <section className="about-section">
        <p className="section-tag">WORK</p>
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="about-line"></div>
        <div className="experience-cards">
          <div className="exp-card">
            <div className="exp-header">
              <h3>Web Developer Intern</h3>
              <span className="exp-duration">1 Month</span>
            </div>
            <p className="exp-company">Inamigos Foundation</p>
            <ul className="exp-points">
              <li>Developed an NGO awareness webpage using HTML and CSS.</li>
              <li>Used AI tools to analyze social impact topics and prepare a research report.</li>
              <li>Compiled a structured database of 15+ volunteer opportunities for students across India.</li>
              <li>Researched AI-driven strategies for improving NGO outreach and engagement.</li>
            </ul>
          </div>
          <div className="exp-card">
  <div className="exp-header">
    <h3>Crop Quality Classification Using ML</h3>
    <span className="exp-duration">Research Project</span>
  </div>
  <p className="exp-company">Team Project</p>
  <ul className="exp-points">
    <li>Worked in a team to study and analyze the crop disease classification problem.</li>
    <li>Conducted literature review and explored research papers to understand existing solutions.</li>
    <li>Collected datasets from Kaggle and performed data preprocessing.</li>
    <li>Applied basic machine learning models to classify plant diseases and compared performance.</li>
    <li>Contributed to model selection based on accuracy comparisons.</li>
  </ul>
</div>
        </div>
      </section>

      {/* Section 5 — Beyond Code */}
      <section className="about-section">
        <p className="section-tag">BEYOND CODE</p>
        <h2 className="section-title">OTHER ORBITS</h2>
        <div className="about-line"></div>
        <div className="experience-cards">
          <div className="exp-card">
            <div className="exp-header">
              <h3>Member</h3>
            </div>
            <p className="exp-company">Euphoria Music Club</p>
            <ul className="exp-points">
              <li>Managed freshers during club recruitments.</li>
              <li>Contributed to organizing club events and onboarding new members.</li>
            </ul>
          </div>
          <div className="exp-card">
            <div className="exp-header">
              <h3>Content Creator</h3>
            </div>
            <p className="exp-company">Instagram — Video Editing Page</p>
            <ul className="exp-points">
              <li>Founded and manage a video editing content page with 15K+ followers.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section — Interests */}
<section className="about-section">
  <p className="section-tag">WHEN I'M NOT CODING</p>
  <h2 className="section-title">INTERESTS</h2>
  <div className="about-line"></div>
  <div className="interests-grid">
    <div className="interest-card">
      <span className="interest-icon">📚</span>
      <p>Reading Novels</p>
    </div>
    <div className="interest-card">
      <span className="interest-icon">♟️</span>
      <p>Playing Chess</p>
    </div>
    <div className="interest-card">
      <span className="interest-icon">🏸</span>
      <p>Badminton</p>
    </div>
    <div className="interest-card">
      <span className="interest-icon">🎬</span>
      <p>Video Editing</p>
    </div>
    <div className="interest-card">
      <span className="interest-icon">🎵</span>
      <p>Singing</p>
    </div>
  </div>
</section>

      {/* Section 6 — Achievements */}
      <section className="about-section about-last">
        <p className="section-tag">RECOGNITION</p>
        <h2 className="section-title">ACHIEVEMENTS</h2>
        <div className="about-line"></div>
        <div className="experience-cards">
          <div className="exp-card">
            <h3>ZS Campus Beats Tech Challenge 2026</h3>
            <p className="exp-company">Top 100 Finalist</p>
          </div>
          <div className="exp-card">
            <h3>Smart India Hackathon (SIH) 2024</h3>
            <p className="exp-company">Selected in Internal Evaluation Phase</p>
          </div>
        </div>
      </section>
     <button
  className="scroll-top-btn"
  onClick={() => {
    document.getElementById("root")?.scrollTo({ top: 0, behavior: "smooth" });
  }}
>
  ↑
</button>
    </div>
  );
}