'use client';

export default function ThemeToggle() {
  const toggleTheme = () => {
    const html = document.documentElement;
    const current = html.classList.contains('dark') ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    html.classList.toggle('dark');
    localStorage.setItem('theme', next);
  };

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