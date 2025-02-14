'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Products', href: '/products' },
    { name: 'Features', href: '/features' },
    { name: 'API', href: '/api' },
    { name: 'Solutions', href: '/solutions' },
  ];

  return (
    <header
      className={`fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border shadow-lg'
          : 'border-transparent shadow-none'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 micro-bounce"
            >
              <span className="text-2xl font-bold animate-gradient">
                CryptoFi
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-link px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="micro-bounce"
              >
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white micro-bounce">
                Get Started
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed inset-x-0 top-16 bg-background/95 backdrop-blur-md transition-all duration-300 ease-in-out border-b border-border ${
            isOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none h-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start micro-bounce"
              >
                Sign In
              </Button>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white micro-bounce">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
