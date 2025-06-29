import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ background: '#fff', padding: '1rem 2rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ fontWeight: 'bold' }}>My Portfolio</h2>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/">Know Me</Link>
          <Link to="/skills-projects">My Projects</Link>
          <Link to="/links">Coding Profiles</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>
    </nav>
  );
}