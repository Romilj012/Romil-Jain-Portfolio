"use client"

import { motion } from "framer-motion"
import { useUnlock } from "@/contexts/UnlockContext"
import Confetti from "./Confetti"
import { useState } from "react"
import UnscrambleGame from "./games/UnscrambleGame"
import { Download } from "lucide-react"

export default function FinalLevel() {
  const { unlockedSections, unlockSection } = useUnlock()
  const [showConfetti, setShowConfetti] = useState(false)

  const handleGameComplete = () => {
    unlockSection("final")
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000)
  }

  if (!unlockedSections.includes("final")) {
    return (
      <section className="min-h-screen py-20 px-8 flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Final Challenge</h2>
        <UnscrambleGame onComplete={handleGameComplete} />
      </section>
    )
  }

  return (
    <section className="min-h-screen py-20 px-8 flex flex-col items-center justify-center">
      {showConfetti && <Confetti />}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        Congratulations!
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl text-center mb-8"
      >
        You've unlocked all sections!
      </motion.p>
      <motion.a
        href="/api/download-resume"
        className="inline-flex items-center px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Download className="w-5 h-5 mr-2" />
        Download Resume
      </motion.a>
    </section>
  )
}

