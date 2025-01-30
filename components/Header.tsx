import Link from "next/link"
import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header
      className="sticky top-0 bg-background/80 backdrop-blur-sm z-40 border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Romil Jain</h1>
        <nav>
          <ul className="flex space-x-4">
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="https://github.com/Romilj012" className="text-foreground hover:text-primary">
                <GitHub className="w-6 h-6" />
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="https://www.linkedin.com/in/romil-jain" className="text-foreground hover:text-primary">
                <Linkedin className="w-6 h-6" />
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="mailto:romilj01@gmail.com" className="text-foreground hover:text-primary">
                <Mail className="w-6 h-6" />
              </Link>
            </motion.li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

