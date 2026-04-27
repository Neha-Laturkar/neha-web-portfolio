import { FiBriefcase } from 'react-icons/fi';

const bullets = [
  'Developed and maintained backend services using Java, Spring Boot and MVC architecture',
  'Built and integrated RESTful APIs consumed by Angular and React frontend applications',
  'Managed MySQL databases using Hibernate ORM — optimising schema design and queries',
  'Improved application performance through systematic debugging and code optimisation',
  'Contributed to secure, scalable system design within Agile sprint cycles',
  'Collaborated cross-functionally with frontend teams to deliver end-to-end features',
];

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <span className="section-tag">Where I've worked</span>
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-sub">3 years of professional software development experience.</p>

        <div style={{
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius)', padding: '2rem 2.5rem',
          boxShadow: 'var(--shadow)', maxWidth: 800,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: 'var(--accent-pale)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', color: 'var(--accent)',
                }}>
                  <FiBriefcase size={18} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)' }}>
                  Software Developer
                </h3>
              </div>
              <p style={{ color: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: '0.82rem' }}>
                Aimtoz Technologies Pvt. Ltd · Pune, India
              </p>
            </div>
            <span style={{
              fontFamily: 'var(--mono)', fontSize: '0.78rem',
              color: 'var(--text3)', background: 'var(--bg3)',
              padding: '0.35rem 0.9rem', borderRadius: 100,
              border: '1px solid var(--border)',
            }}>
              Jan 2020 – Jan 2023
            </span>
          </div>

          <ul style={{ listStyle: 'none' }}>
            {bullets.map((b, i) => (
              <li key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                padding: '0.5rem 0',
                borderBottom: i < bullets.length - 1 ? '1px solid var(--border)' : 'none',
                color: 'var(--text2)', fontSize: '0.92rem',
              }}>
                <span style={{ color: 'var(--accent)', marginTop: 4, flexShrink: 0 }}>→</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}