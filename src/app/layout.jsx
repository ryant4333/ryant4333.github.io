import './globals.css'
import ThemeToggle from '@/components/ThemeToggle'
import Link from 'next/link'

export const metadata = {
  title: 'Ryan Taylor Portfolio',
  description: 'Personal portfolio and blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function getTheme() {
                if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
                  return localStorage.getItem('theme');
                }
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  return 'dark';
                }
                return 'light';
              }
              
              const theme = getTheme();
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            })();
          `,
        }} />
      </head>
      <body>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <header className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold">rctaylor.dev</div>
            </div>
            <nav className="flex gap-6">
              <Link href="/" className="hover:text-pink-500 transition-colors">Blog</Link>
              <Link href="/about" className="hover:text-pink-500 transition-colors">About</Link>
              <Link href="/projects" className="hover:text-pink-500 transition-colors">Projects</Link>
              <ThemeToggle />
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
} 