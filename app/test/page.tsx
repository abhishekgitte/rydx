"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

// 600-word passage: The Science of Circadian Rhythms
const testArticle = `The human body operates on an internal clock known as the circadian rhythm, a roughly twenty-four-hour cycle that influences when we feel alert, hungry, or sleepy. This biological timer is governed by a tiny region in the brain called the suprachiasmatic nucleus, which responds primarily to light exposure. When morning light reaches our eyes, it signals the brain to suppress melatonin, the hormone that promotes sleep, and to increase cortisol, which helps us wake up. Conversely, as darkness falls, melatonin production rises and we begin to feel drowsy. Disrupting this delicate balance—through shift work, jet lag, or excessive screen time at night—can lead to poor sleep quality, reduced concentration, and even long-term health risks including obesity, diabetes, and cardiovascular disease.

Scientists have discovered that circadian rhythms extend far beyond sleep and wakefulness. Nearly every tissue in the body contains its own molecular clocks, which regulate the timing of hormone release, digestion, immune function, and cell repair. The liver, for instance, processes nutrients more efficiently at certain times of day, while the immune system mounts stronger responses during typical waking hours. This field of study, known as chronobiology, has profound implications for medicine. Administering chemotherapy or certain medications at specific times—a practice called chronotherapy—may improve their effectiveness and reduce side effects. Similarly, eating meals aligned with our internal clocks could support better metabolic health than grazing throughout the day or night.

The modern world, however, presents constant challenges to our circadian rhythms. Artificial lighting, smartphones, and around-the-clock entertainment keep us stimulated long after the sun has set. Shift workers, including nurses, pilots, and factory employees, often struggle with chronic misalignment between their schedules and their biological clocks. Studies show that night shift workers face higher rates of sleep disorders, mood disturbances, and certain cancers. Even occasional disruptions, such as weekend sleep-ins or late-night socializing, can create "social jet lag," where our bodies are out of sync with our schedules. Recognizing these challenges, some employers have begun offering flexible hours or improved lighting in workplaces to better support employee well-being.

Improving circadian health often starts with simple, evidence-based habits. Exposing yourself to natural daylight, especially in the morning, helps anchor your rhythm and improves alertness. Limiting blue light from screens in the evening—or using night mode and blue-light-blocking glasses—can ease the transition to sleep. Keeping a consistent sleep schedule, including on weekends, reinforces your internal clock. Avoiding large meals and caffeine close to bedtime also supports better rest. For those who travel across time zones, gradually shifting sleep times before a trip and seeking morning light at your destination can ease jet lag. While individual needs vary, most adults function best with seven to nine hours of sleep per night, timed in sync with their circadian rhythm.

Understanding and respecting our circadian rhythms is not merely about feeling less tired; it is about optimizing our physical health, mental clarity, and overall quality of life. As research in chronobiology continues to grow, we gain clearer insights into how working with our internal clocks, rather than against them, can lead to healthier, more productive lives. Sleep experts emphasize that small, consistent changes—such as dimming lights an hour before bed or avoiding caffeine after midday—often yield greater long-term benefits than drastic overhauls. Schools and workplaces that adopt later start times or flexible scheduling report improvements in focus, mood, and performance, underscoring the idea that respecting biology can benefit both individuals and society. Over time, these practices can help restore a more natural alignment between our daily routines and the rhythms that have evolved over millions of years.`;

