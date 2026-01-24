"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type ReadingMode = "run" | "flash";

export default function PracticePage() {
  const [textInput, setTextInput] = useState("");
  const [mode, setMode] = useState<ReadingMode>("run");
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(200); // words per minute
  const [fontSize, setFontSize] = useState(18);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<{ [key: number]: HTMLSpanElement | null }>({});

  const words = textInput.trim() ? textInput.split(/\s+/).filter(word => word.length > 0) : [];

  // Auto-scroll to highlighted word in run mode
  useEffect(() => {
    if (mode === "run" && isPlaying && wordRefs.current[currentWordIndex] && scrollContainerRef.current) {
      const wordElement = wordRefs.current[currentWordIndex];
      const container = scrollContainerRef.current;
      
      if (wordElement) {
        const containerRect = container.getBoundingClientRect();
        const wordRect = wordElement.getBoundingClientRect();
        
        // Calculate if word is out of view
        const isAboveView = wordRect.top < containerRect.top;
        const isBelowView = wordRect.bottom > containerRect.bottom;
        
        if (isAboveView || isBelowView) {
          // Scroll to center the word in the viewport
          const scrollTop = wordElement.offsetTop - container.offsetTop - (container.clientHeight / 2) + (wordElement.clientHeight / 2);
          container.scrollTo({
            top: Math.max(0, scrollTop),
            behavior: 'smooth'
          });
        }
      }
    }
  }, [currentWordIndex, mode, isPlaying]);

  useEffect(() => {
    if (isPlaying && words.length > 0) {
      const interval = (60 / speed) * 1000; // Convert WPM to milliseconds
      intervalRef.current = setInterval(() => {
        setCurrentWordIndex((prev) => {
          if (prev >= words.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, interval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, mode, speed, words.length]);

  const handlePlay = () => {
    if (currentWordIndex >= words.length - 1) {
      setCurrentWordIndex(0);
    }
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentWordIndex(0);
  };

  const handleTextChange = (newText: string) => {
    setTextInput(newText);
    handleReset();
    setIsEditing(true);
  };

  const handleClearText = () => {
    setTextInput("");
    handleReset();
    setIsEditing(true);
  };

  const handleStartReading = () => {
    if (textInput.trim()) {
      setIsEditing(false);
      handlePlay();
    }
  };

  // Bionic reading: bold first part of word
  const getBionicWord = (word: string) => {
    const length = word.length;
    const boldLength = Math.ceil(length / 2);
    return {
      bold: word.substring(0, boldLength),
      normal: word.substring(boldLength)
    };
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Reading Practice</h1>
            <p className="text-gray-600 mt-1">Paste your text and practice reading with speed control</p>
          </div>

          {/* Unified Text Input and Reading Display Area */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            {/* Header with Clear Button */}
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm font-semibold text-gray-900">
                {isEditing ? "Paste or type your text here" : "Reading Area"}
              </label>
              <div className="flex items-center gap-3">
                {textInput.trim() && (
                  <>
                    <span className="text-sm text-gray-600">
                      <span className="font-semibold">{words.length}</span> words
                    </span>
                    <button
                      onClick={handleClearText}
                      className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition-colors text-sm"
                      title="Clear all text"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      <span className="hidden sm:inline">Clear</span>
                    </button>
                  </>
                )}
                {!isEditing && textInput.trim() && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm"
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>

            {/* Unified Content Area - Fixed Height with Scroll */}
            <div
              className="border-2 border-gray-200 rounded-xl bg-gray-50 relative overflow-hidden"
              style={{ height: "60vh", minHeight: "400px" }}
            >
              {isEditing ? (
                <textarea
                  value={textInput}
                  onChange={(e) => handleTextChange(e.target.value)}
                  placeholder="Paste your article, passage, or any text here to start practicing..."
                  className="w-full h-full px-6 py-4 border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none text-gray-800 bg-transparent leading-relaxed overflow-y-auto"
                  style={{ 
                    fontSize: `${fontSize}px`, 
                    lineHeight: "1.8"
                  }}
                />
              ) : !textInput.trim() ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center max-w-md py-8">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-lg font-medium text-gray-600 mb-2">No text entered</p>
                    <p className="text-sm text-gray-500">Paste or type your text to start practicing</p>
                  </div>
                </div>
              ) : (
                <div
                  ref={scrollContainerRef}
                  className="h-full overflow-y-auto"
                >
                <>
                  {mode === "run" ? (
                    <div
                      className="px-6 py-4 max-w-4xl mx-auto"
                      style={{ fontSize: `${fontSize}px`, lineHeight: "1.8" }}
                    >
                      <p className="text-gray-800">
                        {words.map((word, index) => (
                          <span
                            key={index}
                            ref={(el) => {
                              wordRefs.current[index] = el;
                            }}
                            className={`inline-block mr-2 mb-1 ${
                              index === currentWordIndex
                                ? "word-highlight"
                                : "word-faded"
                            }`}
                          >
                            {word}
                          </span>
                        ))}
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      {currentWordIndex < words.length ? (
                        <div
                          className="text-center px-4"
                          style={{ fontSize: `${fontSize + 12}px`, lineHeight: "1.5" }}
                        >
                          {(() => {
                            const bionic = getBionicWord(words[currentWordIndex]);
                            return (
                              <span className="inline-block">
                                <span className="font-bold text-gray-900">{bionic.bold}</span>
                                <span className="font-normal text-gray-700">{bionic.normal}</span>
                              </span>
                            );
                          })()}
                        </div>
                      ) : (
                        <div className="text-center">
                          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Reading Complete!</p>
                          <p className="text-gray-600 mb-6">You've read {words.length} words</p>
                          <button
                            onClick={handleReset}
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
                          >
                            Read Again
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </>
                </div>
              )}
            </div>
          </div>

          {/* Controls Bar - Responsive Layout */}
          <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {/* Mode Selection */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                  Mode
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setMode("run");
                      handleReset();
                    }}
                    className={`flex-1 px-4 py-2.5 rounded-lg font-medium transition-all ${
                      mode === "run"
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Run
                  </button>
                  <button
                    onClick={() => {
                      setMode("flash");
                      handleReset();
                    }}
                    className={`flex-1 px-4 py-2.5 rounded-lg font-medium transition-all ${
                      mode === "flash"
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Flash
                  </button>
                </div>
              </div>

              {/* Speed Control */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                  Speed: <span className="text-blue-600">{speed} WPM</span>
                </label>
                <input
                  type="range"
                  min="50"
                  max="1200"
                  step="5"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>50</span>
                  <span>1200</span>
                </div>
              </div>

              {/* Font Size Control */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                  Font: <span className="text-blue-600">{fontSize}px</span>
                </label>
                <input
                  type="range"
                  min="12"
                  max="48"
                  step="2"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>12</span>
                  <span>48</span>
                </div>
              </div>

              {/* Playback Controls */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                  Controls
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={isPlaying ? handlePause : handleStartReading}
                    disabled={!textInput.trim()}
                    className="flex-1 bg-blue-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md disabled:shadow-none"
                  >
                    {isPlaying ? (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="hidden sm:inline">Pause</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        <span className="hidden sm:inline">Play</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-4 py-2.5 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-all"
                    title="Reset"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            {textInput.trim() && words.length > 0 && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Progress</span>
                  <span className="text-sm font-semibold text-blue-600">
                    {Math.round((currentWordIndex / words.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${(currentWordIndex / words.length) * 100}%` }}
                  />
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
