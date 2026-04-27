import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const links = ['About','Skills','Experience','Projects','Certifications','Education','Contact'];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    background: scrolled ? 'var(--bg)' : 'transparent',
    borderBottom: scrolled ? '1px solid var(--border)' : 'none',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    transition: 'all 0.3s ease',
    padding: '0 2rem',
  };

  const inner = {
    maxWidth: 1100, margin: '0 auto',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    height: 64,
  };

  return (
    <nav style={navStyle}>
      <div style={inner}>
        <span style={{ fontFamily: 'var(--mono)', fontWeight: 600, color: 'var(--accent)', fontSize: '1.1rem' }}>
          &lt;NS /&gt;
        </span>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}
            className="desktop-nav">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} style={{
                color: 'var(--text2)', textDecoration: 'none',
                fontSize: '0.875rem', fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text2)'}>
                {l}
              </a>
            </li>
          ))}
          <li>
            <button onClick={toggleTheme} style={{
              background: 'var(--bg3)', border: '1px solid var(--border)',
              borderRadius: 8, padding: '0.4rem 0.6rem',
              cursor: 'pointer', color: 'var(--text)', display: 'flex', alignItems: 'center',
            }}>
              {theme === 'light' ? <FiMoon size={16} /> : <FiSun size={16} />}
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'var(--text)', display: 'none',
        }} className="hamburger">
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'var(--bg)', borderTop: '1px solid var(--border)',
          padding: '1rem 2rem 1.5rem',
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '0.6rem 0',
                color: 'var(--text2)', textDecoration: 'none', fontWeight: 500,
                borderBottom: '1px solid var(--border)',
              }}>
              {l}
            </a>
          ))}
          <button onClick={toggleTheme} style={{
            marginTop: '1rem', background: 'var(--bg3)',
            border: '1px solid var(--border)', borderRadius: 8,
            padding: '0.4rem 0.8rem', cursor: 'pointer',
            color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 8,
          }}>
            {theme === 'light' ? <><FiMoon size={14}/> Dark mode</> : <><FiSun size={14}/> Light mode</>}
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}