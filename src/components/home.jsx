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
import pandas from '../assets/pandas.svg';
import numpy from '../assets/numpy.svg';
import streamlit from '../assets/streamlit.svg'; 
import pulp from '../assets/pulp.png';




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
    { name: 'NumPy', icon: <img src={numpy} alt="NumPy" style={{ width: 28, height: 28 }} />
, color: '#013243' },
    { name: 'Pandas', icon: <img src={pandas} alt="pandas" style={{ width: 28, height: 28 }} />, color: '#150458' },
    { name: 'StreamLit', icon: <img src={streamlit} alt="StreamLit" style={{ width: 28, height: 28 }} />, color: '#11557c' },
    { name: 'PuLP (Optimization)', icon: <img src={pulp} alt="PuLP" style={{ width: 28, height: 28 }} />, color: '#004b87' },

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
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginTop: '2rem',
            border: '1px solid #e5e7eb',
            padding: '1.5rem',
            borderRadius: '10px',
            backgroundColor: '#f9fafb',
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              color: '#4b5563',
              fontSize: '0.95rem',
              lineHeight: '1.6',
              flex: 1,
              minWidth: '250px',
            }}
          >
            <li>• 300+ problems solved on Codeforces & LeetCode</li>
            <li>• Built 5+ real-world projects (React, Firebase, Node.js)</li>
            <li>• Passionate about optimization, DSA, and system design</li>
          </ul>

          <div style={{ minWidth: '180px', textAlign: 'center' }}>
            <a
              href="https://drive.google.com/file/d/1297fB6qQ1odl-teApZ8Uohzl5a_AtUkw/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-block',
                fontSize: '0.95rem',
                fontWeight: '500',
                color: '#ffffff',
                backgroundColor: '#1f2937',
                padding: '0.65rem 1.25rem',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#111827')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#1f2937')}
            >
              📄 View My Resume
            </a>
          </div>
        </div>
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
      <section
        style={{
          padding: '3rem 0',
          textAlign: 'center',
          backgroundColor: '#ffffff',
        }}
        data-aos="fade-up"
      >
        <h2
          style={{
            fontSize: '1.75rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            color: '#1f2937',
          }}
        >
          🌟 Featured Projects
        </h2>

        <div
          style={{
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          }}
        >
          {[
            {
              title: 'HealStay',
              desc: 'A React + Firebase platform that helps families find affordable stays near hospitals.',
              link: 'https://github.com/prakhrrr04/healstay',
            },
            {
              title: 'EV Charging Optimizer',
              desc: 'Python + PuLP optimization model to simulate efficient charging schedules for multiple EVs.',
              link: 'https://github.com/prakhrrr04/optimised_EV_Hub',
            },
            {
              title: 'Codeforces Rank Notifier',
              desc: 'Chrome extension to track friends overtaking your CF rank during live or virtual contests.',
              link: 'https://github.com/prakhrrr04/codeforces-rank-notifier',
            },
          ].map(({ title, desc, link }) => (
            <div
              className="card hover-card card-hover-clean"
              key={title}
              style={{
                textAlign: 'left',
                padding: '1.5rem',
                backgroundColor: '#f9fafb',
              }}
            >
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                {title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '1rem' }}>{desc}</p>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: '0.9rem',
                  color: '#3182ce',
                  textDecoration: 'underline',
                }}
              >
                🔗 View GitHub Repo
              </a>
            </div>
          ))}
        </div>
      </section>

      <section style={{
          paddingTop: '3rem',
          paddingBottom: '2rem',
          textAlign: 'center',
          backgroundColor: '#f9fafb',
        }}
        data-aos="fade-up"
      >
        <h2 style={{
            fontSize: '2rem',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '0.75rem',
          }}
        >
          Let’s Connect
        </h2>
        <p style={{
            fontSize: '1rem',
            color: '#4b5563',
            maxWidth: '600px',
            margin: '0 auto 1.75rem auto',
            lineHeight: '1.6',
          }}
        >
          Open to internship opportunities, collaborations, or meaningful conversations. Feel free to reach out!
        </p>
        <a href="#/contact"
          style={{
            display: 'inline-block',
            padding: '0.65rem 1.5rem',
            fontSize: '0.95rem',
            fontWeight: '500',
            color: '#ffffff',
            backgroundColor: '#1f2937',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#111827';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#1f2937';
          }}
        >
          Contact Me
        </a>

        {/* Footer */}
        <footer style={{
            textAlign: 'center',
            fontSize: '0.85rem',
            color: '#6b7280',
            padding: '2rem 0 0.5rem',
            borderTop: '1px solid #e5e7eb',
            marginTop: '3rem',
          }}
        >
          © {new Date().getFullYear()} Prakhar Singh. All rights reserved.
        </footer>
      </section>


    </div>
  );
}
