import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">VV</div>
      <div className="nav-links">
        <Link to="/projects">Projects</Link>
        <Link to="/">About</Link>
        <Link to="/">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}