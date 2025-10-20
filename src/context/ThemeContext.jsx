// context/ThemeContext.jsx
import { createContext, useState, useEffect, useMemo } from 'react';

export const ThemeContext = createContext();

const themes = {
  light: {
    primary: '#4F46E5',
    secondary: '#10B981',
    background: '#FFFFFF',
    text: '#1F2937',
    accent: '#F59E0B',
  },
  dark: {
    primary: '#6366F1',
    secondary: '#34D399',
    background: '#111827',
    text: '#F9FAFB',
    accent: '#FBBF24',
  },
  blue: {
    primary: '#2563EB',
    secondary: '#3B82F6',
    background: '#1E3A8A',
    text: '#F9FAFB',
    accent: '#60A5FA',
  },
  green: {
    primary: '#059669',
    secondary: '#10B981',
    background: '#064E3B',
    text: '#F9FAFB',
    accent: '#34D399',
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('portfolio-theme');
    return stored || 'light';
  });

  const [isDark, setIsDark] = useState(() =>
    ['dark', 'blue', 'green'].includes(localStorage.getItem('portfolio-theme'))
  );

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    setIsDark(['dark', 'blue', 'green'].includes(theme));

    // ✅ Inject theme colors into CSS variables dynamically
    const currentTheme = themes[theme];
    for (const key in currentTheme) {
      document.documentElement.style.setProperty(`--${key}`, currentTheme[key]);
    }
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      isDark,
      themes: themes[theme],
      allThemes: Object.keys(themes),
    }),
    [theme, isDark]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
