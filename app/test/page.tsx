"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

// Sample article for testing
const testArticle = `The concept of reading comprehension has evolved significantly over the past few decades. Modern research suggests that effective reading involves multiple cognitive processes working simultaneously. When we read, our brain processes visual information, decodes symbols into meaning, connects new information with existing knowledge, and constructs mental models of the text.

Reading speed and comprehension are often seen as competing goals, but studies show they can be improved together through targeted practice. The key is to develop efficient reading strategies that allow you to process information quickly while maintaining deep understanding. Techniques such as previewing, active reading, and summarization can significantly enhance both speed and comprehension.

For competitive exams like CAT, GMAT, and IELTS, reading comprehension is a critical skill. These exams test not just your ability to read quickly, but your capacity to understand complex arguments, identify main ideas, and draw inferences. Success requires balancing speed with accuracy, which is where structured practice becomes essential.`;

const comprehensionQuestions = [
  {
    id: 1,
    question: "According to the passage, what does modern research suggest about reading?",
    options: [
      "Reading is a simple visual process",
      "Reading involves multiple cognitive processes working simultaneously",
      "Reading speed and comprehension cannot be improved together",
      "Reading comprehension has not changed over time"
    ],
    correct: 1
  },
  {
    id: 2,
    question: "What is the key to improving both reading speed and comprehension?",
    options: [
      "Reading as fast as possible",
      "Developing efficient reading strategies",
      "Avoiding complex texts",
      "Reading only familiar topics"
    ],
    correct: 1
  },
  {
    id: 3,
    question: "What do competitive exams like CAT, GMAT, and IELTS test?",
    options: [
      "Only reading speed",
      "Only reading comprehension",
      "Both speed and accuracy in understanding complex arguments",
      "Memorization skills"
    ],
    correct: 2
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

  const startTest = () => {
    setStartTime(Date.now());
    setIsReading(true);
    setShowQuestions(false);
    setAnswers({});
    setResults(null);
  };

  const finishReading = () => {
    if (startTime) {
      setEndTime(Date.now());
      setIsReading(false);
      setShowQuestions(true);
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
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Reading Speed Test
          </h1>
          <p className="text-gray-600 mb-8">
            Read the passage below and answer comprehension questions to measure your reading speed and understanding.
          </p>

          {!isReading && !showQuestions && !results && (
            <div className="text-center py-12">
              <div className="mb-8">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Test Your Speed?</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Click the button below to start. Read the entire passage at your normal pace, then click "Finish Reading" when done.
                </p>
                <button
                  onClick={startTest}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Start Reading Test
                </button>
              </div>
            </div>
          )}

          {isReading && (
            <div className="space-y-6">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-medium text-blue-900">Reading in progress...</p>
                  <button
                    onClick={finishReading}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Finish Reading
                  </button>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-800 leading-relaxed text-lg whitespace-pre-wrap">
                    {testArticle}
                  </p>
                </div>
              </div>
            </div>
          )}

          {showQuestions && (
            <div className="space-y-6">
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-yellow-900 font-medium">
                  Please answer the following comprehension questions:
                </p>
              </div>

              {comprehensionQuestions.map((q) => (
                <div key={q.id} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    {q.id}. {q.question}
                  </h3>
                  <div className="space-y-2">
                    {q.options.map((option, index) => (
                      <label
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer border border-transparent hover:border-gray-200"
                      >
                        <input
                          type="radio"
                          name={`question-${q.id}`}
                          value={index}
                          checked={answers[q.id] === index}
                          onChange={() => setAnswers({ ...answers, [q.id]: index })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <button
                onClick={submitAnswers}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Submit Answers
              </button>
            </div>
          )}

          {results && (
            <div className="text-center py-12">
              <div className="mb-8">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Results</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{results.wpm}</div>
                    <div className="text-gray-700 font-medium">Words Per Minute</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <div className="text-4xl font-bold text-green-600 mb-2">{results.comprehension}%</div>
                    <div className="text-gray-700 font-medium">Comprehension Score</div>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-gray-600 mb-4">
                    {results.wpm < 200 && "You're reading at a beginner pace. With practice, you can significantly improve!"}
                    {results.wpm >= 200 && results.wpm < 300 && "You're reading at an average pace. Keep practicing to reach advanced levels!"}
                    {results.wpm >= 300 && results.wpm < 400 && "Great reading speed! You're above average."}
                    {results.wpm >= 400 && "Excellent reading speed! You're in the top tier of readers."}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/practice"
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                  >
                    Start Practicing
                  </Link>
                  <button
                    onClick={() => {
                      setStartTime(null);
                      setEndTime(null);
                      setResults(null);
                      setAnswers({});
                    }}
                    className="bg-gray-200 text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Retake Test
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
