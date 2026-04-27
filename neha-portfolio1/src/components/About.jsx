export default function About() {
  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '2', label: 'Cloud Certifications' },
    { value: '10+', label: 'Technologies' },
    { value: 'UK', label: 'Based · Norwich' },
  ];

  return (
    <section id="about" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <span className="section-tag">Who I am</span>
        <h2 className="section-title">About Me</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          <div>
            <p style={{ color: 'var(--text2)', lineHeight: 1.9, marginBottom: '1rem' }}>
              I'm a backend-focused Software Developer with over 3 years of hands-on experience
              building robust, scalable applications using{' '}
              <strong style={{ color: 'var(--text)' }}>
                Java, Spring Boot, REST APIs, and MySQL
              </strong>.
            </p>

            <p style={{ color: 'var(--text2)', lineHeight: 1.9, marginBottom: '1rem' }}>
              On the frontend, I build dynamic and responsive user interfaces using{' '}
              <strong style={{ color: 'var(--text)' }}>
                React, Angular, HTML, CSS, and Tailwind CSS
              </strong>{' '}
              — giving me the ability to contribute across the full stack and collaborate
              effectively with frontend teams.
            </p>

            <p style={{ color: 'var(--text2)', lineHeight: 1.9, marginBottom: '1rem' }}>
              I'm passionate about clean architecture, secure data handling, and delivering
              high-performance backend services. Having recently achieved both{' '}
              <strong style={{ color: 'var(--text)' }}>
                AWS and Azure certifications
              </strong>
              , I'm growing into the cloud space and actively seeking Backend Developer
              or Junior Cloud Engineer roles in the UK.
            </p>

            <p style={{ color: 'var(--text2)', lineHeight: 1.9 }}>
              Based in Norwich, Norfolk — open to remote, hybrid, or on-site opportunities
              across the UK.
            </p>

            {/* Tech highlights */}
            <div style={{ marginTop: '1.5rem' }}>
              <p style={{
                fontSize: '0.78rem',
                fontFamily: 'var(--mono)',
                color: 'var(--accent)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}>
                Core Technologies
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {[
                  'Java', 'Spring Boot', 'REST APIs', 'MySQL',
                  'React', 'Angular', 'HTML', 'CSS', 'Tailwind CSS',
                  'AWS', 'Azure', 'GitHub',
                ].map(tech => (
                  <span key={tech} style={{
                    fontSize: '0.78rem',
                    padding: '0.25rem 0.75rem',
                    background: 'var(--accent-pale)',
                    color: 'var(--accent)',
                    borderRadius: 6,
                    fontFamily: 'var(--mono)',
                    border: '1px solid rgba(37,99,235,0.15)',
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
          }}>
            {stats.map(({ value, label }) => (
              <div key={label} style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: 'var(--shadow)',
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'var(--accent)',
                  letterSpacing: '-0.03em',
                }}>
                  {value}
                </div>
                <div style={{
                  fontSize: '0.8rem',
                  color: 'var(--text2)',
                  marginTop: 4,
                }}>
                  {label}
                </div>
              </div>
            ))}

            {/* Extra info card */}
            <div style={{
              gridColumn: '1 / -1',
              background: 'var(--accent)',
              borderRadius: 'var(--radius)',
              padding: '1.5rem',
              color: '#fff',
            }}>
              <p style={{
                fontSize: '0.78rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
                opacity: 0.85,
                fontFamily: 'var(--mono)',
              }}>
                Currently seeking
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.5 }}>
                Backend Developer · Junior Cloud Engineer roles in the UK
              </p>
              <p style={{ fontSize: '0.82rem', marginTop: '0.4rem', opacity: 0.85 }}>
                Remote · Hybrid · On-site · Norwich &amp; surrounding areas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}