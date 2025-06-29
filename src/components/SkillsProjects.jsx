import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaJs,
  FaChrome,
} from 'react-icons/fa';
import {
  SiFirebase,
  SiTailwindcss,
  SiStreamlit,
  SiCodeforces,
  SiPython,
} from 'react-icons/si';

export default function SkillsProjects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800 });
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: 'HealStay',
      description:
        'Platform for connecting patient families with affordable accommodations near hospitals.',
      techStack: ['React', 'Firebase', 'Tailwind CSS'],
      icons: [<FaReact />, <SiFirebase />, <SiTailwindcss />],
      github: 'https://github.com/prakhrrr04/healstay',
    },
    {
      title: 'Codeforces Rank Watcher',
      description:
        'Chrome extension that alerts you when a friend overtakes your Codeforces rank irrespective of the page you are on.',
      techStack: ['JavaScript', 'Chrome API', 'Codeforces API'],
      icons: [<FaJs />, <FaChrome />, <SiCodeforces />],
      github: 'https://github.com/prakhrrr04/codeforces-rank-watcher',
    },
    {
      title: 'AI Mentor Chatbot',
      description:
        'An AI chatbot that provides career and DSA advice to college students using natural language.',
      techStack: ['React', 'Node.js', 'OpenAI API'],
      icons: [<FaReact />, <FaNodeJs />],
      github: 'https://github.com/prakhrrr04/ai-mentor-chatbot',
    },
    {
      title: 'Optimized EV Charging Hub',
      description:
        'Multi-EV charging simulation with LP optimization using solar, grid, and BESS.',
      techStack: ['Python', 'PuLP', 'Matplotlib'],
      icons: [<FaPython />],
      github: 'https://github.com/prakhrrr04/ev-charging-hub',
    },
    {
      title: 'Return Location Optimizer',
      description:
        'Streamlit dashboard to suggest return hubs based on demand clustering.',
      techStack: ['Streamlit', 'Pandas', 'PyDeck'],
      icons: [<SiPython />],
      github: 'https://github.com/prakhrrr04/return-optimizer',
    },
  ];

  return (
    <div className="container">
      <section style={{ padding: '2rem 0' }} data-aos="fade-up">
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
          🚀 Projects
        </h1>

        <div
          className="grid-two-cols"
          style={{ gap: '1.5rem' }}
          data-aos="zoom-in-up"
        >
          {projects.map((proj, idx) => (
            <div className="card hover-card bounce-on-hover" key={idx}>
              {/* Title */}
              <h2
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.75rem',
                }}
              >
                {proj.title}
              </h2>

              {/* Description */}
              <p style={{ color: '#555', fontSize: '0.95rem', marginBottom: '1rem' }}>
                {proj.description}
              </p>

              {/* Tech Stack */}
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ fontSize: '0.9rem', color: '#333' }}>Tech Stack:</strong>
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                  {proj.icons.map((icon, i) => (
                    <div key={i} style={{ fontSize: '1.2rem', color: '#444' }}>
                      {icon}
                    </div>
                  ))}
                </div>
              </div>

              {/* GitHub Link */}
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-block',
                    fontSize: '0.85rem',
                    color: '#3182ce',
                    textDecoration: 'underline',
                  }}
                >
                  🔗 View GitHub Repo
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
