"use client"

import { Play } from "lucide-react"

export function CharacterContent() {
  return (
    <div className="flex-1 flex flex-col justify-end px-4 pb-4">
      {/* Disclaimer */}
      <div className="text-center mb-4">
        <p className="text-white/70 text-sm">
          This character is an AI and is not a
        </p>
        <p className="text-white/70 text-sm">
          licensed health care professional.
        </p>
      </div>

      {/* Intro Card */}
      <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-3 mb-4">
        <p className="text-white text-xs leading-relaxed">
          <span className="font-bold">Intro</span>{" "}
          I am the MBTI Career Personality Test, your personal career development guide. I specialize in revealing your personality traits through a series of questions, helping you understand yourself bette...
        </p>
      </div>

      {/* Message Bubble with Audio Player */}
      <div className="relative bg-black/60 backdrop-blur-sm rounded-2xl rounded-bl-md p-3 max-w-[85%]">
        {/* Floating Audio Player */}
        <div className="absolute -top-3 left-0 bg-[#4a4a4a] backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Play className="w-2.5 h-2.5 text-white fill-white" />
          <span className="text-white text-[10px] font-medium">8"</span>
        </div>
        <p className="text-white text-sm leading-relaxed">
          I'm the workplace personality detective, so be honest when answering the following questions, and let's begin this journey of self-discovery!
        </p>
      </div>
    </div>
  )
}
