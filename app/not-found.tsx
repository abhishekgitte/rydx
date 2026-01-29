"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 mb-6">
              <AlertCircle className="w-12 h-12 md:w-16 md:h-16 text-blue-600 dark:text-blue-400" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
              404
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Page Not Found
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/" 
                className="btn-primary flex items-center justify-center gap-2 px-8 py-4 text-base md:text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-shadow"
              >
                <Home className="w-5 h-5" />
                Go Home
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/practice" 
                className="btn-secondary flex items-center justify-center gap-2 px-8 py-4 text-base md:text-lg"
              >
                <Search className="w-5 h-5" />
                Start Practice
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800"
          >
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Reading Test", href: "/test" },
                { name: "Practice", href: "/practice" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
