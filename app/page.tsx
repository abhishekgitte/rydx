"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Settings, Clock, Gauge, Brain, AlertCircle, BookMarked, Wrench, ScrollText, Calendar, ClipboardList, Sparkles, FileText, TrendingUp, Languages } from "lucide-react";

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

        {/* Know Your Enemy */}
        <section className="py-24 relative overflow-hidden bg-slate-50/30 dark:bg-slate-950/20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Know Your Enemy!
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
                What stops you from reading fast without compromising on comprehension?
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
            >
              {[
                {
                  title: "Poor vocabulary",
                  description: "Unfamiliar words slow you down and break flow. Building a strong vocabulary lets you recognise and process words instantly without pausing.",
                  icon: AlertCircle,
                  color: "text-amber-600 dark:text-amber-400",
                  bg: "bg-amber-50 dark:bg-amber-900/20",
                  border: "border-amber-100 dark:border-amber-800/50",
                  hover: "hover:shadow-amber-500/10 hover:border-amber-200 dark:hover:border-amber-700/50",
                },
                {
                  title: "Not having a habit of reading",
                  description: "Reading is a skill—without regular practice, your eyes and mind never build the stamina and rhythm needed for faster, sustained comprehension.",
                  icon: BookMarked,
                  color: "text-rose-600 dark:text-rose-400",
                  bg: "bg-rose-50 dark:bg-rose-900/20",
                  border: "border-rose-100 dark:border-rose-800/50",
                  hover: "hover:shadow-rose-500/10 hover:border-rose-200 dark:hover:border-rose-700/50",
                },
                {
                  title: "Mental blocks",
                  description: "Subvocalization (saying words in your head), unnecessary cautiousness, and not exploring the full potential of your brain and mind cap your speed.",
                  icon: Brain,
                  color: "text-violet-600 dark:text-violet-400",
                  bg: "bg-violet-50 dark:bg-violet-900/20",
                  border: "border-violet-100 dark:border-violet-800/50",
                  hover: "hover:shadow-violet-500/10 hover:border-violet-200 dark:hover:border-violet-700/50",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className={`flex flex-col p-8 rounded-3xl border ${item.border} ${item.hover} hover:shadow-2xl transition-all duration-500 group bg-white/80 dark:bg-slate-900/40 backdrop-blur-sm`}
                  >
                    <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      <Icon className={`w-7 h-7 ${item.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-slate-950 dark:group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base font-medium">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* How will RydX help you? */}
        <section className="py-28 relative overflow-hidden bg-white dark:bg-slate-950">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-50/50 dark:bg-indigo-900/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Everything You Need to Master Reading
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                { title: "Cognitive tools designed for focused reading", icon: Wrench, color: "bg-blue-600", accent: "border-blue-100 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-700 bg-white dark:bg-slate-900/40", soon: false },
                { title: "Research-backed methods to boost reading speed", icon: ScrollText, color: "bg-indigo-600", accent: "border-indigo-100 dark:border-indigo-900/50 hover:border-indigo-300 dark:hover:border-indigo-700 bg-white dark:bg-slate-900/40", soon: false },
                { title: "Habit-building systems for long-term growth", icon: Calendar, color: "bg-violet-600", accent: "border-violet-100 dark:border-violet-900/50 hover:border-violet-300 dark:hover:border-violet-700 bg-white dark:bg-slate-900/40", soon: true },
                { title: "Exam oriented mock tests to measure real progress", icon: ClipboardList, color: "bg-emerald-600", accent: "border-emerald-100 dark:border-emerald-900/50 hover:border-emerald-300 dark:hover:border-emerald-700 bg-white dark:bg-slate-900/40", soon: true },
                { title: "AI-powered practice from any article", icon: Sparkles, color: "bg-amber-600", accent: "border-amber-100 dark:border-amber-900/50 hover:border-amber-300 dark:hover:border-amber-700 bg-white dark:bg-slate-900/40", soon: true },
                { title: "AI Powered Vocabulary Building Tools", icon: Languages, color: "bg-cyan-600", accent: "border-cyan-100 dark:border-cyan-900/50 hover:border-cyan-300 dark:hover:border-cyan-700 bg-white dark:bg-slate-900/40", soon: true },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className={`group flex items-center gap-5 p-6 rounded-2xl border ${item.accent} shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-sm`}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 ${item.color} rounded-xl flex items-center justify-center shadow-lg shadow-black/5 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      {item.soon && (
                        <div className="flex items-center gap-1.5 mt-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 animate-pulse" />
                          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wide uppercase">
                            Coming soon
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Make best use of RydX! */}
        <section className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/20">
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Make best use of RydX!
                </span>
              </h2>
            </motion.div>

            <motion.ol
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-6"
            >
              {[
                { step: 1, title: "Take the speed test", body: "Check your current reading speed. Your result is shown in WPM (words per minute)—the number of words you can read and understand in 60 seconds. It gives you a clear baseline to improve from.", icon: Gauge, href: "/test" },
                { step: 2, title: "Go to Practice", body: "Copy and paste any article you want to read. Use your own material—news, textbooks, or exam passages—so practice matches your goals.", icon: FileText, href: "/practice" },
                { step: 3, title: "Adjust settings", body: "Tweak reading modes, WPM, font size, and other options. Find a combination that feels challenging but still clear.", icon: Settings, href: "/practice" },
                { step: 4, title: "Practice at +25 WPM above your target", body: "Always set the practice speed about 25 WPM higher than the speed you are aiming for. This pushes your brain to adapt and makes your target speed feel easier over time.", icon: TrendingUp },
                { step: 5, title: "Read at least 30 minutes a day", body: "Consistency beats intensity. A daily 30-minute session builds habit and compounds your gains in both speed and comprehension.", icon: Clock },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.step}
                    variants={itemVariants}
                    className="flex gap-6 p-8 rounded-3xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:shadow-xl hover:bg-white dark:hover:bg-slate-900 hover:border-blue-200 dark:hover:border-blue-800/50 transition-all duration-500 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                          <Icon className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.href ? <Link href={item.href}>{item.title}</Link> : item.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg font-medium">
                        {item.body}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ol>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-28 bg-white dark:bg-slate-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-blue-900/40 border border-white/10"
            >
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-blue-400/20 rounded-full blur-[100px]" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                  Ready to read faster?
                </h2>
                <p className="text-lg md:text-xl text-blue-50 mb-2 max-w-xl mx-auto font-medium">
                  Take the speed test, then practice daily.
                </p>
                <p className="text-xl md:text-2xl text-white mb-10 font-black tracking-wide">
                  Start now.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/test"
                    className="inline-block bg-white text-blue-700 px-10 py-4 rounded-2xl font-black text-lg hover:bg-blue-50 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 active:scale-95"
                  >
                    Take me to the Speed Test now!
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
