"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Settings, Clock, Gauge, Brain, AlertCircle, BookMarked, Wrench, ScrollText, Calendar, ClipboardList, Sparkles, FileText, TrendingUp, Languages, Eye, RotateCcw, ZapOff, BookOpen, ChevronDown } from "lucide-react";

// Floating decorative dot component
const FloatingDot = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className={`absolute rounded-full ${className}`}
  />
);

// Section divider component
const SectionDivider = ({ flip = false }: { flip?: boolean }) => (
  <div className={`relative h-16 md:h-24 overflow-hidden ${flip ? 'rotate-180' : ''}`}>
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="absolute w-full h-full"
    >
      <path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        className="fill-white dark:fill-slate-950"
        opacity="0.3"
      />
      <path
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
        className="fill-white dark:fill-slate-950"
        opacity="0.5"
      />
      <path
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
        className="fill-white dark:fill-slate-950"
      />
    </svg>
  </div>
);

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
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative mesh-gradient pt-12 pb-20 md:pt-20 md:pb-32 min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-white/40 dark:bg-slate-950/40 backdrop-blur-[2px]"></div>
          
          {/* Decorative floating elements */}
          <FloatingDot className="w-3 h-3 bg-blue-400/40 top-20 left-[10%] blur-[1px]" delay={0.5} />
          <FloatingDot className="w-2 h-2 bg-indigo-400/50 top-32 right-[15%]" delay={0.7} />
          <FloatingDot className="w-4 h-4 bg-purple-400/30 bottom-32 left-[20%] blur-[2px]" delay={0.9} />
          <FloatingDot className="w-2 h-2 bg-blue-500/40 bottom-20 right-[25%]" delay={1.1} />
          <FloatingDot className="w-3 h-3 bg-indigo-300/40 top-1/2 left-[5%] blur-[1px]" delay={0.6} />
          <FloatingDot className="w-2 h-2 bg-purple-500/30 top-40 right-[8%]" delay={0.8} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
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
                className="inline-flex items-center px-4 py-2 rounded-full bg-violet-50/80 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-bold mt-8 md:mt-12 mb-8 border border-violet-200/60 dark:border-violet-800 shadow-sm backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-violet-500 mr-2 animate-pulse" />
                Built to Make You A Smart Reader!
              </motion.div>
              
              <h1 className="font-extrabold mb-6 tracking-tight">
                <span className="block text-3xl md:text-5xl lg:text-6xl leading-[1.1] mb-4 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
                  Train Your Brain and Mind
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl mb-4 font-semibold max-w-4xl mx-auto leading-relaxed px-4 md:px-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-300 bg-clip-text text-transparent">
                Read Faster. Understand Better.
              </p>
              
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed px-4 md:px-0 font-medium">
                Improve Control and Focus While Reading.
              </p>
              
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
                RydX is a reading training platform designed to help you break inefficient reading habits, improve focus, and build strong comprehension — whether you're preparing for exams, studying complex material, or reading professionally.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4 md:px-0">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/test" className="btn-primary flex items-center justify-center gap-2 px-8 py-4 text-base md:text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-shadow">
                    Take the Free Reading Diagnostic
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/practice" className="btn-secondary flex items-center justify-center gap-2 px-8 py-4 text-base md:text-lg">
                    Start Practice
                  </Link>
                </motion.div>
              </div>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="mt-8 md:mt-12 flex flex-col items-center"
              >
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2 tracking-wider uppercase">Scroll to explore</span>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="p-2 rounded-full bg-white/60 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50 shadow-sm"
                >
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What RydX Provides */}
        <section className="py-10 md:py-16 relative overflow-hidden bg-white dark:bg-slate-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold mb-4 border border-blue-100/60 dark:border-blue-800/40"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                WHAT RydX PROVIDES
              </motion.div>
              
              <h2 className="text-2xl md:text-4xl font-extrabold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-300 bg-clip-text text-transparent">
                  What You Build with RydX
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-semibold mb-6 max-w-2xl mx-auto">
                RydX doesn't promise shortcuts.
              </p>
              
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                It trains how your brain processes written information.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4 mb-8"
            >
              {[
                "Read faster without sacrificing comprehension",
                "Reduce unnecessary re-reading",
                "Maintain focus on long, dense texts",
                "Build reading stamina and clarity",
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm mt-0.5">
                    ✓
                  </div>
                  <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 font-medium">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-200/60 dark:border-blue-800/40"
            >
              <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 font-semibold italic">
                Speed improves as a result of better reading behaviour — not forced acceleration.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Real Problem */}
        <section className="py-10 md:py-16 relative overflow-hidden bg-gradient-to-b from-white to-slate-50/80 dark:from-slate-950 dark:to-slate-950/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-rose-50/80 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 text-xs font-bold mb-4 border border-rose-100/60 dark:border-rose-800/40"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-2" />
                THE REAL PROBLEM
              </motion.div>
              
              <h2 className="text-2xl md:text-4xl font-extrabold mb-6 tracking-tight">
                <span className="text-slate-900 dark:text-white">
                  <span className="font-normal">Most People Don't Read Slowly.</span>
                  <br />
                  <span className="font-bold bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 dark:from-rose-400 dark:via-orange-300 dark:to-amber-300 bg-clip-text text-transparent">They Read Inefficiently.</span>
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-4 max-w-2xl mx-auto leading-relaxed">
                Slow reading is rarely about intelligence or language ability.
              </p>
              
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-semibold max-w-2xl mx-auto leading-relaxed">
                It's caused by habits most of us were never taught to fix.
              </p>
              
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto leading-relaxed">
                RydX identifies these habits and helps you retrain them systematically.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Know Your Enemy */}
        <section className="py-10 md:py-16 relative overflow-hidden bg-gradient-to-b from-slate-50/80 to-white dark:from-slate-950/40 dark:to-slate-950">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-100/40 dark:bg-rose-900/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-100/30 dark:bg-orange-900/10 rounded-full blur-[80px] pointer-events-none" />
          
          {/* Top decorative line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              {/* Section badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-rose-50/80 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 text-xs font-bold mb-4 border border-rose-100/60 dark:border-rose-800/40"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-2" />
                KNOW YOUR ENEMY
              </motion.div>
              
              <h2 className="text-2xl md:text-5xl font-extrabold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                  What Slows Your Reading
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
                Your reading speed isn't fixed by nature — it's shaped by habits that can be changed.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-5xl mx-auto"
            >
              <div className="mb-8">
                {/* Mobile: 2-2-2-2 layout */}
                {/* Row 1: 2 boxes */}
                <div className="grid grid-cols-2 md:hidden gap-3 mb-3">
                  {[
                    {
                      title: "Subvocalization",
                      description: "Reading every word internally instead of processing meaning",
                      icon: Brain,
                      color: "text-rose-600 dark:text-rose-400",
                      bg: "bg-gradient-to-br from-rose-50 to-rose-100/50 dark:from-rose-900/30 dark:to-rose-900/10",
                      borderColor: "border-rose-200/80 dark:border-rose-800/40",
                    },
                    {
                      title: "Regression",
                      description: "Re-reading lines because structure wasn't captured the first time",
                      icon: RotateCcw,
                      color: "text-orange-600 dark:text-orange-400",
                      bg: "bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-900/30 dark:to-orange-900/10",
                      borderColor: "border-orange-200/80 dark:border-orange-800/40",
                    },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className={`relative flex flex-col items-center p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border ${item.borderColor} shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden`}
                      >
                        {/* Subtle top accent line */}
                        <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-rose-400/50 to-transparent" />
                        <div className={`w-11 h-11 ${item.bg} rounded-xl flex items-center justify-center mb-2.5 shadow-sm`}>
                          <Icon className={`w-5 h-5 ${item.color}`} />
                        </div>
                        <h3 className="text-[13px] font-bold text-slate-900 dark:text-white text-center mb-1 tracking-tight leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Row 2: 2 boxes */}
                <div className="grid grid-cols-2 md:hidden gap-3 mb-3">
                  {[
                    {
                      title: "Narrow Eye Span",
                      description: "Seeing one word at a time instead of meaningful chunks",
                      icon: Eye,
                      color: "text-amber-600 dark:text-amber-400",
                      bg: "bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-900/30 dark:to-amber-900/10",
                      borderColor: "border-amber-200/80 dark:border-amber-800/40",
                    },
                    {
                      title: "Lack of Focus",
                      description: "Mind wandering during long reading sessions",
                      icon: ZapOff,
                      color: "text-red-600 dark:text-red-400",
                      bg: "bg-gradient-to-br from-red-50 to-red-100/50 dark:from-red-900/30 dark:to-red-900/10",
                      borderColor: "border-red-200/80 dark:border-red-800/40",
                    },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className={`relative flex flex-col items-center p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border ${item.borderColor} shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden`}
                      >
                        {/* Subtle top accent line */}
                        <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
                        <div className={`w-11 h-11 ${item.bg} rounded-xl flex items-center justify-center mb-2.5 shadow-sm`}>
                          <Icon className={`w-5 h-5 ${item.color}`} />
                        </div>
                        <h3 className="text-[13px] font-bold text-slate-900 dark:text-white text-center mb-1 tracking-tight leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Row 3: 2 boxes */}
                <div className="grid grid-cols-2 md:hidden gap-3 mb-3">
                  {[
                    {
                      title: "Flat Reading Strategy",
                      description: "Reading everything at the same pace",
                      icon: BookOpen,
                      color: "text-rose-600 dark:text-rose-400",
                      bg: "bg-gradient-to-br from-rose-50 to-rose-100/50 dark:from-rose-900/30 dark:to-rose-900/10",
                      borderColor: "border-rose-200/80 dark:border-rose-800/40",
                    },
                    {
                      title: "Vocabulary Interruptions",
                      description: "Breaking flow to decode unfamiliar words",
                      icon: AlertCircle,
                      color: "text-orange-600 dark:text-orange-400",
                      bg: "bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-900/30 dark:to-orange-900/10",
                      borderColor: "border-orange-200/80 dark:border-orange-800/40",
                    },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className={`relative flex flex-col items-center p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border ${item.borderColor} shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden`}
                      >
                        {/* Subtle top accent line */}
                        <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-rose-400/50 to-transparent" />
                        <div className={`w-11 h-11 ${item.bg} rounded-xl flex items-center justify-center mb-2.5 shadow-sm`}>
                          <Icon className={`w-5 h-5 ${item.color}`} />
                        </div>
                        <h3 className="text-[13px] font-bold text-slate-900 dark:text-white text-center mb-1 tracking-tight leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Row 4: 1 box centered (mobile) */}
                <div className="flex justify-center md:hidden mb-3">
                  <motion.div
                    variants={itemVariants}
                    className="relative flex flex-col items-center p-4 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-amber-200/80 dark:border-amber-800/40 shadow-sm hover:shadow-lg transition-all duration-300 group w-full max-w-[calc(50%-6px)] overflow-hidden"
                  >
                    {/* Subtle top accent line */}
                    <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
                    <div className="w-11 h-11 bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-900/30 dark:to-amber-900/10 rounded-xl flex items-center justify-center mb-2.5 shadow-sm">
                      <BookMarked className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="text-[13px] font-bold text-slate-900 dark:text-white text-center mb-1 tracking-tight leading-tight">
                      Low Reading Endurance
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center leading-relaxed">
                      Mental fatigue during extended reading
                    </p>
                  </motion.div>
                </div>

                {/* Desktop: 4-4 layout */}
                {/* Row 1: 4 boxes */}
                <div className="hidden md:grid md:grid-cols-4 gap-4 mb-4">
                  {[
                    {
                      title: "Subvocalization",
                      description: "Reading every word internally instead of processing meaning",
                      icon: Brain,
                      color: "text-rose-600 dark:text-rose-400",
                      bg: "bg-gradient-to-br from-rose-50 to-rose-100/50 dark:from-rose-900/30 dark:to-rose-900/10",
                      borderColor: "border-rose-200/80 dark:border-rose-800/40",
                    },
                    {
                      title: "Regression",
                      description: "Re-reading lines because structure wasn't captured the first time",
                      icon: RotateCcw,
                      color: "text-orange-600 dark:text-orange-400",
                      bg: "bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-900/30 dark:to-orange-900/10",
                      borderColor: "border-orange-200/80 dark:border-orange-800/40",
                    },
                    {
                      title: "Narrow Eye Span",
                      description: "Seeing one word at a time instead of meaningful chunks",
                      icon: Eye,
                      color: "text-amber-600 dark:text-amber-400",
                      bg: "bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-900/30 dark:to-amber-900/10",
                      borderColor: "border-amber-200/80 dark:border-amber-800/40",
                    },
                    {
                      title: "Lack of Focus",
                      description: "Mind wandering during long reading sessions",
                      icon: ZapOff,
                      color: "text-red-600 dark:text-red-400",
                      bg: "bg-gradient-to-br from-red-50 to-red-100/50 dark:from-red-900/30 dark:to-red-900/10",
                      borderColor: "border-red-200/80 dark:border-red-800/40",
                    },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className={`relative flex flex-col items-center p-6 rounded-2xl bg-white/90 dark:bg-slate-900/80 border ${item.borderColor} shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group overflow-hidden`}
                      >
                        {/* Subtle top accent line */}
                        <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-rose-400/40 to-transparent" />
                        <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-7 h-7 ${item.color}`} />
                        </div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white text-center mb-2 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 text-center leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Row 2: 4 boxes */}
                <div className="hidden md:grid md:grid-cols-4 gap-4 mb-4">
                  {[
                    {
                      title: "Flat Reading Strategy",
                      description: "Reading everything at the same pace",
                      icon: BookOpen,
                      color: "text-rose-600 dark:text-rose-400",
                      bg: "bg-gradient-to-br from-rose-50 to-rose-100/50 dark:from-rose-900/30 dark:to-rose-900/10",
                      borderColor: "border-rose-200/80 dark:border-rose-800/40",
                    },
                    {
                      title: "Vocabulary Interruptions",
                      description: "Breaking flow to decode unfamiliar words",
                      icon: AlertCircle,
                      color: "text-orange-600 dark:text-orange-400",
                      bg: "bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-900/30 dark:to-orange-900/10",
                      borderColor: "border-orange-200/80 dark:border-orange-800/40",
                    },
                    {
                      title: "Low Reading Endurance",
                      description: "Mental fatigue during extended reading",
                      icon: BookMarked,
                      color: "text-amber-600 dark:text-amber-400",
                      bg: "bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-900/30 dark:to-amber-900/10",
                      borderColor: "border-amber-200/80 dark:border-amber-800/40",
                    },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className={`relative flex flex-col items-center p-6 rounded-2xl bg-white/90 dark:bg-slate-900/80 border ${item.borderColor} shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group overflow-hidden`}
                      >
                        {/* Subtle top accent line */}
                        <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />
                        <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-7 h-7 ${item.color}`} />
                        </div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white text-center mb-2 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 text-center leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

              </div>
              
              <motion.div
                variants={itemVariants}
                className="text-center p-6 md:p-8 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200/60 dark:border-emerald-800/40 shadow-sm"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
                <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 font-semibold leading-relaxed">
                  RydX helps you identify which of these affect you — and trains you to overcome them.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* How will RydX help you? */}
        <section className="py-10 md:py-16 relative overflow-hidden bg-white dark:bg-slate-950">
          {/* Decorative elements */}
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-50/50 dark:bg-indigo-900/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-50/40 dark:bg-blue-900/5 rounded-full blur-[80px] pointer-events-none" />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              {/* Section badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold mb-4 border border-blue-100/60 dark:border-blue-800/40"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                Your Toolkit
              </motion.div>
              
              <h2 className="text-2xl md:text-5xl font-extrabold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Everything You Need to Read Faster & Better
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
              {[
                { title: "Cognitive tools designed for focused reading", icon: Wrench, color: "bg-gradient-to-br from-blue-500 to-blue-600", shadow: "shadow-blue-500/20", borderColor: "border-blue-100 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-700", soon: false },
                { title: "Research-backed techniques to improve reading efficiency", icon: ScrollText, color: "bg-gradient-to-br from-indigo-500 to-indigo-600", shadow: "shadow-indigo-500/20", borderColor: "border-indigo-100 dark:border-indigo-900/50 hover:border-indigo-300 dark:hover:border-indigo-700", soon: false },
                { title: "Structured practice to build long-term reading strength", icon: Calendar, color: "bg-gradient-to-br from-violet-500 to-violet-600", shadow: "shadow-violet-500/20", borderColor: "border-violet-100 dark:border-violet-900/50 hover:border-violet-300 dark:hover:border-violet-700", soon: false },
                { title: "Practice tailored to different reading goals", icon: ClipboardList, color: "bg-gradient-to-br from-emerald-500 to-emerald-600", shadow: "shadow-emerald-500/20", borderColor: "border-emerald-100 dark:border-emerald-900/50 hover:border-emerald-300 dark:hover:border-emerald-700", soon: true },
                { title: "AI-powered exercises from any article", icon: Sparkles, color: "bg-gradient-to-br from-amber-500 to-amber-600", shadow: "shadow-amber-500/20", borderColor: "border-amber-100 dark:border-amber-900/50 hover:border-amber-300 dark:hover:border-amber-700", soon: true },
                { title: "Vocabulary strengthening tools", icon: Languages, color: "bg-gradient-to-br from-cyan-500 to-cyan-600", shadow: "shadow-cyan-500/20", borderColor: "border-cyan-100 dark:border-cyan-900/50 hover:border-cyan-300 dark:hover:border-cyan-700", soon: true },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className={`group relative flex items-center gap-4 md:gap-5 p-5 md:p-6 rounded-2xl border bg-white dark:bg-slate-900/40 ${item.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-sm overflow-hidden`}
                  >
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent dark:from-slate-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className={`relative flex-shrink-0 w-11 h-11 md:w-12 md:h-12 ${item.color} rounded-xl flex items-center justify-center shadow-lg ${item.shadow} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="relative min-w-0 flex-1">
                      <h3 className="text-sm md:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                        {item.title}
                      </h3>
                      {item.soon && (
                        <div className="flex items-center gap-1.5 mt-1.5">
                          <span className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wide uppercase">
                            Coming Soon
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-semibold italic">
                Built for improvement, not gimmicks.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Make best use of RydX! */}
        <section className="py-10 md:py-16 relative overflow-hidden bg-gradient-to-b from-white to-slate-50/80 dark:from-slate-950 dark:to-slate-950/40">
          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-40 left-10 w-64 h-64 bg-indigo-100/30 dark:bg-indigo-900/10 rounded-full blur-[80px] pointer-events-none" />
          
          {/* Top decorative line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
          
          {/* Vertical line connector (hidden on mobile) */}
          <div className="hidden md:block absolute left-1/2 top-[280px] bottom-[200px] w-px bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 dark:from-blue-800 dark:via-indigo-800 dark:to-purple-800 -translate-x-1/2 opacity-40" style={{ left: 'calc(50% - 350px + 24px)' }} />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              {/* Section badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-indigo-50/80 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-4 border border-indigo-100/60 dark:border-indigo-800/40"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2" />
                Getting Started
              </motion.div>
              
              <h2 className="text-2xl md:text-5xl font-extrabold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  How to Get the Most from RydX
                </span>
              </h2>
            </motion.div>

            <motion.ol
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-3 md:space-y-4"
            >
              {[
                { step: 1, title: "Take the Reading Diagnostic", body: "Measure your current reading speed and comprehension. This gives you a clear, honest baseline.", icon: Gauge, href: "/test", gradient: "from-blue-500 to-blue-600" },
                { step: 2, title: "Move to Practice", body: "Paste any article, study material, or passage you want to read. Train using content that matters to you.", icon: FileText, href: "/practice", gradient: "from-blue-600 to-indigo-600" },
                { step: 3, title: "Adjust Your Settings", body: "Choose reading mode, pace, font, and layout that feel challenging but still clear.", icon: Settings, href: "/practice", gradient: "from-indigo-500 to-indigo-600" },
                { step: 4, title: "Train Slightly Above Comfort", body: "Practice at a pace just above your current level to encourage adaptation without overload.", icon: TrendingUp, gradient: "from-indigo-600 to-violet-600" },
                { step: 5, title: "Practice Consistently", body: "15–30 minutes a day builds focus, stamina, and lasting improvement. Consistency beats intensity.", icon: Clock, gradient: "from-violet-500 to-purple-600" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.step}
                    variants={itemVariants}
                    className="flex gap-4 md:gap-6 p-5 md:p-8 rounded-2xl md:rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:shadow-xl hover:bg-white dark:hover:bg-slate-900 hover:border-blue-200 dark:hover:border-blue-800/50 transition-all duration-500 group backdrop-blur-sm"
                  >
                    <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center font-bold text-lg md:text-xl shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {item.step}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 md:gap-3 mb-2 flex-wrap">
                        <div className="p-1 md:p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                          <Icon className="w-4 h-4 md:w-5 md:h-5 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                        </div>
                        <h3 className="text-base md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.href ? <Link href={item.href} className="hover:underline underline-offset-2">{item.title}</Link> : item.title}
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        {item.body}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ol>
          </div>
        </section>

        {/* Who RydX Is For */}
        <section className="py-10 md:py-16 relative overflow-hidden bg-gradient-to-b from-slate-50/80 to-white dark:from-slate-950/40 dark:to-slate-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-indigo-50/80 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-4 border border-indigo-100/60 dark:border-indigo-800/40"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2" />
                WHO RydX IS FOR
              </motion.div>
              
              <h2 className="text-2xl md:text-4xl font-extrabold mb-8 tracking-tight">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 dark:from-indigo-300 dark:via-purple-300 dark:to-violet-300 bg-clip-text text-transparent">
                  Who RydX Is For
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            >
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">✓ For</h3>
                {[
                  "Students and lifelong learners",
                  "Exam aspirants and researchers",
                  "Professionals who read large volumes of text",
                  "Anyone who wants better focus and comprehension",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-200/60 dark:border-emerald-800/40"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs mt-0.5">
                      ✓
                    </div>
                    <p className="text-base text-slate-700 dark:text-slate-300 font-medium">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">✘ Not For</h3>
                {[
                  "Miracle promises",
                  "One-day hacks",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3 p-4 rounded-xl bg-rose-50/50 dark:bg-rose-900/10 border border-rose-200/60 dark:border-rose-800/40"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-xs mt-0.5">
                      ✘
                    </div>
                    <p className="text-base text-slate-700 dark:text-slate-300 font-medium">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-12 bg-gradient-to-b from-slate-50/80 to-white dark:from-slate-950/40 dark:to-slate-950 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-[60px] pointer-events-none" />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-[1.5rem] md:rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-blue-900/40 border border-white/10"
            >
              {/* Decorative glow effects */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-blue-400/20 rounded-full blur-[100px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />
              
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`
              }} />
              
              <div className="relative z-10">
                {/* Decorative sparkle */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
                >
                  <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </motion.div>
                
                <h2 className="text-2xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight leading-tight">
                  Reading Is a Skill. Train It.
                </h2>
                <p className="text-base md:text-xl text-blue-100 mb-2 max-w-xl mx-auto font-medium">
                  Start with the diagnostic.
                </p>
                <p className="text-base md:text-xl text-blue-100 mb-2 max-w-xl mx-auto font-medium">
                  Understand how you read.
                </p>
                <p className="text-lg md:text-2xl text-white mb-6 md:mb-10 font-black tracking-wide">
                  Then improve it — deliberately.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/test"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 md:px-10 py-3.5 md:py-4 rounded-xl md:rounded-2xl font-black text-base md:text-lg hover:bg-blue-50 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 active:scale-95"
                  >
                    Start with the Free Reading Diagnostic
                    <ChevronDown className="w-5 h-5 -rotate-90" />
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
