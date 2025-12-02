'use client';

import Link from 'next/link';
import { Github, Twitter, Mail, Sun, Moon, Linkedin, type LucideIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

const SocialLink = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <a 
    href={href}
    className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-2"
  >
    <Icon size={20} />
  </a>
);

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setDarkMode(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="max-w-2xl mx-auto px-6 py-12 flex justify-between items-center">
      <Link 
        href="/"
        className="font-bold text-2xl tracking-tighter cursor-pointer hover:opacity-70 transition-opacity"
      >
        darren<span className="text-blue-600">.</span>
      </Link>
      
      <div className="flex items-center gap-2">
        <SocialLink href="https://github.com/darrenMCodes" icon={Github} />
        <SocialLink href="https://x.com/darrenmaher06" icon={Twitter} />
        <SocialLink href="https://linkedin.com/in/darrenmaher22" icon={Linkedin} />
        <SocialLink href="mailto:darrenmaher22@gmail.com" icon={Mail} />
        <div className="w-px h-5 bg-gray-200 dark:bg-gray-800 mx-2"></div>
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 transition-colors"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
}

