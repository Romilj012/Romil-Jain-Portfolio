"use client"

import { useEffect, useRef } from "react"
import confetti from "canvas-confetti"

interface ConfettiProps {
  duration?: number
}

export default function Confetti({ duration = 5000 }: ConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const myConfetti = confetti.create(canvasRef.current, {
        resize: true,
        useWorker: false, // Disable worker to avoid transferControlToOffscreen
      })

      myConfetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })

      const timer = setTimeout(() => {
        myConfetti.reset()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [duration])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ width: "100vw", height: "100vh" }}
    />
  )
}

