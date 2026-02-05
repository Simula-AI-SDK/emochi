"use client"

import { NavigationTabs } from "@/components/navigation-tabs"
import { CharacterHeader } from "@/components/character-header"
import { CharacterContent } from "@/components/character-content"
import { MessageInput } from "@/components/message-input"
import { BottomNavigation } from "@/components/bottom-navigation"
import { StatusBar } from "@/components/status-bar"

export default function TalkieApp() {
  return (
    <div className="relative min-h-screen max-w-[430px] mx-auto bg-black text-white overflow-hidden flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/character-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-screen">
        {/* Fixed Transparent Header */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <NavigationTabs />
          <CharacterHeader />
        </div>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pt-28 flex flex-col justify-end">
          <CharacterContent />
        </div>

        {/* Bottom Dark Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

        <div className="relative z-10">
          <MessageInput />
          <BottomNavigation />
          
          {/* Home Indicator */}
          <div className="flex justify-center pb-2 pt-1">
            <div className="w-32 h-1 bg-white rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
