import "../styles/contactPage.css";
import ContactMoon from "../components/contact/ContactMoon";
import Navbar from "../components/hero/Navbar";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="stars"></div>
      <Navbar />

      <div className="contact-body">
        <div className="contact-content">
          <p className="contact-subtitle">GET IN TOUCH</p>
          <h1 className="contact-title">CONTACT</h1>
          <div className="contact-line"></div>
          <div className="contact-links">
            <a href="https://github.com/vvermaa" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/itsvverma" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/its._.vverma/?hl=en" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="mailto:vaishnaviverma485@gmail.com">
              E-mail
            </a>
          </div>
        </div>

        <div className="moon-container">
          <ContactMoon />
        </div>
      </div>
    </div>
  );
}