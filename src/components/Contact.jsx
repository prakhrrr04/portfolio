import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './components.css';

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_ozo3hq8', 'template_v6zy74w', form.current, '6Xprq2JE-oqexWwSn')
      .then(() => {
        setSent(true);
        form.current.reset();
      })
      .catch((err) => {
        console.error('Error sending email:', err);
        alert('Failed to send. Check EmailJS setup.');
      });
  };

  return (
    <div className="container" data-aos="fade-up">
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}> Contact Me</h1>

      <div className="grid-two-cols">
        <div className="card" data-aos="fade-right">
          <h2 style={{ marginBottom: '1rem' }}>Send me a message </h2>
          <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }}
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }}
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }}
            ></textarea>
            <button
              type="submit"
              className="bounce-on-hover"
              style={{
                backgroundColor: '#1f2937',
                color: '#fff',
                padding: '0.75rem',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
              }}
            >
              Send Message
            </button>
            {sent && <p style={{ color: 'green' }}>✅ Message sent successfully!</p>}
          </form>
        </div>

        <div className="card" data-aos="fade-left">
          <h2 style={{ marginBottom: '1.5rem' }}>Other Ways to Reach Me</h2>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '70%', gap: '10px'}}>
            <a
              className="bounce-on-hover"
              href="mailto:prakhrrr.2004@gmail.com"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              <FaEnvelope size={22} /> <span style={textSpan}>prakhrrr.2004@gmail.com</span>
            </a>
            <a
              className="bounce-on-hover"
              href="https://linkedin.com/in/prakhar-singh-23703628b"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              <FaLinkedin size={22} /> <span style={textSpan}>Prakhar Singh</span>
            </a>
            <a
              className="bounce-on-hover"
              href="https://github.com/prakhrrr04"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              <FaGithub size={22} /> <span style={textSpan}>prakhrrr04</span>
            </a>
          </div>
        </div>
      </div>
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
    </div>
  );
}

const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  textDecoration: 'none',
  color: '#1f2937',
  fontWeight: '600',
  backgroundColor: '#f9fafb',
  padding: '1.25rem 1.5rem',
  borderRadius: '10px',
  border: '1px solid #e5e7eb',
  fontSize: '1.05rem',
  flexGrow: 1,
  justifyContent: 'flex-start',
  transition: 'all 0.3s ease',
};


const textSpan = {
  fontSize: '1rem',
};
