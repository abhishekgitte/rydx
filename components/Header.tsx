"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Home, Clock, BookOpen, Info, Mail } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
    { name: "Reading Test", href: "/test", icon: <Clock className="w-5 h-5" /> },
    { name: "Practice", href: "/practice", icon: <BookOpen className="w-5 h-5" /> },
    { name: "About", href: "/about", icon: <Info className="w-5 h-5" /> },
    { name: "Contact Us", href: "/contact", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <header 
      className={`glass-nav transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ willChange: 'transform' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-[height] duration-300 ease-out ${
          scrolled ? "h-16" : "h-20"
        }`}>
          {/* Logo - same as footer */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-1.5 rounded-lg shadow-md">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              RydX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="relative px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 group"
              >
                <span className="relative z-10">{link.name}</span>
                <motion.span 
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 8 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="md:hidden overflow-hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl mb-4"
            >
              <div className="py-3 px-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-4 px-4 py-3.5 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-900 rounded-xl transition-all duration-200 font-semibold hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-slate-400 group-hover:text-blue-500 transition-colors">
                      {link.icon}
                    </span>
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
