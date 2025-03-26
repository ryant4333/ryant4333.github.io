'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const current = html.classList.contains('dark') ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    html.classList.toggle('dark');
    localStorage.setItem('theme', next);
  };

  if (!mounted) {
    return null;
  }

  return (
    <button 
      onClick={toggleTheme}
      className="dark:text-yellow-300" 
      aria-label="Toggle dark mode"
    >
      <span className="block dark:hidden">🌙</span>
      <span className="hidden dark:block">☀️</span>
    </button>
  );
} 