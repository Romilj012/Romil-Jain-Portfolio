"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { GitlabIcon as GitHub } from "lucide-react"
import FloatingAnimation from "./FloatingAnimation"
import { useUnlock } from "@/contexts/UnlockContext"
import Confetti from "./Confetti"
import { useState } from "react"
import GuessTechGame from "./games/GuessTechGame"

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { unlockedSections, unlockSection } = useUnlock()
  const [showConfetti, setShowConfetti] = useState(false)

  const projects = [
    {
      title: "Template Management System",
      description: "AI-Powered collaboration platform with FastAPI & React",
      image:
        "https://sjc.microlink.io/qYVe1sKiohtc1qgDoHhDzdeNdGF7pEwGzn76ciYMY2kDyHMZ8oL_f15uqaBIe37mItLhkPuE_eNb4rY_gLUeFA.jpeg",
      github: "https://github.com/Romilj012/Template-Management-System",
      tech: ["Python", "FastAPI", "React", "AI"],
    },
    {
      title: "AWS Data Pipeline Builder",
      description: "ETL pipeline for customer data integration",
      image:
        "https://sjc.microlink.io/qYVe1sKiohtc1qgDoHhDzdeNdGF7pEwGzn76ciYMY2kDyHMZ8oL_f15uqaBIe37mItLhkPuE_eNb4rY_gLUeFA.jpeg",
      github: "https://github.com/Romilj012/AWS-Data-Pipeline-Builder",
      tech: ["AWS", "Python", "SQL"],
    },
    {
      title: "KubeConnect",
      description: "Microservices deployment with Kubernetes",
      image:
        "https://sjc.microlink.io/qYVe1sKiohtc1qgDoHhDzdeNdGF7pEwGzn76ciYMY2kDyHMZ8oL_f15uqaBIe37mItLhkPuE_eNb4rY_gLUeFA.jpeg",
      github: "https://github.com/Romilj012/KubeConnect",
      tech: ["Kubernetes", "Docker", "Node.js"],
    },
    {
      title: "CodeVoice",
      description: "Speech-to-code solution for visually impaired developers",
      image:
        "https://sjc.microlink.io/qYVe1sKiohtc1qgDoHhDzdeNdGF7pEwGzn76ciYMY2kDyHMZ8oL_f15uqaBIe37mItLhkPuE_eNb4rY_gLUeFA.jpeg",
      github: "https://github.com/Romilj012/CodeVoice",
      tech: ["Python", "Java"],
    },
  ]

  const handleGameComplete = () => {
    unlockSection("projects")
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000)
  }

  if (!unlockedSections.includes("projects")) {
    return (
      <section className="min-h-screen py-20 px-8 flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Unlock Projects</h2>
        <GuessTechGame onComplete={handleGameComplete} />
      </section>
    )
  }

  return (
    <section className="min-h-screen py-20">
      {showConfetti && <Confetti />}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-12 px-8"
      >
        Selected Projects
      </motion.h2>
      <div ref={containerRef} className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory">
        {projects.map((project, index) => (
          <FloatingAnimation key={index} delay={index * 0.2}>
            <motion.div
              className="min-w-[80vw] md:min-w-[40vw] h-[60vh] snap-center p-8"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="bg-zinc-900 h-full rounded-lg p-8 hover:bg-zinc-800 transition-colors">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="bg-zinc-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-gray-300"
                >
                  <GitHub className="w-5 h-5 mr-2" />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          </FloatingAnimation>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center px-8"
      >
        <p className="text-xl text-green-400 mb-4">Level Complete!</p>
        <p className="text-lg">Scroll to move to the final level</p>
      </motion.div>
    </section>
  )
}

