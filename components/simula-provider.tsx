"use client"

import React, { useEffect, useState } from "react"

let Provider: React.ComponentType<{ apiKey: string; children: React.ReactNode }> | null = null

try {
  Provider = require("@simula/ads").SimulaProvider
} catch {
  // Package not available
}

export function SimulaProvider({ children }: { children: React.ReactNode }) {
  const apiKey = process.env.NEXT_PUBLIC_SIMULA_API_KEY

  if (!apiKey || !Provider) {
    return <>{children}</>
  }

  return (
    <Provider apiKey={apiKey}>
      {children}
    </Provider>
  )
}
