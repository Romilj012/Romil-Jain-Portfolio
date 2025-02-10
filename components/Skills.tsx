// "use client"

// import { motion } from "framer-motion"
// import MemoryGame from "./games/MemoryGame"
// import { useUnlock } from "@/contexts/UnlockContext"
// import Confetti from "./Confetti"
// import { useState } from "react"

// export default function Skills() {
//   const { unlockedSections, unlockSection } = useUnlock()
//   const [showConfetti, setShowConfetti] = useState(false)

//   const skills = {
//     "Programming Languages": ["Python", "JavaScript", "Java", "HTML5", "Swift", "SwiftUI", "C/C++", "COBOL"],
//     "Frameworks & Libraries": [
//       "Scikit-learn",
//       "Keras",
//       "spaCy",
//       "NLTK",
//       "PyTorch",
//       "React.js",
//       "Node.js",
//       "Django",
//       "Spring",
//       "FastAPI",
//       "SpringBoot",
//     ],
//     "Cloud & DevOps": ["AWS S3", "AWS Glue", "AWS Redshift", "AWS Lambda", "Docker", "Kubernetes"],
//     Databases: ["SQL", "Google Firebase", "DB2", "MySQL", "Elasticsearch", "MongoDB", "T-SQL"],
//   }

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//     },
//   }

//   const handleGameComplete = () => {
//     unlockSection("skills")
//     setShowConfetti(true)
//     setTimeout(() => setShowConfetti(false), 5000) // Hide confetti after 5 seconds
//   }

//   if (!unlockedSections.includes("skills")) {
//     return (
//       <section className="min-h-screen py-20 px-8 flex flex-col items-center justify-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-12">Unlock Skills</h2>
//         <MemoryGame onComplete={handleGameComplete} />
//       </section>
//     )
//   }

//   return (
//     <section className="min-h-screen py-20 px-8">
//       {showConfetti && <Confetti />}
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-4xl md:text-5xl font-bold mb-12"
//       >
//         Skills & Technologies
//       </motion.h2>
//       <div className="grid md:grid-cols-2 gap-8">
//         {Object.entries(skills).map(([category, items]) => (
//           <motion.div
//             key={category}
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="bg-zinc-900/50 p-6 rounded-lg backdrop-blur-sm"
//           >
//             <h3 className="text-xl font-semibold mb-4">{category}</h3>
//             <div className="flex flex-wrap gap-2">
//               {items.map((skill, index) => (
//                 <motion.span
//                   key={index}
//                   variants={itemVariants}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-zinc-800 px-3 py-1 rounded-full text-sm hover:bg-zinc-700 transition-colors"
//                 >
//                   {skill}
//                 </motion.span>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//         className="mt-12 text-center"
//       >
//         <p className="text-xl text-green-400 mb-4">Level Complete!</p>
//         <p className="text-lg">Scroll to move to the next level</p>
//       </motion.div>
//     </section>
//   )
// }

"use client"

import { motion } from "framer-motion"
import MemoryGame from "./games/MemoryGame"
import { useUnlock } from "@/contexts/UnlockContext"
import Confetti from "./Confetti"
import { useState } from "react"

export default function Skills() {
  const { unlockedSections, unlockSection } = useUnlock()
  const [showConfetti, setShowConfetti] = useState(false)

  const skills = {
    "Programming Languages": ["Python", "JavaScript", "Java", "HTML5", "Swift", "SwiftUI", "C/C++", "COBOL"],
    "Frameworks & Libraries": [
      "Scikit-learn",
      "Keras",
      "spaCy",
      "NLTK",
      "PyTorch",
      "React.js",
      "Node.js",
      "Django",
      "Spring",
      "FastAPI",
      "SpringBoot",
    ],
    "Cloud & DevOps": ["AWS S3", "AWS Glue", "AWS Redshift", "AWS Lambda", "Docker", "Kubernetes"],
    Databases: ["SQL", "Google Firebase", "DB2", "MySQL", "Elasticsearch", "MongoDB", "T-SQL"],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const handleGameComplete = () => {
    unlockSection("skills")
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000) // Hide confetti after 5 seconds
  }

  if (!unlockedSections.includes("skills")) {
    return (
      <section className="min-h-screen py-20 px-8 flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Unlock Skills</h2>
        <MemoryGame onComplete={handleGameComplete} />
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
        Skills & Technologies
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-zinc-900/50 p-6 rounded-lg backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-zinc-800 px-3 py-1 rounded-full text-sm hover:bg-zinc-700 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
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
        <p className="text-lg">Scroll to move to the next level</p>
      </motion.div>
    </section>
  )
}