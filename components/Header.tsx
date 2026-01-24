"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              RydX
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/test" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Speed Test
            </Link>
            <Link href="/practice" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Practice
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link
              href="/practice"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Start Reading
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
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
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/test"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Speed Test
            </Link>
            <Link
              href="/practice"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Practice
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/practice"
              className="block px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Reading
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
