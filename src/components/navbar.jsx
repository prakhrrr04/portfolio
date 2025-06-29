import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ background: '#fff', padding: '1rem 2rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ fontWeight: 'bold' }}>prakhrrr.dev</h2>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/">Home</Link>
          <Link to="/skills-projects">Projects</Link>
          <Link to="/links">Profiles</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}