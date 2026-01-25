"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, BookOpen, Settings, Clock, Trophy, Target, Gauge, Brain } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative mesh-gradient pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-white/40 dark:bg-slate-950/40 backdrop-blur-[2px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.98, opacity: 0, y: -8 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold mb-8 border border-blue-100 dark:border-blue-800 shadow-sm"
              >
                Built for Future Thought Leaders
              </motion.div>
              
              <h1 className="font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
                <span className="block text-xl md:text-3xl font-bold text-slate-700 dark:text-slate-300">
                  Train your{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Brain
                  </span>{" "}
                  and{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Mind
                  </span>
                </span>
                <span className="block mt-4 text-4xl md:text-7xl leading-[1.15]">
                  Read{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    3.5X
                  </span>{" "}
                  Faster with{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    RydX
                  </span>
                </span>
              </h1>
              
              <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
                Unlock your <span className="text-slate-900 dark:text-white font-semibold">true potential</span> by breaking mental blocks.{" "}
                <span className="text-slate-900 dark:text-white font-semibold">RydX</span> helps students build{" "}
                <span className="text-slate-900 dark:text-white font-semibold">focus</span>, read{" "}
                <span className="text-slate-900 dark:text-white font-semibold">faster</span>, and keep{" "}
                <span className="text-slate-900 dark:text-white font-semibold">strong</span> comprehension—ideal for{" "}
                <span className="text-slate-900 dark:text-white font-semibold">CAT, GMAT, IELTS</span>, and any exam with reading comprehension.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4 md:px-0">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/test" className="btn-primary flex items-center justify-center gap-2 px-8 py-4 text-base md:text-lg">
                    Take a Quick Test
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/practice" className="btn-secondary flex items-center justify-center gap-2 px-8 py-4 text-base md:text-lg">
                    Start Practice
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value Props Section */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                The three pillars of <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">peak performance</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Speed reading isn't just about moving your eyes faster. It's a cognitive shift that redefines how you process information.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
            >
              {[
                {
                  title: "Erase Mental Noise",
                  subtitle: "Better Focus",
                  description: "Eliminate 'sub-vocalization' and mind-wandering. Our guided modes keep you locked into complex passages without the urge to drift.",
                  icon: Target,
                  color: "text-blue-600 dark:text-blue-400",
                  bg: "bg-blue-50 dark:bg-blue-900/20",
                  border: "border-blue-100 dark:border-blue-800/50",
                },
                {
                  title: "Break the WPM Ceiling",
                  subtitle: "Faster Speed",
                  description: "Move past the standard 200 WPM limit. Learn to 'chunk' phrases and use peripheral vision to sweep through dense exam paragraphs.",
                  icon: Gauge,
                  color: "text-indigo-600 dark:text-indigo-400",
                  bg: "bg-indigo-50 dark:bg-indigo-900/20",
                  border: "border-indigo-100 dark:border-indigo-800/50",
                },
                {
                  title: "Retain the Core Ideas",
                  subtitle: "Deep Comprehension",
                  description: "Speed is useless without retention. We bridge the gap between fast scanning and deep cognitive understanding of the text.",
                  icon: Brain,
                  color: "text-violet-600 dark:text-violet-400",
                  bg: "bg-violet-50 dark:bg-violet-900/20",
                  border: "border-violet-100 dark:border-violet-800/50",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className={`flex flex-col p-8 rounded-3xl border ${item.border} hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 group bg-slate-50/30 dark:bg-slate-900/10`}
                  >
                    <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${item.color}`} />
                    </div>
                    <span className={`text-xs font-bold ${item.color} uppercase tracking-widest mb-3`}>
                      {item.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-pattern py-28 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 dark:via-blue-950/20 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <span className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4">
                Why RydX
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                Built for the reading that <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">matters most</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                From RC sections in CAT and GMAT to IELTS reading and beyond—train with tools designed for real exam conditions and measurable progress.
              </p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Measure What Matters",
                  description: "Get an honest baseline: words per minute and comprehension score in one short test. No guesswork—just a clear starting point to beat.",
                  icon: <Clock className="w-8 h-8 text-white" />,
                  color: "bg-blue-600",
                  accent: "bg-blue-500/10 dark:bg-blue-500/20 border-blue-200 dark:border-blue-800",
                  label: "Speed Test",
                },
                {
                  title: "Train With Intent",
                  description: "Run mode guides your eyes with flowing highlights; Flash mode locks attention on one word at a time. Both build focus and reduce re-reading.",
                  icon: <BookOpen className="w-8 h-8 text-white" />,
                  color: "bg-indigo-600",
                  accent: "bg-indigo-500/10 dark:bg-indigo-500/20 border-indigo-200 dark:border-indigo-800",
                  label: "Practice",
                },
                {
                  title: "Level Up When You’re Ready",
                  description: "Tune speed and text size as you improve. Stay in the zone where it’s challenging but still comprehensible—that’s where gains happen.",
                  icon: <Settings className="w-8 h-8 text-white" />,
                  color: "bg-violet-600",
                  accent: "bg-violet-500/10 dark:bg-violet-500/20 border-violet-200 dark:border-violet-800",
                  label: "Settings",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className={`p-8 md:p-10 rounded-2xl border ${feature.accent} bg-white dark:bg-slate-900/80 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center shadow-lg shadow-black/10`}>
                      {feature.icon}
                    </div>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{feature.label}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-slate py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-900/30 border border-blue-500/20"
            >
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <Trophy className="w-14 h-14 text-amber-300/80 mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                  Know your baseline. Then beat it.
                </h2>
                <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Run your first speed test in under two minutes. From there, a few sessions of focused practice each week will move the needle—whether you’re prepping for CAT, GMAT, IELTS, or any test where reading speed and comprehension count.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/test"
                    className="inline-block bg-white text-blue-700 px-10 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition-all shadow-xl shadow-black/15"
                  >
                    Take the speed test
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
