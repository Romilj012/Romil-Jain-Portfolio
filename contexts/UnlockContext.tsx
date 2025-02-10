"use client"

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

// "use client"

// import React, { createContext, useState, useContext } from "react"

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

import { createContext, useContext, useState, ReactNode } from "react";

interface UnlockContextProps {
  unlockedSections: string[];
  setUnlockedSections: (sections: string[]) => void;
  unlockSection: (section: string) => void;
}

const UnlockContext = createContext<UnlockContextProps | undefined>(undefined);

export const UnlockProvider = ({ children }: { children: ReactNode }) => {
  const [unlockedSections, setUnlockedSections] = useState<string[]>([]);

  const unlockSection = (section: string) => {
    setUnlockedSections((prevSections) => [...prevSections, section]);
  };

  return (
    <UnlockContext.Provider value={{ unlockedSections, setUnlockedSections, unlockSection }}>
      {children}
    </UnlockContext.Provider>
  );
};

export const useUnlock = () => {
  const context = useContext(UnlockContext);
  if (!context) {
    throw new Error("useUnlock must be used within an UnlockProvider");
  }
  return context;
};