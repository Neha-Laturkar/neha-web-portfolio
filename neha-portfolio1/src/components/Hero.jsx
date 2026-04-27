import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

const iconStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 44,
  height: 44,
  borderRadius: 10,
  border: '1.5px solid var(--border)',
  color: 'var(--text2)',
  textDecoration: 'none',
  transition: 'all 0.2s',
};

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={iconStyle}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--accent)';
        e.currentTarget.style.color = 'var(--accent)';
        e.currentTarget.style.background = 'var(--accent-pale)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.color = 'var(--text2)';
        e.currentTarget.style.background = 'transparent';
      }}
    >
      {icon}
    </a>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, var(--bg) 0%, var(--bg2) 100%)',
        paddingTop: '5rem',
      }}
    >
      <div className="container">
        <div style={{ maxWidth: 720 }}>

          <p style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.82rem',
            color: 'var(--accent)',
            letterSpacing: '0.1em',
            marginBottom: '1rem',
          }}>
            Hello, I am
          </p>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '0.5rem',
            color: 'var(--text)',
          }}>
            Neha Sutar
          </h1>

          <h2 style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
            fontWeight: 400,
            color: 'var(--accent)',
            marginBottom: '1.5rem',
            letterSpacing: '-0.01em',
          }}>
            Backend Developer · Software Developer · Junior Cloud Engineer
          </h2>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text2)',
            maxWidth: 540,
            lineHeight: 1.8,
            marginBottom: '2.5rem',
          }}>
            Building scalable backend systems with Java, Spring Boot and cloud
            technologies. AWS and Azure certified. Based in Norwich, UK.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}>
            <a href="#projects" className="btn-primary">
              View Projects <FiArrowDown size={16} />
            </a>
            <a href="/Neha_Sutar_CV.pdf" download className="btn-outline">
              Download CV
            </a>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <SocialLink
              href="https://github.com/Neha-Laturkar"
              icon={<FiGithub size={20} />}
            />
            <SocialLink
              href="https://www.linkedin.com/in/neha-laturkar27"
              icon={<FiLinkedin size={20} />}
            />
            <SocialLink
              href="mailto:nehalaturkar@gmail.com"
              icon={<FiMail size={20} />}
            />
          </div>

        </div>
      </div>
    </section>
  );
}