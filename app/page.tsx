"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, BookOpen, Settings, ChevronRight, ArrowRight, Clock, Trophy } from "lucide-react";

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
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative mesh-gradient py-24 lg:py-36 overflow-hidden">
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
                <span className="block text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300">
                  Train your{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Brain
                  </span>{" "}
                  and{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Mind
                  </span>
                </span>
                <span className="block mt-3 text-5xl md:text-7xl">
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
              
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Unlock your <span className="text-slate-900 dark:text-white font-semibold">true potential</span> by breaking mental blocks.{" "}
                <span className="text-slate-900 dark:text-white font-semibold">RydX</span> helps students build{" "}
                <span className="text-slate-900 dark:text-white font-semibold">focus</span>, read{" "}
                <span className="text-slate-900 dark:text-white font-semibold">faster</span>, and keep{" "}
                <span className="text-slate-900 dark:text-white font-semibold">strong</span> comprehension—ideal for{" "}
                <span className="text-slate-900 dark:text-white font-semibold">CAT, GMAT, IELTS</span>, and any exam with reading comprehension.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/test" className="btn-primary flex items-center gap-2 px-10 py-4 text-lg">
                    Take a Quick Test <ChevronRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/practice" className="btn-secondary flex items-center gap-2 px-10 py-4 text-lg">
                    Start Practice <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>

              {/* Core Value Props */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-slate-200/50 dark:border-slate-800/50 pt-12"
              >
                <div className="text-center">
                  <div className="text-xl font-bold text-slate-900 dark:text-white mb-1">Better Focus</div>
                  <div className="text-sm text-slate-500">Stay locked in from start to finish</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-slate-900 dark:text-white mb-1">Faster Speed</div>
                  <div className="text-sm text-slate-500">Build pace with guided practice</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-slate-900 dark:text-white mb-1">Better Comprehension</div>
                  <div className="text-sm text-slate-500">Understand more, even at higher speeds</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Everything you need to practice
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Simple tools for daily training: measure your baseline, practice with guidance, and increase speed step by step.
              </p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
            >
              {[
                {
                  title: "Speed + Comprehension Test",
                  description: "Start with a quick test to see your reading speed and how well you understood the passage.",
                  icon: <Clock className="w-8 h-8 text-white" />,
                  color: "bg-blue-600",
                  gradient: "from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10",
                  border: "border-blue-100 dark:border-blue-800",
                },
                {
                  title: "Two Practice Modes",
                  description: "Run mode keeps the full text visible with guided highlighting. Flash mode helps you focus with one word at a time.",
                  icon: <BookOpen className="w-8 h-8 text-white" />,
                  color: "bg-purple-600",
                  gradient: "from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10",
                  border: "border-purple-100 dark:border-purple-800",
                },
                {
                  title: "Adjust as you improve",
                  description: "Control reading speed and text size so practice feels challenging—but still comfortable.",
                  icon: <Settings className="w-8 h-8 text-white" />,
                  color: "bg-emerald-600",
                  gradient: "from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10",
                  border: "border-green-100 dark:border-green-800",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className={`p-10 rounded-3xl bg-gradient-to-br ${feature.gradient} border ${feature.border} shadow-sm hover:shadow-2xl transition-all duration-300`}
                >
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                A simple routine that works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                {[
                  {
                    step: 1,
                    title: "Check your baseline",
                    desc: "Read a short passage, then answer a few questions. This gives you a starting point for both speed and understanding.",
                  },
                  {
                    step: 2,
                    title: "Train your mind",
                    desc: "Practice with guidance to build focus, reduce wandering thoughts, and stay engaged with what you read.",
                  },
                  {
                    step: 3,
                    title: "Increase speed gradually",
                    desc: "When the current speed feels easy and comprehension stays solid, increase it a little and repeat.",
                  },
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                      <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-[3rem] blur-2xl opacity-10"></div>
                <div className="glass-card p-4 rounded-[2.5rem] relative overflow-hidden">
                  <div className="aspect-video bg-slate-900 rounded-[1.8rem] flex items-center justify-center group overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <div className="text-center relative z-10">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl cursor-pointer"
                      >
                        <Zap className="w-10 h-10 fill-current" />
                      </motion.div>
                      <p className="text-white font-bold text-xl">Stay consistent</p>
                      <p className="text-slate-400 mt-2">Short sessions add up over time</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-500/20"
            >
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <Trophy className="w-16 h-16 text-blue-200 mx-auto mb-8 opacity-50" />
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
                  Start today
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
                  Take the speed test, then practice for a few minutes a day to build faster reading with better comprehension.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/test"
                    className="inline-block bg-white text-blue-600 px-12 py-5 rounded-2xl text-xl font-bold hover:bg-slate-50 transition-all shadow-xl shadow-black/10"
                  >
                    Take the Test
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
