const certs = [
  { icon: '☁️', name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2026', color: '#f59e0b' },
  { icon: '🔷', name: 'Microsoft Azure Fundamentals AZ-900', issuer: 'Microsoft', year: '2026', color: '#3b82f6' },
];

export default function Certifications() {
  return (
    <section id="certifications" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <span className="section-tag">Credentials</span>
        <h2 className="section-title">Certifications</h2>
        <p className="section-sub">Industry-recognised cloud certifications.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {certs.map(c => (
            <div key={c.name} style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius)', padding: '1.75rem',
              boxShadow: 'var(--shadow)', display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = c.color; e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{
                width: 52, height: 52, borderRadius: 12, fontSize: '1.6rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--bg3)', flexShrink: 0,
              }}>
                {c.icon}
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text)', marginBottom: 4, lineHeight: 1.3 }}>
                  {c.name}
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text2)', marginBottom: 4 }}>{c.issuer}</p>
                <span style={{
                  fontSize: '0.72rem', fontFamily: 'var(--mono)',
                  color: 'var(--accent)', background: 'var(--accent-pale)',
                  padding: '0.2rem 0.6rem', borderRadius: 100,
                }}>
                  {c.year} · Active
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}