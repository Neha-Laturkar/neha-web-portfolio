import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    num: '01',
    title: 'SMGP E-Banking Platform',
    subtitle: 'Internet banking for an urban co-operative bank',
    stack: ['Spring Boot', 'Angular', 'MySQL', 'JPA', 'Java'],
    bullets: [
      'Developed backend REST APIs and service modules for account management using Spring Boot and JPA',
      'Implemented fund transfer and cheque book requisition with strict security controls',
      'Built distributed architecture with centralised MySQL database and encrypted credential storage',
      'Designed role-based access with separate Admin and Account Holder interfaces',
      'Ensured secure data handling and maintained full database consistency across modules',
    ],
    github: 'https://github.com/Neha-Laturkar',
  },
  {
    num: '02',
    title: 'V-Trans Logistics System',
    subtitle: 'Full transport management platform for fleet businesses',
    stack: ['Spring MVC', 'Hibernate', 'MySQL', 'Java'],
    bullets: [
      'Built backend logic for vehicle, driver, tyre, permit and insurance record management',
      'Developed booking and bilty modules enabling real-time trip tracking and dispatch alerts',
      'Implemented tyre health monitoring with automated alerts for servicing and replacement',
      'Reduced system downtime by improving testing, debugging and code quality processes',
      'Designed multi-module architecture: route planning, delivery confirmation, customer feedback',
    ],
    github: 'https://github.com/Neha-Laturkar',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <span className="section-tag">Featured work</span>
        <h2 className="section-title">Technical Projects</h2>
        <p className="section-sub">Real-world systems built end-to-end.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: '1.5rem' }}>
          {projects.map(p => (
            <div key={p.num}
              style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '2rem',
                boxShadow: 'var(--shadow)', display: 'flex', flexDirection: 'column',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-hover)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--text3)', marginBottom: '0.75rem' }}>
                Project {p.num}
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.35rem', letterSpacing: '-0.01em' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--accent)', fontFamily: 'var(--mono)', marginBottom: '1.25rem' }}>
                {p.subtitle}
              </p>

              <ul style={{ listStyle: 'none', flex: 1, marginBottom: '1.5rem' }}>
                {p.bullets.map((b, i) => (
                  <li key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
                    padding: '0.4rem 0', borderBottom: i < p.bullets.length - 1 ? '1px solid var(--border)' : 'none',
                    color: 'var(--text2)', fontSize: '0.85rem',
                  }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }}>▸</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {p.stack.map(s => (
                    <span key={s} style={{
                      fontSize: '0.72rem', padding: '0.2rem 0.6rem',
                      background: 'var(--accent-pale)', color: 'var(--accent)',
                      borderRadius: 4, fontFamily: 'var(--mono)',
                    }}>
                      {s}
                    </span>
                  ))}
                </div>
                <a href={p.github} target="_blank" rel="noreferrer"
                  style={{ color: 'var(--text2)', display: 'flex', gap: 6, alignItems: 'center', fontSize: '0.82rem', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text2)'}>
                  <FiGithub size={15} /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}