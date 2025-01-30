"use client"

import { motion } from "framer-motion"
import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section className="min-h-screen py-20 px-8 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h2>
        <p className="text-gray-400 text-xl mb-12">
          I'm always open to new opportunities and interesting projects. Feel free to reach out if you'd like to
          connect!
        </p>
        <div className="flex justify-center space-x-8">
          <motion.a
            href="https://github.com/Romilj012"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-gray-300"
          >
            <GitHub className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/romil-jain"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-gray-300"
          >
            <Linkedin className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="mailto:romilj01@gmail.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-gray-300"
          >
            <Mail className="w-8 h-8" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

