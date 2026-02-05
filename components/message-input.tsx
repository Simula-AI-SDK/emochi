"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Mic, Lightbulb, Plus, Pencil, Settings, Crown, Gamepad2, Play, X, Sparkles } from "lucide-react"

export function MessageInput() {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [showShorts, setShowShorts] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const suggestions = [
    "*walks over quietly* mind if i sit here?",
    "*glance over, then walk closer* mind if i sit here?",
    "*walks over with tray* mind if i sit here?",
  ]

  const ShortsModal = () => (
    <div className="fixed inset-0 z-[9999] bg-black p-[15px] flex flex-col">
      <button 
        onClick={() => setShowShorts(false)}
        className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"
      >
        <X className="w-5 h-5 text-white" />
      </button>
      <iframe
        src="https://v0-fandom-navigation-recreation.vercel.app/dramas?buddy=cutie-pie"
        className="w-full h-full rounded-3xl"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )

  return (
    <>
      {/* Shorts Fullscreen Modal - rendered via portal to document.body */}
      {mounted && showShorts && createPortal(<ShortsModal />, document.body)}

      <div className="flex flex-col">
        {/* Action Buttons */}
        <div className="flex items-center gap-2 px-3 py-2">
          <button className="flex-1 flex items-center justify-center gap-2 bg-[#3A3A3A] hover:bg-[#4a4a4a] transition-colors rounded-full px-4 py-2">
            <Gamepad2 className="w-4 h-4 text-white/70" />
            <span className="text-white text-sm">Play Games</span>
          </button>
          <button 
            onClick={() => setShowShorts(true)}
            className="flex-1 flex items-center justify-center gap-2 bg-[#3A3A3A] hover:bg-[#4a4a4a] transition-colors rounded-full px-4 py-2"
          >
            <Play className="w-4 h-4 text-white/70 fill-white/70" />
            <span className="text-white text-sm">Watch Shorts</span>
          </button>
        </div>

        {/* Input Bar */}
        <div className="flex items-center gap-2 px-3 py-2">
          {/* Logo Button */}
          <button className="w-10 h-10 rounded-full bg-[#3A3A3A] flex items-center justify-center flex-shrink-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/talkie-logo.jpg"
              alt="Talkie logo"
              className="w-full h-full object-cover grayscale opacity-40 contrast-50"
            />
          </button>

          {/* Input Field */}
          <div className="flex-1 bg-[#3A3A3A] rounded-full flex items-center px-3 py-2 gap-2">
            <Mic className="w-4 h-4 text-white/60 flex-shrink-0" />
            <input
              type="text"
              placeholder="Message Anna..."
              className="flex-1 bg-transparent text-white placeholder-white/50 outline-none text-sm min-w-0"
            />
            <button 
              className="flex-shrink-0"
              onClick={() => setShowSuggestions(!showSuggestions)}
            >
              <Lightbulb className={`w-4 h-4 ${showSuggestions ? 'text-yellow-400 fill-yellow-400' : 'text-white/60'}`} />
            </button>
            <button className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <Plus className="w-4 h-4 text-white/60" />
            </button>
          </div>
        </div>

        {/* Suggestions Panel */}
        {showSuggestions && (
          <div className="bg-[#1a1a1a] px-2 py-2">
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-white text-xs font-medium">Chat Inspiration</span>
              <button className="flex items-center gap-1 text-white/70 text-xs">
                <Settings className="w-3 h-3" />
                Chat Settings
              </button>
            </div>

            {/* Suggestion Cards */}
            <div className="flex flex-col gap-2.5">
              {suggestions.slice(0, 2).map((suggestion, index) => (
                <button
                  key={index}
                  className="flex items-center gap-2 bg-[#2a2a2a] rounded-lg px-2.5 py-2.5 text-left"
                >
                  <Pencil className="w-3.5 h-3.5 text-white/50 flex-shrink-0" />
                  <div className="w-px h-5 bg-white/20" />
                  <span className="text-white text-sm">{suggestion}</span>
                </button>
              ))}
              {/* Sponsored Suggestion */}
              <button className="flex items-center gap-2 bg-[#2a2a2a] rounded-lg px-2.5 py-2.5 text-left border border-yellow-500/70">
                <Sparkles className="w-3.5 h-3.5 text-yellow-500 flex-shrink-0" />
                <div className="w-px h-5 bg-yellow-500/40" />
                <div className="flex flex-col">
                  <span className="text-white text-sm">Explore the DCU on DC Dark Legion</span>
                  <span className="text-white/40 text-[10px]">Sponsored</span>
                </div>
              </button>
            </div>

            {/* Unlock Row */}
            <div className="flex items-center justify-between mt-2 bg-[#2a2a2a] rounded-lg px-2.5 py-2">
              <div className="flex items-center gap-1.5">
                <Crown className="w-4 h-4 text-white/50" />
                <span className="text-white text-xs font-medium">Unlock</span>
              </div>
              <span className="text-white/30 text-sm font-semibold">Talkie+</span>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
