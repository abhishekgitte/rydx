import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent dark:from-blue-950/20"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                About <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-300 bg-clip-text text-transparent">RydX</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 mx-auto rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {/* About RydX */}
              <div className="bg-white dark:bg-slate-900/60 rounded-2xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 shadow-sm">
                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  RydX is a reading training platform built to help people read faster with clarity and comprehension.
                </p>
                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                  In school and college, most of us are taught what to read but rarely how to read efficiently. As a result, reading often feels slow, tiring, and unfocused — especially when the material is long, complex, or time-bound. RydX exists to change that.
                </p>
              </div>

              {/* Reading Is a Skill, Not a Talent */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-violet-600 rounded-full"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                    Reading Is a Skill, Not a Talent
                  </h2>
                </div>
                <div className="bg-white dark:bg-slate-900/60 rounded-2xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Reading speed and comprehension are not fixed traits. They are trainable skills shaped by habits, focus, and technique. Many readers struggle not because the content is difficult, but because of inefficient reading patterns developed over time — such as subvocalization, unnecessary re-reading, narrow eye span, and lack of strategic pacing.
                  </p>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    RydX helps users identify these limitations and gradually replace them with better reading behaviors.
                  </p>
                </div>
              </div>

              {/* How RydX Works */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-blue-600 rounded-full"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                    How RydX Works
                  </h2>
                </div>
                <div className="bg-white dark:bg-slate-900/60 rounded-2xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    RydX begins with awareness. Users first measure their current reading speed and comprehension through structured tests. This establishes a clear baseline and highlights specific areas for improvement.
                  </p>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    From there, RydX provides guided practice using scientifically informed reading methods. Users can adjust reading modes, speed, and visual settings to create controlled reading challenges that push the brain to adapt — without overwhelming it.
                  </p>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    The focus is not just on reading faster, but on reading deliberately: knowing when to slow down, when to speed up, and how to extract meaning efficiently.
                  </p>
                </div>
              </div>

              {/* Built for Real-World Reading */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-violet-600 to-indigo-600 rounded-full"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                    Built for Real-World Reading
                  </h2>
                </div>
                <div className="bg-white dark:bg-slate-900/60 rounded-2xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    RydX is designed for anyone who reads with purpose — students, professionals, and lifelong learners alike. Whether the goal is academic preparation, professional growth, or simply handling large volumes of information more effectively, RydX adapts to the reader, not the other way around.
                  </p>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    Rather than locking users into predefined content, RydX encourages practice with real material — articles, study passages, and texts that matter to the user's goals.
                  </p>
                </div>
              </div>

              {/* Our Philosophy */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                    Our Philosophy
                  </h2>
                </div>
                <div className="bg-white dark:bg-slate-900/60 rounded-2xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                    RydX does not promise instant results or unrealistic speed claims. We believe real improvement comes from:
                  </p>
                  <ul className="space-y-3 mb-6 ml-4">
                    <li className="flex items-start gap-3 text-lg text-slate-700 dark:text-slate-300">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-2.5"></span>
                      <span className="leading-relaxed">Consistent daily practice</span>
                    </li>
                    <li className="flex items-start gap-3 text-lg text-slate-700 dark:text-slate-300">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-indigo-600 mt-2.5"></span>
                      <span className="leading-relaxed">Measurable progress</span>
                    </li>
                    <li className="flex items-start gap-3 text-lg text-slate-700 dark:text-slate-300">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-violet-600 mt-2.5"></span>
                      <span className="leading-relaxed">Strong comprehension as the foundation</span>
                    </li>
                  </ul>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    Small, steady improvements compound over time, leading to better focus, faster reading, and deeper understanding.
                  </p>
                </div>
              </div>

              {/* Looking Ahead */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-violet-600 rounded-full"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                    Looking Ahead
                  </h2>
                </div>
                <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 md:p-10 border border-blue-200/60 dark:border-blue-800/40 shadow-sm">
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                    RydX is being built as a long-term reading training ecosystem, with tools for assessment, practice, progress tracking, and personalized learning. As the platform evolves, our core mission remains unchanged:
                  </p>
                  <p className="text-xl md:text-2xl text-slate-900 dark:text-white leading-relaxed font-semibold text-center py-4 px-6 bg-white/60 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700">
                    To help people read faster by helping them read better.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
