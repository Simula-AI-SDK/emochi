"use client"

import { Mic, Zap, Plus } from "lucide-react"

export function MessageInput() {
  return (
    <div className="flex items-center gap-2 px-4 py-3">
      {/* Logo Button */}
      <button className="w-12 h-12 rounded-full bg-[#3A3A3A] flex items-center justify-center flex-shrink-0">
        <div className="text-[#E8D5B7]">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
      </button>

      {/* Input Field */}
      <div className="flex-1 bg-[#3A3A3A] rounded-full flex items-center px-4 py-3 gap-3">
        <Mic className="w-5 h-5 text-white/60 flex-shrink-0" />
        <input
          type="text"
          placeholder="Message MBTI..."
          className="flex-1 bg-transparent text-white placeholder-white/50 outline-none text-base"
        />
        <button className="flex-shrink-0">
          <Zap className="w-5 h-5 text-white/60" />
        </button>
        <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
          <Plus className="w-5 h-5 text-white/60" />
        </button>
      </div>
    </div>
  )
}
