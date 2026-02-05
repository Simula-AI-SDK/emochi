"use client"

import { Mic, Zap, Plus } from "lucide-react"

export function MessageInput() {
  return (
    <div className="flex items-center gap-2 px-3 py-2">
      {/* Logo Button */}
      <button className="w-10 h-10 rounded-full bg-[#3A3A3A] flex items-center justify-center flex-shrink-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/250.jpg"
          alt="Talkie logo"
          className="w-full h-full object-cover grayscale opacity-40 contrast-50"
        />
      </button>

      {/* Input Field */}
      <div className="flex-1 bg-[#3A3A3A] rounded-full flex items-center px-3 py-2 gap-2">
        <Mic className="w-4 h-4 text-white/60 flex-shrink-0" />
        <input
          type="text"
          placeholder="Message MBTI..."
          className="flex-1 bg-transparent text-white placeholder-white/50 outline-none text-sm min-w-0"
        />
        <button className="flex-shrink-0">
          <Zap className="w-4 h-4 text-white/60" />
        </button>
        <button className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
          <Plus className="w-4 h-4 text-white/60" />
        </button>
      </div>
    </div>
  )
}
