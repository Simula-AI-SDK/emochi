"use client"

import React, { useEffect, useState } from "react"

export function SimulaProvider({ children }: { children: React.ReactNode }) {
  const apiKey = process.env.NEXT_PUBLIC_SIMULA_API_KEY
  const [Comp, setComp] = useState<React.ComponentType<{ apiKey: string; children: React.ReactNode }> | null>(null)

  useEffect(() => {
    if (!apiKey) return
    import("@simula/ads")
      .then((mod) => setComp(() => mod.SimulaProvider))
      .catch(() => {})
  }, [apiKey])

  if (!apiKey || !Comp) {
    return <>{children}</>
  }

  return (
    <Comp apiKey={apiKey}>
      {children}
    </Comp>
  )
}
