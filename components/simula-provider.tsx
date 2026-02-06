"use client"

import React from "react"

export function SimulaProvider({ children }: { children: React.ReactNode }) {
  // @simula/ads is not installed - render children directly
  return <>{children}</>
}
