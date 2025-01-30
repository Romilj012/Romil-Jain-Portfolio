import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      className="bg-secondary text-secondary-foreground py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Romil Jain. All rights reserved.</p>
      </div>
    </motion.footer>
  )
}

