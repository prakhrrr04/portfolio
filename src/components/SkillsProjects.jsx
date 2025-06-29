export default function SkillsProjects() {
  return (
    <div className="container">
      <section style={{ padding: '2rem 0' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>🚀 Projects</h1>

        <div className="card hover-card bounce-on-hover" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937' }}>HealStay</h2>
          <p style={{ marginTop: '0.5rem', color: '#555' }}>
            A full-stack platform connecting patient families with empathetic and affordable accommodations near hospitals.
            Built using <strong>React</strong>, <strong>Firebase</strong>, and <strong>Tailwind CSS</strong>.
          </p>
        </div>

        <div className="card hover-card bounce-on-hover" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937' }}>Codeforces Rank Watcher</h2>
          <p style={{ marginTop: '0.5rem', color: '#555' }}>
            A Chrome Extension that tracks Codeforces standings and shows alerts when friends overtake you — even while you're solving problems.
            Built using <strong>JavaScript</strong>, <strong>Chrome Extension APIs</strong>, and the <strong>Codeforces API</strong>.
          </p>
        </div>

        <div className="card hover-card bounce-on-hover" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937' }}>AI Mentor Chatbot</h2>
          <p style={{ marginTop: '0.5rem', color: '#555' }}>
            An AI chatbot that provides personalized career and DSA advice to college students in natural language.
            Powered by <strong>React</strong>, <strong>Node.js</strong>, and <strong>OpenAI API</strong>.
          </p>
        </div>

        <div className="card hover-card bounce-on-hover" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937' }}>Optimized EV Charging Hub</h2>
          <p style={{ marginTop: '0.5rem', color: '#555' }}>
            Simulates multi-EV scheduling with solar and battery integration using linear programming to reduce energy costs.
            Built using <strong>Python</strong>, <strong>PuLP</strong>, and <strong>Matplotlib</strong>.
          </p>
        </div>

        <div className="card hover-card bounce-on-hover" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937' }}>Return Location Optimizer</h2>
          <p style={{ marginTop: '0.5rem', color: '#555' }}>
            Recommends optimal product return hubs using inventory and demand clustering. Visualized with Streamlit dashboards.
            Tech: <strong>Streamlit</strong>, <strong>Pandas</strong>, <strong>PyDeck</strong>.
          </p>
        </div>

      </section>
    </div>
  );
}