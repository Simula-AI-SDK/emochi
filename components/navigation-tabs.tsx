"use client"

import { Search } from "lucide-react"

export function NavigationTabs() {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-4">
        <button className="text-white/60 text-base font-medium">WorkShop</button>
        <button className="text-white/60 text-base font-medium">Explore</button>
        <button className="text-white text-base font-medium border-b-2 border-white pb-0.5">Featured</button>
      </div>
      <button className="p-2">
        <Search className="w-6 h-6 text-white" />
      </button>
    </div>
  )
}
