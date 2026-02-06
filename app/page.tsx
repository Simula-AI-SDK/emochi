"use client"

import { CharacterContent } from "@/components/character-content"
import { MessageInput } from "@/components/message-input"

export default function TalkieApp() {
  return (
    <div className="relative min-h-screen max-w-[430px] mx-auto bg-black text-white overflow-hidden flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/chat-background.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col h-screen">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto flex flex-col justify-end">
          <CharacterContent />
        </div>

        {/* Bottom Dark Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

        <div className="relative z-[5]">
          <MessageInput />
        </div>
      </div>
    </div>
  )
}
