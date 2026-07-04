import "../styles/resumePage.css";
import Navbar from "../components/hero/Navbar";

export default function ResumePage() {
  return (
    <>
      <div className="resume-page">
        <div className="stars"></div>
        <Navbar />

        <div className="resume-body">
          <div className="resume-left">
            <p className="resume-tag">MY RESUME</p>
            <h1 className="resume-title">CURRICULUM<br />VITAE</h1>
            <div className="resume-line"></div>
            <p className="resume-desc">
              A snapshot of my journey — skills, experience,
              and everything I have built so far.
            </p>
            <div className="resume-buttons">
              <a
                href="/resume.pdf"
                download="Vaishnavi_Verma_Resume.pdf"
                className="resume-download-btn"
              >
                ↓ DOWNLOAD PDF
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-view-btn"
              >
                OPEN IN NEW TAB
              </a>
            </div>
          </div>

          <div className="resume-right">
            <iframe
              src="/resume.pdf"
              className="resume-iframe"
              title="Vaishnavi Verma Resume"
            />
          </div>
        </div>
      </div>
    </>
  );
}