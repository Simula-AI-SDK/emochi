"use client"

import { StatusBar } from "@/components/status-bar"
import { NavigationTabs } from "@/components/navigation-tabs"
import { CharacterHeader } from "@/components/character-header"
import { CharacterContent } from "@/components/character-content"
import { MessageInput } from "@/components/message-input"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function TalkieApp() {
  return (
    <div className="relative min-h-screen max-w-[430px] mx-auto bg-black text-white overflow-hidden flex flex-col">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900">
        <div className="absolute inset-0 bg-[url('/placeholder-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-screen">
        {/* Fixed Transparent Header */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <StatusBar />
          <NavigationTabs />
          <CharacterHeader />
        </div>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pt-28">
          <CharacterContent />
        </div>

        <MessageInput />
        <BottomNavigation />
        
        {/* Home Indicator */}
        <div className="flex justify-center pb-2 pt-1 bg-black/50">
          <div className="w-32 h-1 bg-white rounded-full" />
        </div>
      </div>
    </div>
  )
}
