"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Settings, Clock, Gauge, Brain, AlertCircle, BookMarked, Wrench, ScrollText, Calendar, ClipboardList, Sparkles, FileText, TrendingUp } from "lucide-react";

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
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                Know Your Enemy!
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
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
                },
                {
                  title: "Not having a habit of reading",
                  description: "Reading is a skill—without regular practice, your eyes and mind never build the stamina and rhythm needed for faster, sustained comprehension.",
                  icon: BookMarked,
                  color: "text-rose-600 dark:text-rose-400",
                  bg: "bg-rose-50 dark:bg-rose-900/20",
                  border: "border-rose-100 dark:border-rose-800/50",
                },
                {
                  title: "Mental blocks",
                  description: "Subvocalization (saying words in your head), unnecessary cautiousness, and not exploring the full potential of your brain and mind cap your speed.",
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
                    className={`flex flex-col p-8 rounded-3xl border ${item.border} hover:shadow-xl transition-all duration-300 group bg-slate-50/50 dark:bg-slate-900/20`}
                  >
                    <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}>
                      <Icon className={`w-7 h-7 ${item.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* How will RydX help you? */}
        <section className="section-pattern py-28 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 dark:via-blue-950/20 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                How will RydX help you?
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
                {
                  title: "Tools to train your brain and mind",
                  icon: Wrench,
                  color: "bg-blue-600",
                  accent: "border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30",
                  soon: false,
                },
                {
                  title: "Tested methods to improve reading speed",
                  icon: ScrollText,
                  color: "bg-indigo-600",
                  accent: "border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/30",
                  soon: false,
                },
                {
                  title: "Plan to build a habit of reading",
                  icon: Calendar,
                  color: "bg-violet-600",
                  accent: "border-violet-200 dark:border-violet-800 bg-violet-50/50 dark:bg-violet-950/30",
                  soon: true,
                },
                {
                  title: "Free quizzes to test your improvements",
                  icon: ClipboardList,
                  color: "bg-emerald-600",
                  accent: "border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/30",
                  soon: true,
                },
                {
                  title: "AI to turn any article into a quiz",
                  icon: Sparkles,
                  color: "bg-amber-600",
                  accent: "border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/30",
                  soon: true,
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className={`flex items-center gap-5 p-6 rounded-2xl border ${item.accent} bg-white dark:bg-slate-900/60 shadow-sm hover:shadow-lg transition-all duration-300`}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 ${item.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h3>
                      {item.soon && (
                        <span className="inline-block mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">Coming soon!</span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Make best use of RydX! */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                Make best use of RydX!
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
                    className="flex gap-5 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800/50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Icon className="w-5 h-5 text-slate-500 dark:text-slate-400 flex-shrink-0" />
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {item.href ? <Link href={item.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{item.title}</Link> : item.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-slate-600 dark:text-slate-400 leading-relaxed">{item.body}</p>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ol>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-slate py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-xl border border-blue-500/20"
            >
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
                  Ready to read faster?
                </h2>
                <p className="text-lg text-blue-100 mb-2 max-w-xl mx-auto">
                  Take the speed test, then practice daily.
                </p>
                <p className="text-lg text-blue-100 mb-8 font-semibold">
                  Start now.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/test"
                    className="inline-block bg-white text-blue-700 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all"
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
