"use client"

import { Plus, Menu } from "lucide-react"

export function CharacterHeader() {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden border-2 border-white/20">
          <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-yellow-400" />
        </div>

        {/* Character Info */}
        <div className="flex flex-col">
          <span className="text-white font-semibold text-sm truncate max-w-[140px]">MBTI Career Pe...</span>
          <span className="text-white/60 text-xs">4,682 Connectors</span>
          <span className="text-white/50 text-xs">AI-generated</span>
        </div>

        {/* Action Buttons */}
        <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center ml-2">
          <Plus className="w-5 h-5 text-white" />
        </button>

        {/* Message Icon with Badge */}
        <div className="relative">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="absolute -top-1 -right-1 bg-transparent text-white text-xs font-bold">3</span>
        </div>
      </div>

      {/* Menu Button */}
      <button className="p-2">
        <Menu className="w-6 h-6 text-white" />
      </button>
    </div>
  )
}
