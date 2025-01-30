"use client"

import { motion } from "framer-motion"
import TypingGame from "./games/TypingGame"
import { useUnlock } from "@/contexts/UnlockContext"
import Confetti from "./Confetti"
import { useState } from "react"
import { Download } from "lucide-react"

export default function Experience() {
  const { unlockedSections, unlockSection } = useUnlock()
  const [showConfetti, setShowConfetti] = useState(false)

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "PMI",
      location: "New York, USA",
      period: "May 2023 – May 2024",
      description:
        "Led NLP and machine learning initiatives, achieving significant improvements in classification accuracy and data pipeline efficiency.",
    },
    {
      title: "Software Engineer",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      period: "Oct 2020 – Jul 2022",
      description:
        "Optimized database performance and led legacy system modernization, resulting in substantial improvements in processing time and efficiency.",
    },
    {
      title: "Software Engineer Intern",
      company: "Login2Xplore",
      location: "Indore, India",
      period: "Jan 2019 – May 2019",
      description: "Developed cross-platform mobile applications and implemented efficient search algorithms.",
    },
  ]

  const handleGameComplete = () => {
    unlockSection("experience")
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000) // Hide confetti after 5 seconds
  }

  if (!unlockedSections.includes("experience")) {
    return (
      <section className="min-h-screen py-20 px-8 flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Unlock Experience</h2>
        <TypingGame onComplete={handleGameComplete} />
      </section>
    )
  }

  return (
    <section className="min-h-screen py-20 px-8">
      {showConfetti && <Confetti />}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        Experience
      </motion.h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="border-l-2 border-zinc-800 pl-8 relative"
          >
            <div className="absolute w-3 h-3 bg-zinc-800 rounded-full -left-[7px] top-2" />
            <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
            <p className="text-xl text-gray-400 mb-2">{exp.company}</p>
            <p className="text-gray-500 mb-4">
              {exp.location} • {exp.period}
            </p>
            <p className="text-gray-400">{exp.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <p className="text-xl text-green-400 mb-4">Level Complete!</p>
        <p className="text-lg mb-8">Scroll to move to the next level</p>
      </motion.div>
    </section>
  )
}

