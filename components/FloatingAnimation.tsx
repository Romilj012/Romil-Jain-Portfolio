"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingAnimationProps {
  children: ReactNode
  delay?: number
}

export default function FloatingAnimation({ children, delay = 0 }: FloatingAnimationProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

