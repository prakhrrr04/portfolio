import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import { SiCodeforces, SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './components.css';

export default function Links() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const professionalLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={24} />,
      url: 'https://github.com/prakhrrr04',
      desc: 'Notable projects: HealStay, AI-Mentor.'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={24} />,
      url: 'linkedin.com/in/prakhar-singh-23703628b',
      desc: 'Professional network with detailed academic and project experiences.'
    },
    {
      name: 'Codolio',
      icon: <FaGlobe size={24} />,
      url: 'https://codolio.com/profile/prakhrrr',
      desc: 'My coding trail: from problem solving to pushing commits'
    },
  ];

  const cpLinks = [
    
    {
      name: 'Codeforces',
      icon: <SiCodeforces size={24} />,
      url: 'https://codeforces.com/profile/cod_ee',
      desc: 'Max Rating: 1211 | 220+ Problems | 20+ Contests'
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode size={24} />,
      url: 'https://leetcode.com/u/cod_ee/',
      desc: '160+ Problems | 50 Days Badge 2025 | Top 30%'
    },
  ];

  const renderFlipCard = (link) => (
    <div className="flip-card" data-aos="zoom-in" key={link.name}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {link.icon}
          <h3>{link.name}</h3>
        </div>
        <div className="flip-card-back">
          <p>{link.desc}</p>
          <a href={link.url} target="_blank" rel="noopener noreferrer">Visit</a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>🚀 Where I Build & Solve</h1>

      <section style={{ marginBottom: '2rem' }} data-aos="fade-up">
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}> Professional Presence</h2>
        <div className="grid-two-cols">
          {professionalLinks.map(renderFlipCard)}
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }} data-aos="fade-up">
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Problem Solving</h2>
        <div className="grid-two-cols">
          {cpLinks.map(renderFlipCard)}
        </div>
      </section>
    </div>
  );
}