"use client"

import { Plus, Menu } from "lucide-react"

export function CharacterHeader() {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      {/* Left side - Pill Container and Chat Icon */}
      <div className="flex items-center gap-2">
        {/* Pill Container */}
        <div className="flex items-center gap-1.5 bg-black/40 rounded-full px-1.5 py-1">
          {/* Avatar */}
          <div className="w-6 h-6 rounded-full bg-gray-600 overflow-hidden border border-white/20 flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-yellow-400" />
          </div>

          {/* Character Info */}
          <div className="flex flex-col gap-1">
            <span className="text-white font-semibold text-[10px] truncate max-w-[80px] leading-none">MBTI Career Pe...</span>
            <span className="text-white/60 text-[8px] leading-none">4,682 Connectors</span>
          </div>

          {/* Plus Button */}
          <button className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <Plus className="w-3 h-3 text-white" />
          </button>
        </div>

        {/* Message Icon with Badge - Circle Container */}
        <div className="relative w-8 h-8 rounded-full bg-black/40 flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="absolute -top-0.5 -right-0.5 text-white text-[10px] font-bold">3</span>
        </div>
      </div>

      {/* Menu Button - Pill extending off screen */}
      <div className="bg-black/40 rounded-l-full pl-2 py-1.5 pr-5 -mr-5">
        <Menu className="w-5 h-5 text-white" />
      </div>
    </div>
  )
}
