import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--primary)' }} className="py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a
            href="https://github.com/vishnu25mvp"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{ color: 'var(--background)' }}
            onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseOut={e => e.currentTarget.style.color = 'var(--background)'}
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/vishnu25mvp"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{ color: 'var(--background)' }}
            onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseOut={e => e.currentTarget.style.color = 'var(--background)'}
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:vishnuprakashdev@zohomail.in"
            className="transition-colors"
            style={{ color: 'var(--background)' }}
            onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseOut={e => e.currentTarget.style.color = 'var(--background)'}
          >
            <Mail size={24} />
          </a>
        </div>
        <p style={{ color: 'var(--background)' }} className="text-sm">
          © {currentYear} Vishnu Prakash. All rights reserved.
        </p>
      </div>
    </footer>
  );
}