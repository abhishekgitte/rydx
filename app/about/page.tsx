"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Zap, 
  Target, 
  Rocket, 
  Users, 
  CheckCircle2, 
  ChevronRight,
  BookOpen,
  Brain
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative mesh-gradient py-24 overflow-hidden">
          <div className="absolute inset-0 bg-white/40 dark:bg-slate-950/40 backdrop-blur-[2px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                About <span className="text-blue-600">RydX</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
                We are on a mission to redefine how students consume information for competitive exams.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 -mt-10 relative z-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-16"
            >
              {/* Mission Card */}
              <motion.div variants={itemVariants} className="glass-card rounded-[3rem] p-10 md:p-16">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold border border-blue-100 dark:border-blue-800">
                      <Target className="w-4 h-4" />
                      <span>Our Mission</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                      Speed and Comprehension, Hand in Hand.
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                      RydX is a comprehensive platform designed specifically for students preparing for competitive examinations like CAT, GMAT, IELTS, and GRE. We believe that reading speed doesn't have to come at the expense of understanding.
                    </p>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    {[
                      { icon: <Zap className="text-yellow-500" />, label: "Fast" },
                      { icon: <Brain className="text-purple-500" />, label: "Smart" },
                      { icon: <Target className="text-blue-500" />, label: "Targeted" },
                      { icon: <Users className="text-emerald-500" />, label: "Focused" },
                    ].map((item, i) => (
                      <div key={i} className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3">
                        <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm">{item.icon}</div>
                        <span className="font-bold text-slate-900 dark:text-white">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Modes Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants} className="glass-card rounded-[2.5rem] p-10">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-balance">Run Mode</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    The entire article is visible while words are highlighted one by one. This helps train your eyes to follow along while maintaining structural context.
                  </p>
                  <ul className="space-y-3">
                    {["Guided Pacing", "Context Awareness", "Visual Anchoring"].map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" /> {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants} className="glass-card rounded-[2.5rem] p-10">
                  <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-balance">Flash Mode</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Words appear one at a time using bionic reading techniques. First parts are bolded to help your brain process visual cues faster.
                  </p>
                  <ul className="space-y-3">
                    {["Bionic Highlighting", "Eliminate Sub-vocalization", "Rapid Processing"].map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-600" /> {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Call to Action */}
              <motion.div variants={itemVariants} className="bg-slate-900 dark:bg-blue-600 rounded-[3rem] p-12 md:p-16 text-center shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 tracking-tight">
                  Ready to Read Faster?
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/test" className="px-10 py-4 bg-white text-slate-900 dark:text-blue-600 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                    Take Speed Test <ChevronRight className="w-5 h-5" />
                  </Link>
                  <Link href="/practice" className="px-10 py-4 bg-transparent border-2 border-white/30 text-white rounded-2xl font-bold hover:bg-white/10 transition-all">
                    Go to Practice
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
