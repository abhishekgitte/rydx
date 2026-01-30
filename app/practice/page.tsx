"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useFullscreen } from "@/hooks/useFullscreen";

type ReadingMode = "run" | "flash";

export default function PracticePage() {
  const [textInput, setTextInput] = useState("");
  const [mode, setMode] = useState<ReadingMode>("run");
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(250); // words per minute
  const [fontSizeRun, setFontSizeRun] = useState(16);
  const [fontSizeFlash, setFontSizeFlash] = useState(48);
  const fontSize = mode === "run" ? fontSizeRun : fontSizeFlash;
  const editFontSize = 16;
  const fontSizeMinRun = 12;
  const fontSizeMaxRun = 32;
  const fontSizeMinFlash = 24;
  const fontSizeMaxFlash = 96;
  const fontSizeMin = mode === "run" ? fontSizeMinRun : fontSizeMinFlash;
  const fontSizeMax = mode === "run" ? fontSizeMaxRun : fontSizeMaxFlash;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(true);
  const [mobileSettingsOpen, setMobileSettingsOpen] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<{ [key: number]: HTMLSpanElement | null }>({});
  const fullscreenContainerRef = useRef<HTMLDivElement>(null);
  const { isFullscreen, setElement, toggleFullscreen } = useFullscreen<HTMLDivElement>();

  const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

  useEffect(() => {
    if (fullscreenContainerRef.current) {
      setElement(fullscreenContainerRef.current);
    }
  }, [setElement]);

  const words = textInput.trim() ? textInput.split(/\s+/).filter(word => word.length > 0) : [];

  const handleFontSizeChange = (value: number) => {
    if (mode === "run") {
      setFontSizeRun(clamp(value, fontSizeMinRun, fontSizeMaxRun));
    } else {
      setFontSizeFlash(clamp(value, fontSizeMinFlash, fontSizeMaxFlash));
    }
  };

  useEffect(() => {
    if (mode === "run") {
      setFontSizeRun((prev) => clamp(prev, fontSizeMinRun, fontSizeMaxRun));
    } else {
      setFontSizeFlash((prev) => clamp(prev, fontSizeMinFlash, fontSizeMaxFlash));
    }
  }, [mode, fontSizeMinRun, fontSizeMaxRun, fontSizeMinFlash, fontSizeMaxFlash]);

  // Auto-scroll to highlighted word in run mode - smooth scroll to keep word centered
  useEffect(() => {
    if (mode === "run" && !isEditing && wordRefs.current[currentWordIndex] && scrollContainerRef.current) {
      const wordElement = wordRefs.current[currentWordIndex];
      const container = scrollContainerRef.current;
      
      if (wordElement) {
        const containerRect = container.getBoundingClientRect();
        const wordRect = wordElement.getBoundingClientRect();
        const wordCenter = wordRect.top + wordRect.height / 2;
        const containerCenter = containerRect.top + containerRect.height / 2;
        const offset = wordCenter - containerCenter;
        
        // Smooth scroll whenever word drifts from center (not only when out of view)
        if (Math.abs(offset) > 20) {
          const scrollTop = container.scrollTop + offset;
          container.scrollTo({
            top: Math.max(0, Math.min(scrollTop, container.scrollHeight - container.clientHeight)),
            behavior: 'smooth'
          });
        }
      }
    }
  }, [currentWordIndex, mode, isEditing]);

  useEffect(() => {
    if (isPlaying && words.length > 0) {
      const interval = (60 / speed) * 1000; // Convert WPM to milliseconds
      intervalRef.current = setInterval(() => {
        setCurrentWordIndex((prev) => {
          if (prev >= words.length - 1) {
            setIsPlaying(false);
            // Return words.length to trigger completion message
            return words.length;
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

  const scrollToReadingArea = () => {
    if (isFullscreen || !fullscreenContainerRef.current) return;
    fullscreenContainerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const handleStartReading = () => {
    if (textInput.trim()) {
      setIsEditing(false);
      handlePlay();
      // Scroll to practice area (text box + settings bar) after layout updates
      setTimeout(scrollToReadingArea, 100);
    }
  };

  // Keyboard shortcuts for Spacebar, Enter, Dot, Comma, and Arrow Keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input/textarea
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      // Spacebar or Enter to start/pause/resume
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        
        if (!textInput.trim()) return;
        
        if (isEditing) {
          handleStartReading();
          return;
        }
        if (isPlaying) {
          setIsPlaying(false);
        } else {
          if (currentWordIndex >= words.length - 1) {
            setCurrentWordIndex(0);
          }
          setIsPlaying(true);
        }
        return;
      }

      // Dot (.) to move forward one word
      if (e.key === '.' && !isEditing && textInput.trim() && words.length > 0) {
        e.preventDefault();
        setIsPlaying(false); // Pause when navigating manually
        setCurrentWordIndex((prev) => {
          if (prev >= words.length - 1) {
            return words.length - 1; // Stay at last word
          }
          return prev + 1;
        });
        return;
      }

      // Comma (,) to move backward one word
      if (e.key === ',' && !isEditing && textInput.trim() && words.length > 0) {
        e.preventDefault();
        setIsPlaying(false); // Pause when navigating manually
        setCurrentWordIndex((prev) => {
          if (prev <= 0) {
            return 0; // Stay at first word
          }
          return prev - 1;
        });
        return;
      }

      // Right Arrow to move forward one word
      if (e.key === 'ArrowRight' && !isEditing && textInput.trim() && words.length > 0) {
        e.preventDefault();
        setIsPlaying(false); // Pause when navigating manually
        setCurrentWordIndex((prev) => {
          if (prev >= words.length - 1) {
            return words.length - 1; // Stay at last word
          }
          return prev + 1;
        });
        return;
      }

      // Left Arrow to move backward one word
      if (e.key === 'ArrowLeft' && !isEditing && textInput.trim() && words.length > 0) {
        e.preventDefault();
        setIsPlaying(false); // Pause when navigating manually
        setCurrentWordIndex((prev) => {
          if (prev <= 0) {
            return 0; // Stay at first word
          }
          return prev - 1;
        });
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPlaying, isEditing, textInput, currentWordIndex, words.length]);

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
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-950">
      {!isFullscreen && <Header />}
      
      <main className={`flex-grow w-full ${isFullscreen ? 'p-0' : 'px-4 sm:px-6 lg:px-8 py-6 lg:py-8'}`}>
        <div className={`${isFullscreen ? 'h-full' : 'max-w-7xl mx-auto'}`}>
          {/* Fullscreen Container - Reading Area + Controls */}
          <div 
            ref={fullscreenContainerRef}
            className={`${isFullscreen ? 'h-full flex flex-col bg-gray-50 dark:bg-slate-950 p-6' : 'scroll-mt-16 pt-2 pb-4'}`}
          >
            {/* Unified Text Input and Reading Display Area */}
            <div className={`bg-white dark:bg-slate-900 rounded-2xl shadow-lg dark:shadow-none dark:border dark:border-slate-800 pt-4 px-4 pb-2 md:pt-5 md:px-6 md:pb-3 ${isFullscreen ? 'mb-0 flex-1 flex flex-col min-h-0' : 'mb-2 md:mb-3'}`}>
            
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between mb-3 pb-3 border-b border-gray-200 dark:border-slate-700">
              <div className="flex items-center gap-2 min-w-0">
                <div className="bg-blue-600 p-1.5 rounded-lg shrink-0">
                  <Zap className="w-3 h-3 text-white" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-sm font-bold text-gray-900 dark:text-white truncate">RydX Practice Area</h2>
                  {textInput.trim() && (
                    <p className="text-[11px] text-gray-400 dark:text-slate-400">{words.length} words • {Math.ceil(words.length / speed)} min</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={toggleFullscreen}
                  className="w-9 h-9 flex items-center justify-center bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                  title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                >
                  {isFullscreen ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  )}
                </button>
                {textInput.trim() && (
                  <button
                    onClick={handleClearText}
                    className="w-9 h-9 flex items-center justify-center bg-red-50 dark:bg-red-900/30 text-red-500 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors"
                    title="Clear all text"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                )}
                {!isEditing && textInput.trim() && (
<button
                onClick={() => setIsEditing(true)}
                className="h-9 px-3 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors text-xs"
              >
                Edit
              </button>
                )}
              </div>
            </div>

            {/* Desktop Header */}
            <div className="hidden md:flex items-center justify-between mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="bg-blue-600 p-1.5 rounded-lg shadow-lg shadow-blue-500/20">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                  RydX Practice Area
                </h2>
              </div>
              <div className="flex items-center gap-3">
                {textInput.trim() && (
                  <>
                    <span className="text-sm text-gray-600 dark:text-slate-400">
                      Words: <span className="font-semibold">{words.length}</span>
                    </span>
                    <span className="text-sm text-gray-600 dark:text-slate-400">
                      Est. Read Time: <span className="font-semibold">{Math.ceil(words.length / speed)} min</span>
                    </span>
                  </>
                )}
                <button
                  onClick={toggleFullscreen}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors text-sm"
                  title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                >
                  {isFullscreen ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Exit</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      <span>Fullscreen</span>
                    </>
                  )}
                </button>
                {textInput.trim() && (
                  <button
                    onClick={handleClearText}
                    className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition-colors text-sm"
                    title="Clear all text"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    <span>Clear</span>
                  </button>
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
              style={{ 
                height: isFullscreen ? "calc(100vh - 320px)" : "60vh", 
                minHeight: isFullscreen ? "500px" : "400px",
                flex: isFullscreen ? "1 1 auto" : "none"
              }}
            >
              {isEditing ? (
                <textarea
                  value={textInput}
                  onChange={(e) => handleTextChange(e.target.value)}
                  placeholder="Paste your article, passage, or any text here to start practicing..."
                  className="w-full h-full px-6 py-4 border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none text-gray-800 bg-transparent leading-relaxed overflow-y-auto"
                  style={{ 
                    fontSize: `${editFontSize}px`, 
                    lineHeight: "1.8",
                    fontFamily: "'Georgia', 'Times New Roman', 'Times', serif",
                    letterSpacing: "0.01em"
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
                  className="h-full overflow-y-auto scroll-smooth"
                >
                <>
                  {mode === "run" ? (
                    <div
                      className="px-6 py-4 max-w-4xl mx-auto"
                      style={{ 
                        fontSize: `${fontSize}px`, 
                        lineHeight: "1.8",
                        fontFamily: "'Georgia', 'Times New Roman', 'Times', serif",
                        letterSpacing: "0.01em",
                        fontWeight: "400"
                      }}
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
                          style={{ 
                            fontSize: `${fontSize}px`, 
                            lineHeight: "1.5",
                            fontFamily: "'Georgia', 'Times New Roman', 'Times', serif",
                            letterSpacing: "0.02em",
                            fontWeight: "400"
                          }}
                        >
                          {(() => {
                            const bionic = getBionicWord(words[currentWordIndex]);
                            return (
                              <span className="inline-block">
                                <span className="font-semibold" style={{ color: '#1B1212' }}>{bionic.bold}</span>
                                <span className="text-gray-700">{bionic.normal}</span>
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

            {/* Progress Bar - Below Read Area */}
            {!isEditing && textInput.trim() && words.length > 0 && (
              <div className="mt-2 px-2 pb-1">
                <div 
                  className="w-full bg-gray-200 rounded-full h-2 overflow-visible cursor-pointer relative group"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const percentage = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
                    const newIndex = Math.floor((percentage / 100) * words.length);
                    setCurrentWordIndex(Math.max(0, Math.min(words.length - 1, newIndex)));
                    setIsPlaying(false); // Pause when jumping to a position
                  }}
                  title="Click to jump to position • Use ← → arrow keys to navigate"
                >
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
                    style={{ 
                      width: `${Math.min(100, words.length > 0 ? (Math.min(currentWordIndex + 1, words.length) / words.length) * 100 : 0)}%` 
                    }}
                  />
                  {/* White dot indicator */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-2 border-blue-600 shadow-md transition-all duration-300 ease-out z-10"
                    style={{
                      left: `${(currentWordIndex / words.length) * 100}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  />
                </div>
              </div>
            )}
          </div>

            {/* Settings Bar - sticky: floats at bottom until we scroll past its area */}
            <div
              className={
                isFullscreen
                  ? "mt-2 bg-white rounded-2xl shadow-lg"
                  : "sticky bottom-0 z-40 mt-0 md:mt-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-gray-200 dark:border-slate-700 rounded-2xl shadow-[0_-4px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_-4px_24px_rgba(0,0,0,0.25)] md:mx-auto md:max-w-4xl"
              }
            >
              {/* Mobile: Settings button + Start + Reset; settings in popup */}
              <div className={`md:hidden p-3 ${!isFullscreen ? "pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))]" : ""}`}>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setMobileSettingsOpen(true)}
                    className="min-h-[48px] min-w-[48px] w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300 border border-gray-200"
                    title="Settings"
                    aria-label="Open settings"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                  <button
                    onClick={isPlaying ? handlePause : handleStartReading}
                    disabled={!textInput.trim()}
                    className="flex-1 min-h-[48px] bg-blue-600 text-white rounded-xl font-semibold text-base flex items-center justify-center gap-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    {isPlaying ? (
                      <><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>Pause</>
                    ) : (
                      <><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>Start</>
                    )}
                  </button>
                  <button onClick={handleReset} className="min-w-[48px] min-h-[48px] w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 active:bg-gray-300" title="Reset" aria-label="Reset">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                  </button>
                </div>
              </div>

              {/* Mobile Settings Popup */}
              <AnimatePresence>
                {mobileSettingsOpen && (
                  <div className="md:hidden fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black/50"
                      onClick={() => setMobileSettingsOpen(false)}
                      aria-hidden="true"
                    />
                    <motion.div
                      key="settings-popup"
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 24 }}
                      transition={{ type: "tween", duration: 0.2 }}
                      className="relative w-full max-w-sm max-h-[85vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-t-2xl sm:rounded-2xl shadow-xl p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))]"
                    >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">Settings</h3>
                      <button
                        onClick={() => setMobileSettingsOpen(false)}
                        className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200"
                        aria-label="Close settings"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>

                    {/* Mode */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Mode</label>
                      <div className="flex gap-3">
                        <button
                          onClick={() => { setMode("run"); handleReset(); }}
                          className={`flex-1 min-h-[48px] rounded-xl text-base font-semibold transition-all ${mode === "run" ? "bg-blue-600 text-white shadow-sm" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                        >
                          Run
                        </button>
                        <button
                          onClick={() => { setMode("flash"); handleReset(); }}
                          className={`flex-1 min-h-[48px] rounded-xl text-base font-semibold transition-all ${mode === "flash" ? "bg-blue-600 text-white shadow-sm" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                        >
                          Flash
                        </button>
                      </div>
                    </div>

                    {/* Speed */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Speed (WPM)</label>
                      <div className="flex items-center gap-2 bg-gray-100 dark:bg-slate-800 rounded-xl p-2">
                        <button onClick={() => setSpeed(Math.max(50, speed - 10))} className="min-w-[48px] min-h-[48px] flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg text-lg font-medium" aria-label="Decrease speed">−</button>
                        <span className="flex-1 text-center text-lg font-bold text-gray-900 dark:text-white">{speed}</span>
                        <button onClick={() => setSpeed(Math.min(1200, speed + 10))} className="min-w-[48px] min-h-[48px] flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg text-lg font-medium" aria-label="Increase speed">+</button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1.5">50 – 1200 words per minute</p>
                    </div>

                    {/* Size */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Text Size (px)</label>
                      <div className="flex items-center gap-2 bg-gray-100 dark:bg-slate-800 rounded-xl p-2">
                        <button onClick={() => handleFontSizeChange(Math.max(fontSizeMin, fontSize - 2))} className="min-w-[48px] min-h-[48px] flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg text-lg font-medium" aria-label="Decrease size">−</button>
                        <span className="flex-1 text-center text-lg font-bold text-gray-900 dark:text-white">{fontSize}</span>
                        <button onClick={() => handleFontSizeChange(Math.min(fontSizeMax, fontSize + 2))} className="min-w-[48px] min-h-[48px] flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg text-lg font-medium" aria-label="Increase size">+</button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1.5">{mode === "run" ? "Run: 12–32px" : "Flash: 24–96px"}</p>
                    </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>

              {/* Desktop: full grid */}
              <div className="hidden md:block p-3 md:p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide text-center">Mode</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => { setMode("run"); handleReset(); }}
                    className={`flex-1 px-3 py-2 rounded-lg font-medium transition-all ${mode === "run" ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                  >Run</button>
                  <button
                    onClick={() => { setMode("flash"); handleReset(); }}
                    className={`flex-1 px-3 py-2 rounded-lg font-medium transition-all ${mode === "flash" ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                  >Flash</button>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide text-center">Speed: <span className="text-blue-600">{speed} WPM</span></label>
                <div className="flex items-center gap-2">
                  <button onClick={() => setSpeed(Math.max(50, speed - 5))} className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-lg font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors" aria-label="Decrease WPM">−</button>
                  <input type="range" min="50" max="1200" step="5" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} className="flex-1 h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
                  <button onClick={() => setSpeed(Math.min(1200, speed + 5))} className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-lg font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors" aria-label="Increase WPM">+</button>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1"><span>50</span><span>1200</span></div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide text-center">Text Size: <span className="text-blue-600">{fontSize}px</span></label>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleFontSizeChange(Math.max(fontSizeMin, fontSize - 2))} className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-lg font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors" aria-label="Decrease font size">−</button>
                  <input type="range" min={fontSizeMin} max={fontSizeMax} step="2" value={fontSize} onChange={(e) => handleFontSizeChange(Number(e.target.value))} className="flex-1 h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
                  <button onClick={() => handleFontSizeChange(Math.min(fontSizeMax, fontSize + 2))} className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-lg font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors" aria-label="Increase font size">+</button>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1"><span>{fontSizeMin}</span><span>{fontSizeMax}</span></div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide text-center">Controls</label>
                <div className="flex gap-2 items-stretch">
                  <button
                    onClick={isPlaying ? handlePause : handleStartReading}
                    disabled={!textInput.trim()}
                    className="flex-1 min-h-[38px] px-4 py-2 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md disabled:shadow-none"
                  >
                    {isPlaying ? <><svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg><span className="hidden sm:inline">Pause</span></> : <><svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg><span className="hidden sm:inline">Start</span></>}
                  </button>
                  <button onClick={handleReset} className="min-w-[38px] min-h-[38px] w-10 flex items-center justify-center bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-all" title="Reset" aria-label="Reset">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                  </button>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {!isFullscreen && <Footer />}
    </div>
  );
}
