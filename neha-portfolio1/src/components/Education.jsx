const edu = [
  {
    icon: '🎓',
    degree: 'BTech — Computer Science & Engineering',
    school: 'Dr. Babasaheb Ambedkar Marathwada University',
    location: 'India',
    type: 'University Degree',
  },
  {
    icon: '💻',
    degree: 'Coding Career Programme',
    school: 'ITonlinelearning Ltd.',
    location: 'UK · 2026',
    type: 'Professional Training',
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <span className="section-tag">Background</span>
        <h2 className="section-title">Education</h2>
        <p className="section-sub">Academic foundation and professional upskilling in the UK.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 700 }}>
          {edu.map(e => (
            <div key={e.degree} style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius)', padding: '1.5rem 2rem',
              boxShadow: 'var(--shadow)', display: 'flex', gap: '1.25rem', alignItems: 'center',
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: 12, fontSize: '1.6rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--accent-pale)', flexShrink: 0,
              }}>
                {e.icon}
              </div>
              <div>
                <p style={{ fontWeight: 700, color: 'var(--text)', fontSize: '0.95rem', marginBottom: 2 }}>
                  {e.degree}
                </p>
                <p style={{ color: 'var(--text2)', fontSize: '0.85rem', marginBottom: 4 }}>{e.school}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text3)', fontFamily: 'var(--mono)' }}>{e.location}</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--accent)', background: 'var(--accent-pale)', padding: '0.1rem 0.55rem', borderRadius: 100, fontFamily: 'var(--mono)' }}>{e.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}