"use client"

import React from "react"

import { SimulaProvider as Provider } from "@simula/ads"

export function SimulaProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider apiKey={process.env.NEXT_PUBLIC_SIMULA_API_KEY || ""}>
      {children}
    </Provider>
  )
}
