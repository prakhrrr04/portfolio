import { FaGithub, FaLinkedin, FaGlobe, FaYoutube } from 'react-icons/fa';
import { SiCodeforces, SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import './components.css';

export default function Links() {
  const links = [
    { name: 'GitHub', icon: <FaGithub size={24} />, url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: <FaLinkedin size={24} />, url: 'https://linkedin.com/in/yourusername' },
    { name: 'Codeforces', icon: <SiCodeforces size={24} />, url: 'https://codeforces.com/profile/yourhandle' },
    { name: 'LeetCode', icon: <SiLeetcode size={24} />, url: 'https://leetcode.com/yourhandle' },
    { name: 'GeeksforGeeks', icon: <SiGeeksforgeeks size={24} />, url: 'https://auth.geeksforgeeks.org/user/yourusername' },
    { name: 'Portfolio Site', icon: <FaGlobe size={24} />, url: 'https://yourdomain.com' },
    { name: 'YouTube', icon: <FaYoutube size={24} />, url: 'https://youtube.com/@yourchannel' },
  ];

  return (
    <div className="container">
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>🔗 My Links</h1>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