const comprehensionQuestions = [
  {
    id: 1,
    question: "What part of the brain primarily governs the circadian rhythm, and what does it respond to?",
    options: [
      "The hippocampus; it responds to sound",
      "The suprachiasmatic nucleus; it responds primarily to light exposure",
      "The prefrontal cortex; it responds to temperature",
      "The amygdala; it responds to hunger"
    ],
    correct: 1
  },
  {
    id: 2,
    question: "According to the passage, what is chronotherapy?",
    options: [
      "A type of psychotherapy for sleep disorders",
      "Administering chemotherapy or certain medications at specific times to improve effectiveness",
      "Using light therapy to treat depression",
      "A diet that aligns meal times with daylight"
    ],
    correct: 1
  },
  {
    id: 3,
    question: "What is 'social jet lag' as described in the passage?",
    options: [
      "Jet lag experienced during international travel",
      "A condition where our bodies are out of sync with our schedules due to occasional disruptions like weekend sleep-ins",
      "A sleep disorder affecting shift workers only",
      "The feeling of tiredness after social events"
    ],
    correct: 1
  },
  {
    id: 4,
    question: "Which of the following is NOT mentioned as a way to improve circadian health?",
    options: [
      "Exposing yourself to natural daylight in the morning",
      "Keeping a consistent sleep schedule including on weekends",
      "Taking melatonin supplements every night",
      "Limiting blue light from screens in the evening"
    ],
    correct: 2
  },
  {
    id: 5,
    question: "What does the passage suggest about circadian rhythms and body tissues?",
    options: [
      "Only the brain has a circadian clock",
      "Nearly every tissue has its own molecular clocks regulating hormones, digestion, and immune function",
      "The liver is the only organ outside the brain with a clock",
      "Circadian rhythms affect only sleep and wakefulness"
    ],
    correct: 1
  }
];

