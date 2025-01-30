"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} className="h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div style={{ y, opacity }} className="relative z-10 text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1728749850266-V8gb1RCUDh8DxmZWHXBc2S48iPq2DU.jpeg"
            alt="Romil Jain"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Romil Jain
        </motion.h1>
        <motion.h2
          className="text-xl md:text-2xl text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Software Engineer specializing in AI & Full-Stack Development
        </motion.h2>
      </motion.div>
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="animate-bounce">
          <p className="text-sm text-gray-400">Scroll to explore</p>
        </div>
      </motion.div>
    </section>
  )
}

