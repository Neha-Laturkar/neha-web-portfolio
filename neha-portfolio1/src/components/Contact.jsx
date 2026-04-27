import { useState } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    window.location.href = `mailto:nehalaturkar@gmail.com?subject=Portfolio Enquiry from ${form.name}&body=${form.message}%0A%0AFrom: ${form.email}`;
    setSent(true);
  };

  const inputStyle = {
    width: '100%', padding: '0.75rem 1rem',
    background: 'var(--bg3)', border: '1px solid var(--border)',
    borderRadius: 8, color: 'var(--text)', fontSize: '0.9rem',
    fontFamily: 'var(--font)', outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <span className="section-tag">Get in touch</span>
        <h2 className="section-title">Contact Me</h2>
        <p className="section-sub">Open to Backend Developer and Junior Cloud Engineer roles in the UK.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>

          {/* Links */}
          <div>
            <p style={{ color: 'var(--text2)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Whether you have a role, a project, or just want to connect — I'd love to hear from you.
            </p>
            {[
              { icon: <FiMail size={18}/>, label: 'nehalaturkar@gmail.com', href: 'mailto:nehalaturkar@gmail.com' },
              { icon: <FiLinkedin size={18}/>, label: 'linkedin.com/in/neha-laturkar27', href: 'https://www.linkedin.com/in/neha-laturkar27' },
              { icon: <FiGithub size={18}/>, label: 'github.com/Neha-Laturkar', href: 'https://github.com/Neha-Laturkar' },
            ].map(({ icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.85rem',
                  padding: '0.85rem', borderRadius: 10, marginBottom: '0.75rem',
                  border: '1px solid var(--border)', textDecoration: 'none',
                  color: 'var(--text2)', background: 'var(--card)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; }}>
                {icon}
                <span style={{ fontSize: '0.85rem' }}>{label}</span>
              </a>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={submit} style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius)', padding: '2rem',
            boxShadow: 'var(--shadow)',
          }}>
            {sent && (
              <div style={{
                background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
                borderRadius: 8, padding: '0.85rem 1rem',
                color: '#16a34a', fontSize: '0.88rem', marginBottom: '1rem',
              }}>
                ✅ Opening your email client...
              </div>
            )}
            {['name', 'email'].map(field => (
              <div key={field} style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text2)', marginBottom: '0.4rem', textTransform: 'capitalize' }}>
                  {field}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  required
                  value={form[field]}
                  onChange={handle}
                  placeholder={field === 'name' ? 'Your name' : 'your@email.com'}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
            ))}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text2)', marginBottom: '0.4rem' }}>
                Message
              </label>
              <textarea
                name="message" required rows={5}
                value={form.message} onChange={handle}
                placeholder="Tell me about the role or project..."
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Send Message <FiSend size={15} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}