export default function TestPage() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [isReading, setIsReading] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [results, setResults] = useState<{
    wpm: number;
    comprehension: number;
  } | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);
  const articleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isReading || !startTime) return;
    const interval = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [isReading, startTime]);

  const checkReachedEnd = useCallback(() => {
    const el = articleContainerRef.current;
    if (!el) return false;
    const { scrollTop, scrollHeight, clientHeight } = el;
    const threshold = 24;
    if (scrollHeight <= clientHeight) return true;
    return scrollTop + clientHeight >= scrollHeight - threshold;
  }, []);

  useEffect(() => {
    if (!isReading) return;
    const el = articleContainerRef.current;
    if (!el) return;
    const updateReachedEnd = () => setHasReachedEnd(checkReachedEnd());
    updateReachedEnd();
    const delayedCheck = setTimeout(updateReachedEnd, 200);
    el.addEventListener("scroll", updateReachedEnd);
    window.addEventListener("resize", updateReachedEnd);
    return () => {
      clearTimeout(delayedCheck);
      el.removeEventListener("scroll", updateReachedEnd);
      window.removeEventListener("resize", updateReachedEnd);
    };
  }, [isReading, checkReachedEnd]);

  const startTest = () => {
    setStartTime(Date.now());
    setIsReading(true);
    setShowQuestions(false);
    setAnswers({});
    setResults(null);
    setElapsedSeconds(0);
    setHasReachedEnd(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const finishReading = () => {
    if (startTime && hasReachedEnd) {
      setEndTime(Date.now());
      setIsReading(false);
      setShowQuestions(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const submitAnswers = () => {
    if (!startTime || !endTime) return;

    const timeInMinutes = (endTime - startTime) / 60000;
    const wordCount = testArticle.split(/\s+/).length;
    const wpm = Math.round(wordCount / timeInMinutes);

    let correctAnswers = 0;
    comprehensionQuestions.forEach((q) => {
      if (answers[q.id] === q.correct) {
        correctAnswers++;
      }
    });

    const comprehension = Math.round((correctAnswers / comprehensionQuestions.length) * 100);

    setResults({ wpm, comprehension });
    setShowQuestions(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200/60 overflow-hidden">
          <div className="px-6 sm:px-8 pt-8 pb-6 border-b border-slate-100">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Reading Speed Test
            </h1>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Read the passage at your normal pace, then answer 5 comprehension questions to measure your speed and understanding.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            {!isReading && !showQuestions && !results && (
              <div className="text-center py-12 sm:py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Ready to Test Your Speed?</h2>
                <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto mb-2">
                  You&apos;ll read a ~600-word passage, then click <strong>Finish Reading</strong> below the passage when done.
                </p>
                <p className="text-slate-500 text-xs sm:text-sm mb-8">≈ 600 words · 5 questions</p>
                <button
                  onClick={startTest}
                  className="bg-indigo-600 text-white px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-indigo-700 active:scale-[0.98] transition-all shadow-lg shadow-indigo-500/25"
                >
                  Start Reading Test
                </button>
              </div>
            )}

            {isReading && (
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2 text-sm">
                  <span className="inline-flex items-center gap-1.5 text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg font-medium">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    Reading in progress
                  </span>
                  <span className="text-slate-500 tabular-nums">{formatTime(elapsedSeconds)}</span>
                </div>
                <div
                  ref={articleContainerRef}
                  className="rounded-xl bg-slate-50/80 border border-slate-200/80 p-5 sm:p-6 max-h-[60vh] overflow-y-auto"
                >
                  <article className="prose prose-slate max-w-none prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-4 prose-p:text-[18px]">
                    <p className="whitespace-pre-wrap text-slate-700 leading-relaxed text-[18px]">
                      {testArticle}
                    </p>
                  </article>
                </div>
                <div className="flex flex-col items-center gap-2 pt-2">
                  {!hasReachedEnd && (
                    <p className="text-slate-500 text-sm">
                      Scroll to the end of the passage to enable <strong>Finish Reading</strong>.
                    </p>
                  )}
                  <button
                    onClick={finishReading}
                    disabled={!hasReachedEnd}
                    className="bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-indigo-700 active:scale-[0.98] transition-all shadow-lg shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-indigo-600"
                  >
                    Finish Reading
                  </button>
                </div>
              </div>
            )}

            {showQuestions && (
              <div className="space-y-6">
                <div className="rounded-xl bg-amber-50 border border-amber-200/80 px-4 py-3">
                  <p className="text-amber-900 font-medium text-sm sm:text-base">
                    Answer all 5 questions, then submit.
                  </p>
                </div>
                {comprehensionQuestions.map((q) => (
                  <div
                    key={q.id}
                    className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 sm:p-6"
                  >
                    <h3 className="font-semibold text-slate-900 mb-3 text-sm sm:text-base">
                      {q.id}. {q.question}
                    </h3>
                    <div className="space-y-2">
                      {q.options.map((option, index) => (
                        <label
                          key={index}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-white cursor-pointer border border-transparent hover:border-slate-200 transition-colors"
                        >
                          <input
                            type="radio"
                            name={`question-${q.id}`}
                            value={index}
                            checked={answers[q.id] === index}
                            onChange={() => setAnswers({ ...answers, [q.id]: index })}
                            className="mt-1 w-4 h-4 text-indigo-600 accent-indigo-600"
                          />
                          <span className="text-slate-700 text-sm sm:text-base">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                <button
                  onClick={submitAnswers}
                  className="w-full bg-indigo-600 text-white py-3.5 rounded-xl text-base font-semibold hover:bg-indigo-700 active:scale-[0.99] transition-all shadow-lg shadow-indigo-500/25"
                >
                  Submit Answers
                </button>
              </div>
            )}

            {results && (
              <div className="text-center py-10 sm:py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Your Results</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-8">
                  <div className="rounded-xl bg-indigo-50 border border-indigo-200/80 p-5">
                    <div className="text-3xl font-bold text-indigo-600">{results.wpm}</div>
                    <div className="text-slate-600 text-sm font-medium">Words per minute</div>
                  </div>
                  <div className="rounded-xl bg-emerald-50 border border-emerald-200/80 p-5">
                    <div className="text-3xl font-bold text-emerald-600">{results.comprehension}%</div>
                    <div className="text-slate-600 text-sm font-medium">Comprehension</div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm sm:text-base mb-8 max-w-md mx-auto">
                  {results.wpm < 200 && "You're reading at a beginner pace. Regular practice can help you improve."}
                  {results.wpm >= 200 && results.wpm < 300 && "Solid average pace. Keep practicing to reach higher levels."}
                  {results.wpm >= 300 && results.wpm < 400 && "Strong reading speed—above average."}
                  {results.wpm >= 400 && "Excellent speed. You're among the fastest readers."}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/practice"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-base font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    Start Practicing
                  </Link>
                  <button
                    onClick={() => {
                      setStartTime(null);
                      setEndTime(null);
                      setResults(null);
                      setAnswers({});
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="bg-slate-200 text-slate-800 px-6 py-3 rounded-xl text-base font-semibold hover:bg-slate-300 transition-colors"
                  >
                    Retake Test
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
