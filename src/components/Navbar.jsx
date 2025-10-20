import { useState, useContext } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, isDark, allThemes } = useContext(ThemeContext);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className="fixed w-full backdrop-blur-sm z-50"
      style={{
        background: 'var(--background)',
        borderBottom: '1px solid var(--primary)',
        opacity: 0.95,
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold"
            style={{ color: 'var(--secondary)' }}
          >
            VP
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors font-medium"
                style={{ color: 'var(--text)' }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = 'var(--accent)')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = 'var(--text)')
                }
              >
                {item.label}
              </a>
            ))}

            {/* Quick Theme Toggle (Dark/Light) */}
            <button
              onClick={() =>
                setTheme(isDark ? 'light' : 'dark')
              }
              className="p-2 transition-colors rounded-lg"
              style={{ color: 'var(--text)' }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = 'var(--accent)')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = 'var(--text)')
              }
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Full Theme Selector */}
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="ml-3 px-3 py-1 rounded-lg border border-[var(--primary)] bg-[var(--background)] text-[var(--text)] font-medium focus:outline-none cursor-pointer hover:border-[var(--accent)] transition-colors"
            >
              {allThemes.map((t) => (
                <option key={t} value={t}>
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--text)] hover:text-[var(--accent)] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="md:hidden backdrop-blur-sm"
          style={{ background: 'var(--background)', opacity: 0.95 }}
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-lg transition-colors font-medium"
                style={{ color: 'var(--text)' }}
                onClick={() => setIsOpen(false)}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = 'var(--accent)')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = 'var(--text)')
                }
              >
                {item.label}
              </a>
            ))}

            {/* Dark / Light Toggle */}
            <button
              onClick={() => {
                setTheme(isDark ? 'light' : 'dark');
                setIsOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg transition-colors"
              style={{ color: 'var(--text)' }}
            >
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>

            {/* Theme Selector */}
            <select
              value={theme}
              onChange={(e) => {
                setTheme(e.target.value);
                setIsOpen(false);
              }}
              className="w-full px-3 py-2 rounded-lg border border-[var(--primary)] bg-[var(--background)] text-[var(--text)] font-medium focus:outline-none cursor-pointer hover:border-[var(--accent)] transition-colors"
            >
              {allThemes.map((t) => (
                <option key={t} value={t}>
                  {t.charAt(0).toUpperCase() + t.slice(1)} Theme
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </nav>
  );
}
