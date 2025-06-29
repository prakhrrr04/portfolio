import { FaJava, FaCode, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaHtml5 } from 'react-icons/fa';
import { SiFirebase, SiCplusplus, SiMongodb } from 'react-icons/si';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './components.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const languageSkills = [
    { name: 'C++', icon: <SiCplusplus size={28} />, color: '#00599C' },
    { name: 'Java', icon: <FaJava size={28} />, color: '#f89820' },
    { name: 'JavaScript', icon: <FaJs size={28} />, color: '#f0db4f' },
    { name: 'Python', icon: <FaPython size={28} />, color: '#306998' },
    { name: 'HTML & CSS', icon: <FaHtml5 size={28} />, color: '#e34c26' },
  ];

  const techSkills = [
    { name: 'React', icon: <FaReact size={28} />, color: '#61dafb' },
    { name: 'Node.js', icon: <FaNodeJs size={28} />, color: '#68a063' },
    { name: 'Firebase', icon: <SiFirebase size={28} />, color: '#FFA611' },
    { name: 'MongoDB', icon: <SiMongodb size={28} />, color: '#4DB33D' },
    { name: 'Git & GitHub', icon: <FaGitAlt size={28} />, color: '#f1502f' },
    { name: 'Data Structures & Algorithms', icon: <FaCode size={28} />, color: '#6e5494' },
  ];

  return (
    <div className="container">
      <section style={{ paddingBottom: '2rem', borderBottom: '1px solid #eee' }} data-aos="fade-up">
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Hi, I’m Prakhar 👋</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          Aspiring software engineer passionate about building impactful solutions.
        </p>
        <p style={{ fontSize: '1rem', color: '#555', marginBottom: '1rem' }}>
          I love working on meaningful tech, solving challenging problems, and constantly learning. Currently exploring frontend and system design while practicing DSA for interviews.
        </p>
        <blockquote style={{ fontStyle: 'italic', color: '#888', marginTop: '1rem' }}>
          "Code is like humor. When you have to explain it, it’s bad."
        </blockquote>
      </section>

      <section style={{ padding: '2rem 0', borderBottom: '1px solid #eee' }} data-aos="fade-up">
        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>🛠 Skills</h2>

        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#444' }}>Languages</h3>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', marginBottom: '2rem' }}>
          {languageSkills.map(({ name, icon, color }) => (
            <div
              key={name}
              className="card hover-card bounce-on-hover skill-glow"
              style={{ textAlign: 'center', backgroundColor: '#fefefe', padding: '1.5rem', '--glow-color': color }}
              data-aos="zoom-in"
            >
              <div style={{ marginBottom: '0.5rem' }}>{icon}</div>
              <div>{name}</div>
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#444' }}>Frameworks & Technologies</h3>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
          {techSkills.map(({ name, icon, color }) => (
            <div
              key={name}
              className="card hover-card bounce-on-hover skill-glow"
              style={{ textAlign: 'center', backgroundColor: '#fefefe', padding: '1.5rem', '--glow-color': color }}
              data-aos="zoom-in"
            >
              <div style={{ marginBottom: '0.5rem' }}>{icon}</div>
              <div>{name}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ paddingTop: '2rem', textAlign: 'center' }} data-aos="fade-up">
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🚀 Let’s Connect</h2>
        <p style={{ fontSize: '1rem', color: '#666', marginBottom: '1.5rem' }}>
          Whether it’s about internships, collaboration, or cool ideas — I’d love to chat!
        </p>
        <a href="/contact" className="btn">Contact Me</a>
      </section>
    </div>
  );
}


