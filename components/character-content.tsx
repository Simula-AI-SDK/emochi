"use client"

import { Play } from "lucide-react"

export function CharacterContent() {
  return (
    <div className="flex-1 flex flex-col justify-end px-4 pb-4">
      {/* Disclaimer */}
      <div className="bg-gray-500/40 backdrop-blur-sm rounded-lg px-3 py-2 mb-4 text-center w-fit mx-auto">
        <p className="text-white/80 text-xs">
          This character is an AI and is not a
        </p>
        <p className="text-white/80 text-xs">
          licensed health care professional.
        </p>
      </div>

      {/* Intro Card */}
      <div className="bg-black/75 backdrop-blur-sm rounded-2xl p-3 mb-4">
        <p className="text-white text-xs leading-relaxed">
          <span className="font-bold">Introduction</span>{" "}
          {"I've noticed you slipping away every night around the same time. You never tell me where you're going or what you do. It's like you're living a double life..."}
        </p>
      </div>

      {/* Message Bubble with Audio Player */}
      <div className="relative bg-black/75 backdrop-blur-sm rounded-2xl rounded-bl-md p-3 max-w-[85%]">
        {/* Floating Audio Player */}
        <div className="absolute -top-3 left-0 bg-[#4a4a4a] backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Play className="w-2.5 h-2.5 text-white fill-white" />
          <span className="text-white text-[10px] font-medium">8"</span>
        </div>
        <p className="text-white text-sm leading-relaxed">
          {"Why are you always so mysterious about your work? What exactly do you do that you can't tell me about? I'm starting to worry about you..."}
        </p>
      </div>
    </div>
  )
}
