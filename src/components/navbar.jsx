import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-logo">prakhrrr.dev</h2>

        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/skills-projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/links" onClick={() => setIsOpen(false)}>Profiles</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
