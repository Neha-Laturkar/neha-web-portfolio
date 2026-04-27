export default function About() {
  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '2', label: 'Cloud Certifications' },
    { value: '5+', label: 'Technologies' },
    { value: 'UK', label: 'Based · Norwich' },
  ];

  return (
    <section id="about" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <span className="section-tag">Who I am</span>
        <h2 className="section-title">About Me</h2>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem', alignItems: 'start',
        }}>
          <div>
            <p style={{ color: 'var(--text2)', lineHeight: 1.9, marginBottom: '1rem' }}>
              I'm a backend-focused Software Developer with over 3 years of hands-on experience
              building robust, scalable applications using <strong style={{ color: 'var(--text)' }}>Java, Spring Boot,
              REST APIs, and MySQL</strong>.
            </p>
            <p style={{ color: 'var(--text2)', lineHeight: 1.9, marginBottom: '1rem' }}>
              I'm passionate about clean architecture, secure data handling, and delivering
              high-performance backend services. Having recently achieved both <strong style={{ color: 'var(--text)' }}>
              AWS and Azure certifications</strong>, I'm growing into the cloud space and actively
              seeking Backend Developer or Junior Cloud Engineer roles in the UK.
            </p>
            <p style={{ color: 'var(--text2)', lineHeight: 1.9 }}>
              Based in Norwich, Norfolk — open to remote, hybrid, or on-site opportunities
              across the UK.
            </p>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem',
          }}>
            {stats.map(({ value, label }) => (
              <div key={label} style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '1.5rem',
                textAlign: 'center', boxShadow: 'var(--shadow)',
              }}>
                <div style={{
                  fontSize: '2rem', fontWeight: 800,
                  color: 'var(--accent)', letterSpacing: '-0.03em',
                }}>
                  {value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text2)', marginTop: 4 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}