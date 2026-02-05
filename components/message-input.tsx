"use client"

import { useState } from "react"
import { Mic, Zap, Plus, Pencil, Settings, Crown } from "lucide-react"

export function MessageInput() {
  const [showSuggestions, setShowSuggestions] = useState(false)

  const suggestions = [
    "*walks over quietly* mind if i sit here?",
    "*glance over, then walk closer* mind if i sit here?",
    "*walks over with tray* mind if i sit here?",
  ]

  return (
    <div className="flex flex-col">
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
            <Zap className={`w-4 h-4 ${showSuggestions ? 'text-yellow-400 fill-yellow-400' : 'text-white/60'}`} />
          </button>
          <button className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
            <Plus className="w-4 h-4 text-white/60" />
          </button>
        </div>
      </div>

      {/* Suggestions Panel */}
      {showSuggestions && (
        <div className="bg-[#1a1a1a] px-3 py-3">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-white text-sm font-medium">Chat Inspiration</span>
            <button className="flex items-center gap-1.5 text-white/70 text-sm">
              <Settings className="w-4 h-4" />
              Chat Settings
            </button>
          </div>

          {/* Suggestion Cards */}
          <div className="flex flex-col gap-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                className="flex items-center gap-3 bg-[#2a2a2a] rounded-xl px-4 py-3 text-left"
              >
                <Pencil className="w-4 h-4 text-white/50 flex-shrink-0" />
                <div className="w-px h-6 bg-white/20" />
                <span className="text-white text-sm">{suggestion}</span>
              </button>
            ))}
          </div>

          {/* Unlock Row */}
          <div className="flex items-center justify-between mt-3 bg-[#2a2a2a] rounded-xl px-4 py-3">
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-white/50" />
              <span className="text-white font-medium">Unlock</span>
            </div>
            <span className="text-white/30 text-lg font-semibold">Talkie+</span>
          </div>
        </div>
      )}
    </div>
  )
}
