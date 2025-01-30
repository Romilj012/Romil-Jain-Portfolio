// "use client"

// import type React from "react"
// import { createContext, useState, useContext } from "react"

// interface UnlockContextType {
//   unlockedSections: string[]
//   unlockSection: (section: string) => void
// }

// const UnlockContext = createContext<UnlockContextType | undefined>(undefined)

// export function UnlockProvider({ children }: { children: React.ReactNode }) {
//   const [unlockedSections, setUnlockedSections] = useState<string[]>(["hero"])

//   const unlockSection = (section: string) => {
//     setUnlockedSections((prev) => [...prev, section])
//   }

//   return <UnlockContext.Provider value={{ unlockedSections, unlockSection }}>{children}</UnlockContext.Provider>
// }

// export function useUnlock() {
//   const context = useContext(UnlockContext)
//   if (context === undefined) {
//     throw new Error("useUnlock must be used within a UnlockProvider")
//   }
//   return context
// }

"use client"

import React, { createContext, useState, useContext } from "react"

interface UnlockContextType {
  unlockedSections: string[]
  unlockSection: (section: string) => void
}

const UnlockContext = createContext<UnlockContextType | undefined>(undefined)

export function UnlockProvider({ children }: { children: React.ReactNode }) {
  const [unlockedSections, setUnlockedSections] = useState<string[]>(["hero"])

  const unlockSection = (section: string) => {
    setUnlockedSections((prev) => [...prev, section])
  }

  return <UnlockContext.Provider value={{ unlockedSections, unlockSection }}>{children}</UnlockContext.Provider>
}

export function useUnlock() {
  const context = useContext(UnlockContext)
  if (context === undefined) {
    throw new Error("useUnlock must be used within a UnlockProvider")
  }
  return context
}

