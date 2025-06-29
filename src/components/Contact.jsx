import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_ozo3hq8',     
      'template_v6zy74w',    
      form.current,
      '6Xprq2JE-oqexWwSn'      
    ).then(() => {
        setSent(true);
        form.current.reset();
      })
      .catch((err) => {
        console.error('Error sending email:', err);
        alert('Failed to send. Check EmailJS setup.');
      });
  };

  return (
    <div className="container">
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>📬 Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="text" name="user_name" placeholder="Your Name" required style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }} />
        <input type="email" name="user_email" placeholder="Your Email" required style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }} />
        <textarea name="message" rows="5" placeholder="Your Message" required style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }}></textarea>
        <button type="submit" className="btn">Send Message</button>
        {sent && <p style={{ color: 'green' }}>✅ Message sent successfully!</p>}
      </form>
    </div>
  );
}



