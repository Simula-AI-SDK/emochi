"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createPortal } from "react-dom"
import { Pencil, Settings, Crown, Gamepad2, Play, X, Sparkles, UserPlus, ChevronRight, MessageCircle, Video } from "lucide-react"


const CHARACTER = {
  name: "Anna",
  id: "anna-001",
  image: "https://storage.googleapis.com/simula-public/assets/imgs/Screenshot%202026-02-06%20at%2012.13.53%E2%80%AFAM.png",
  description: "A mysterious girl who always seems curious about where you go at night.",
}

const chaiGameTheme = {
  backgroundColor: "rgba(41, 37, 36, 0.98)",
  headerColor: "rgba(28, 25, 23, 0.95)",
  borderColor: "rgba(63, 63, 70, 0.4)",
  titleFont: "Geist, system-ui, sans-serif",
  secondaryFont: "Geist, system-ui, sans-serif",
  titleFontColor: "#FAFAF9",
  secondaryFontColor: "#A8A29E",
  iconCornerRadius: 12,
}

export function MessageInput() {
  const router = useRouter()
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [showShorts, setShowShorts] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const simulaMessages = [
    { role: "assistant" as const, content: "I've noticed you slipping away every night around the same time..." },
    { role: "assistant" as const, content: "Why are you always so mysterious about your work?" },
  ]

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
        {/* Character Info Row */}
        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex flex-col">
            <button className="flex items-center gap-0.5">
              <span className="text-white font-bold text-base">{CHARACTER.name}</span>
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
            <span className="text-white/40 text-xs">@Ki- kayon</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-xl bg-[#3A3A3A] flex items-center justify-center">
              <UserPlus className="w-5 h-5 text-white" />
            </button>
            <button className="w-10 h-10 rounded-xl bg-[#3A3A3A] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4.5 12.5H7.5c0-2.33 3-3.5 4.5-3.5s4.5 1.17 4.5 3.5z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Input Bar */}
        <div className="flex items-center gap-2 px-3 py-2">
          <div className="flex-1 bg-[#2A2A2A] rounded-full flex items-center px-4 py-2.5 gap-2">
            <input
              type="text"
              placeholder="Message Anna"
              className="flex-1 bg-transparent text-white placeholder-white/40 outline-none text-sm min-w-0"
            />
            <button className="flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white/40" />
            </button>
            <button className="flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white/40">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="currentColor"/>
                <path d="M12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4.5 8.5c0 2.33 3 3.5 4.5 3.5s4.5-1.17 4.5-3.5H7.5z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-around px-6 py-2.5">
          <button className="flex flex-col items-center gap-1">
            <MessageCircle className="w-5 h-5 text-white" />
            <span className="text-white text-[10px]">Chat</span>
          </button>
          <button 
            className="flex flex-col items-center gap-1"
            onClick={() => router.push("/games")}
          >
            <Gamepad2 className="w-5 h-5 text-white/50" />
            <span className="text-white/50 text-[10px]">Games</span>
          </button>
          <button 
            className="flex flex-col items-center gap-1"
            onClick={() => setShowShorts(true)}
          >
            <Video className="w-5 h-5 text-white/50" />
            <span className="text-white/50 text-[10px]">Shorts</span>
          </button>
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
