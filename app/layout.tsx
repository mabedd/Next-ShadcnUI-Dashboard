'use client';

import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';
import './globals.css';
import { cn } from '../lib/utils';
import SideNavbar from '@/components/SideNavbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeSetting = localStorage.getItem('darkMode');
    if (darkModeSetting === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen w-full bg-white text-black flex',
          inter.className,
          {
            'debug-screens': process.env.NODE_ENV === 'development',
            'dark:bg-gray-900 dark:text-white': isDarkMode, // Add dark mode classes
          }
        )}
      >
        <button
          onClick={toggleDarkMode}
          className="absolute top-4 right-4 p-2 bg-gray-300 dark:bg-gray-700 rounded"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <SideNavbar />
        <div className="p-8 w-full">{children}</div>
      </body>
    </html>
  );
}
