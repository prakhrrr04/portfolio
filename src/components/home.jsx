import {
  FaJava,
  FaCode,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaHtml5,
} from 'react-icons/fa';
import { SiFirebase, SiCplusplus, SiMongodb } from 'react-icons/si';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './components.css';
import { TypeAnimation } from 'react-type-animation';


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
    {
      name: 'Data Structures & Algorithms',
      icon: <FaCode size={28} />,
      color: '#6e5494',
    },
    { name: 'NumPy', icon: <FaPython size={28} />, color: '#013243' },
    { name: 'pandas', icon: <FaPython size={28} />, color: '#150458' },
    { name: 'matplotlib', icon: <FaPython size={28} />, color: '#11557c' },
    { name: 'PuLP (Optimization)', icon: <FaPython size={28} />, color: '#004b87' },
  ];

  return (
    <div className="container" style={{ overflow: 'visible' }}>
      {/* Intro Section */}
      <section
        style={{ paddingBottom: '2rem', borderBottom: '1px solid #eee' }}
        data-aos="fade-up"
      >
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}> Hi, I’m Prakhar 👋 </h1>

    <TypeAnimation
    sequence={[
        'EEE Junior at IIT (BHU) Varanasi', 2000,
        'Aspiring Software Engineer', 2000,
        'DSA & Optimization Enthusiast', 2000,
        'Always Building & Learning', 2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    style={{
        fontSize: '1.4rem',
        fontWeight: '500',
        color: '#333',
        display: 'inline-block',
        marginBottom: '1rem',
    }}
    />
        <p style={{ fontSize: '1rem', color: '#555', marginBottom: '1rem' }}>
          I love working on meaningful tech, solving challenging problems, and constantly learning. Currently exploring frontend and system design while enjoying problem solving and optimisation techniques.
        </p>
        <blockquote style={{ fontStyle: 'italic', color: '#888', marginTop: '1rem' }}>
          "Code is like humor. When you have to explain it, it’s bad."
        </blockquote>
      </section>

      {/* Skills Section */}
      <section
        style={{
          padding: '3rem 0 4rem',
          borderBottom: '1px solid #eee',
          overflow: 'visible',
          position: 'relative',
          zIndex: 0,
        }}
        data-aos="fade-up"
      >
        <h2
          style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem' }}
        >
          🛠 Skills
        </h2>

        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#444' }}>
          Languages
        </h3>

        <div style={{ overflow: 'hidden' }}>
          <div
            style={{
              display: 'grid',
              gap: '1rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              marginBottom: '2rem',
            }}
          >
            {languageSkills.map(({ name, icon }) => (
              <div
                key={name}
                className="card hover-card card-hover-clean"
                style={{
                  textAlign: 'center',
                  backgroundColor: '#fefefe',
                  padding: '1.5rem',
                }}
                data-aos="zoom-in"
              >
                <div style={{ marginBottom: '0.5rem' }}>{icon}</div>
                <div>{name}</div>
              </div>
            ))}
          </div>
        </div>

        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#444' }}>
          Frameworks & Technologies
        </h3>

        <div style={{ overflow: 'hidden' }}>
          <div
            style={{
            display: 'grid',
            gap: '1rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            paddingBottom: '2rem',
            }}
          >

            {techSkills.map(({ name, icon }) => (
              <div
                key={name}
                className="card hover-card card-hover-clean"
                style={{
                  textAlign: 'center',
                  backgroundColor: '#fefefe',
                  padding: '1.5rem',
                }}
                data-aos="zoom-in"
              >
                <div style={{ marginBottom: '0.5rem' }}>{icon}</div>
                <div>{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ paddingTop: '2rem', textAlign: 'center' }} data-aos="fade-up">
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🚀 Let’s Connect</h2>
        <p style={{ fontSize: '1rem', color: '#666', marginBottom: '1.5rem' }}>
          Whether it’s about internships, collaboration, or cool ideas — I’d love to chat!
        </p>
        <a href="/contact" className="btn">
          Contact Me
        </a>
      </section>
    </div>
  );
}
