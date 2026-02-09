"use client"

import { useRouter } from "next/navigation"
import { Gamepad2, MessageCircle, Video, ArrowLeft, Dice1, Fish, TreePalm, Club, CircleDot, Merge, Dog, ArrowUpDown } from "lucide-react"

const GAMES = [
  {
    name: "Monopoly Run",
    description: "Race to build your empire",
    icon: Dice1,
    color: "#E85D75",
  },
  {
    name: "Flappy Fish",
    description: "Swim through the obstacles",
    icon: Fish,
    color: "#0984E3",
  },
  {
    name: "Apes Tower Defense",
    description: "Defend your territory from invaders",
    icon: TreePalm,
    color: "#00B894",
  },
  {
    name: "Black Jack",
    description: "Hit or stand to beat the dealer",
    icon: Club,
    color: "#2D3436",
  },
  {
    name: "Roulette",
    description: "Place your bets and spin the wheel",
    icon: CircleDot,
    color: "#D63031",
  },
  {
    name: "Merge Mogul",
    description: "Combine and grow your collection",
    icon: Merge,
    color: "#6C5CE7",
  },
  {
    name: "Boop the Snoot",
    description: "Tap the cute noses for points",
    icon: Dog,
    color: "#FDCB6E",
  },
  {
    name: "Sort Express",
    description: "Sort items at lightning speed",
    icon: ArrowUpDown,
    color: "#E84393",
  },
]

export default function GamesPage() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen max-w-[430px] mx-auto bg-[#111] text-white flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-6 pb-4">
        <button
          onClick={() => router.push("/")}
          className="w-9 h-9 rounded-full bg-[#2A2A2A] flex items-center justify-center"
        >
          <ArrowLeft className="w-4 h-4 text-white" />
        </button>
        <div>
          <h1 className="text-white font-bold text-lg">Mini Games</h1>
          <p className="text-white/40 text-xs">Play with Anna</p>
        </div>
      </div>

      {/* Games Grid */}
      <div className="flex-1 overflow-y-auto px-4 pb-24">
        <div className="grid grid-cols-2 gap-3">
          {GAMES.map((game) => (
            <button
              key={game.name}
              className="flex flex-col items-start gap-3 bg-[#1A1A1A] rounded-2xl p-4 text-left transition-transform active:scale-95"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${game.color}20` }}
              >
                <game.icon className="w-5 h-5" style={{ color: game.color }} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{game.name}</p>
                <p className="text-white/40 text-xs mt-0.5">{game.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-[#111]/90 backdrop-blur-xl border-t border-white/5">
        <div className="flex items-center justify-around px-6 py-2.5">
          <button
            className="flex flex-col items-center gap-1"
            onClick={() => router.push("/")}
          >
            <MessageCircle className="w-5 h-5 text-white/50" />
            <span className="text-white/50 text-[10px]">Chat</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Gamepad2 className="w-5 h-5 text-white" />
            <span className="text-white text-[10px]">Games</span>
          </button>
          <button
            className="flex flex-col items-center gap-1"
            onClick={() => router.push("/?shorts=1")}
          >
            <Video className="w-5 h-5 text-white/50" />
            <span className="text-white/50 text-[10px]">Shorts</span>
          </button>
        </div>
      </div>
    </div>
  )
}
