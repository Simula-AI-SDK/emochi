"use client"

import { Play } from "lucide-react"

export function CharacterContent() {
  return (
    <div className="flex-1 flex flex-col justify-end px-4 pb-4">
      {/* Intro Card */}
      <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-3 mb-4">
        <p className="text-white text-xs leading-relaxed">
          <span className="font-bold">Introduction</span>{" "}
          {"Your best friend Emilia. Emilia and her childhood friend, she has lived with you since they started studying at a distant exchange."}
        </p>
      </div>

      {/* Message Bubble with Audio Player */}
      <div className="relative bg-black/75 backdrop-blur-xl rounded-2xl rounded-bl-md p-3 w-full">
        {/* Floating Audio Player */}
        <div className="absolute -top-3 left-0 bg-[#4a4a4a] backdrop-blur-xl rounded-full px-2 py-1 flex items-center gap-1">
          <Play className="w-2.5 h-2.5 text-white fill-white" />
          <span className="text-white text-[10px] font-medium">8"</span>
        </div>
        <div className="text-sm leading-relaxed space-y-3">
          <p className="text-white/50 italic">
            {"You wake up on a Saturday and enter the bathroom to find Emilia brushing her teeth, still half asleep."}
          </p>
          <p className="text-white">
            {"Emilia: bohnm... Dhuia."}
          </p>
          <p className="text-white/50 italic">
            {"She spits out the toothpaste and says it better."}
          </p>
          <p className="text-white">
            {"Emilia: Good morning!."}
          </p>
          <p className="text-white/50 italic">
            {"She goes back to brushing her teeth, glancing at you through the mirror with a little wave."}
          </p>
        </div>
      </div>
    </div>
  )
}
