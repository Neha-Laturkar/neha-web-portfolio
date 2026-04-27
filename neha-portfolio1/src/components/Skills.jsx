const skillGroups = [
  {
    category: 'Programming & Scripting',
    icon: '💻',
    skills: ['Java', 'JavaScript', 'Python', 'PHP', 'REST APIs', 'JSON Data Exchange'],
  },
  {
    category: 'Frameworks & Backend',
    icon: '⚙️',
    skills: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate'],
  },
  {
    category: 'Frontend & Web',
    icon: '🎨',
    skills: ['Angular', 'React', 'HTML', 'CSS', 'Tailwind CSS', 'JavaScript'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: ['MySQL', 'Database Design', 'Query Optimisation', 'Hibernate ORM'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['AWS (Certified)', 'Azure (Certified)', 'GitHub', 'Deployment Concepts', 'Agile / Scrum'],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    skills: ['Postman', 'Maven', 'Eclipse', 'STS', 'VS Code', 'Apache Tomcat', 'Debugging', 'API Testing'],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <span className="section-tag">What I know</span>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-sub">Full-stack skill set with a strong backend and cloud focus.</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
        }}>
          {skillGroups.map(({ category, icon, skills }) => (
            <div
              key={category}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1.5rem',
                boxShadow: 'var(--shadow)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'var(--shadow)';
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{icon}</div>
              <div style={{
                fontSize: '0.72rem',
                fontFamily: 'var(--mono)',
                color: 'var(--accent)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.85rem',
                fontWeight: 600,
              }}>
                {category}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {skills.map(s => (
                  <span key={s} style={{
                    fontSize: '0.78rem',
                    padding: '0.25rem 0.65rem',
                    background: 'var(--bg3)',
                    borderRadius: 6,
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