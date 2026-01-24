"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-lg blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                RydX
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium rounded-lg hover:bg-gray-50 group"
            >
              <span className="relative z-10">Home</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center"></span>
            </Link>
            <Link 
              href="/test" 
              className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium rounded-lg hover:bg-gray-50 group"
            >
              <span className="relative z-10">Speed Test</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center"></span>
            </Link>
            <Link 
              href="/practice" 
              className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium rounded-lg hover:bg-gray-50 group"
            >
              <span className="relative z-10">Practice</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center"></span>
            </Link>
            <Link 
              href="/about" 
              className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium rounded-lg hover:bg-gray-50 group"
            >
              <span className="relative z-10">About</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center"></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2.5 rounded-lg text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 transition-transform duration-200"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg transition-all duration-200 font-medium hover:text-blue-600 hover:translate-x-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/test"
              className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg transition-all duration-200 font-medium hover:text-blue-600 hover:translate-x-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Speed Test
            </Link>
            <Link
              href="/practice"
              className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg transition-all duration-200 font-medium hover:text-blue-600 hover:translate-x-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Practice
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg transition-all duration-200 font-medium hover:text-blue-600 hover:translate-x-1"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
