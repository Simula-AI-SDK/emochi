"use client"

import { Home, MessageCircle, Search, User, PlusSquare } from "lucide-react"

export function BottomNavigation() {
  return (
    <div className="flex items-center justify-around px-4 py-2 bg-black/50 backdrop-blur-sm">
      {/* Home - Active */}
      <button className="flex flex-col items-center gap-1 min-w-[60px]">
        <Home className="w-5 h-5 text-white fill-white" />
        <span className="text-white text-xs font-medium">Home</span>
      </button>

      {/* Inbox */}
      <button className="flex flex-col items-center gap-1 min-w-[60px]">
        <MessageCircle className="w-6 h-6 text-white/60" />
        <span className="text-white/60 text-xs">Inbox</span>
      </button>

      {/* Create */}
      <button className="flex flex-col items-center gap-1 min-w-[60px]">
        <div className="w-6 h-6 border-2 border-white/60 rounded flex items-center justify-center">
          <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
        </div>
        <span className="text-white/60 text-xs">Create</span>
      </button>

      {/* Search */}
      <button className="flex flex-col items-center gap-1 min-w-[60px]">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
        <span className="text-white/60 text-xs">Search</span>
      </button>

      {/* Profile with notification dot */}
      <button className="flex flex-col items-center gap-1 min-w-[60px] relative">
        <div className="relative">
          <User className="w-6 h-6 text-white/60" />
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
        </div>
        <span className="text-white/60 text-xs">Profile</span>
      </button>
    </div>
  )
}
