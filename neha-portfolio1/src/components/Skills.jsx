const skillGroups = [
  {
    category: 'Programming Languages',
    icon: '💻',
    skills: ['Java', 'JavaScript', 'Python', 'PHP'],
  },
  {
    category: 'Frameworks',
    icon: '⚙️',
    skills: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'Angular', 'React'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: ['MySQL', 'Database Design', 'Query Optimisation', 'Hibernate ORM'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['AWS (Certified)', 'Azure (Certified)', 'REST APIs', 'GitHub', 'Agile/Scrum'],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    skills: ['Postman', 'Maven', 'Eclipse', 'STS', 'VS Code', 'Apache Tomcat'],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <span className="section-tag">What I know</span>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-sub">A full-stack skill set with a strong backend focus.</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
        }}>
          {skillGroups.map(({ category, icon, skills }) => (
            <div key={category}
              style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '1.5rem',
                boxShadow: 'var(--shadow)', transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-hover)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{icon}</div>
              <div style={{
                fontSize: '0.72rem', fontFamily: 'var(--mono)',
                color: 'var(--accent)', letterSpacing: '0.08em',
                textTransform: 'uppercase', marginBottom: '0.85rem',
              }}>
                {category}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {skills.map(s => (
                  <span key={s} style={{
                    fontSize: '0.78rem', padding: '0.25rem 0.65rem',
                    background: 'var(--bg3)', borderRadius: 6,
                    color: 'var(--text2)',
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}