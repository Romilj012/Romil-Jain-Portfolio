// "use client"

// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"

// interface GuessTechGameProps {
//   onComplete: () => void
// }

// const technologies = [
//   { name: "React", hint: "A popular JavaScript library for building user interfaces" },
//   { name: "Python", hint: "A versatile programming language known for its simplicity and readability" },
//   { name: "Docker", hint: "A platform for developing, shipping, and running applications in containers" },
//   { name: "AWS", hint: "A comprehensive cloud computing platform provided by Amazon" },
//   { name: "TensorFlow", hint: "An open-source machine learning framework developed by Google" },
// ]

// export default function GuessTechGame({ onComplete }: GuessTechGameProps) {
//   const [currentTech, setCurrentTech] = useState(technologies[Math.floor(Math.random() * technologies.length)])
//   const [guess, setGuess] = useState("")
//   const [message, setMessage] = useState("")
//   const [score, setScore] = useState(0)

//   useEffect(() => {
//     if (score >= 3) {
//       onComplete()
//     }
//   }, [score, onComplete])

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (guess.toLowerCase() === currentTech.name.toLowerCase()) {
//       setMessage("Correct!")
//       setScore(score + 1)
//       setCurrentTech(technologies[Math.floor(Math.random() * technologies.length)])
//       setGuess("")
//     } else {
//       setMessage("Try again!")
//     }
//   }

//   return (
//     <div className="p-4">
//       <h3 className="text-xl font-bold mb-4">Guess the Technology</h3>
//       <p className="mb-4">Score: {score}/3</p>
//       <p className="mb-4">Hint: {currentTech.hint}</p>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           value={guess}
//           onChange={(e) => setGuess(e.target.value)}
//           className="w-full bg-zinc-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-600"
//           placeholder="Enter your guess"
//         />
//         <motion.button
//           type="submit"
//           className="w-full bg-zinc-700 px-4 py-2 rounded-lg hover:bg-zinc-600 transition-colors"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Submit
//         </motion.button>
//       </form>
//       {message && <p className="mt-4 text-center">{message}</p>}
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface GuessTechGameProps {
  onComplete: () => void
}

const technologies = [
  { name: "React", hint: "A popular JavaScript library for building user interfaces" },
  { name: "Python", hint: "A versatile programming language known for its simplicity and readability" },
  { name: "Docker", hint: "A platform for developing, shipping, and running applications in containers" },
  { name: "AWS", hint: "A comprehensive cloud computing platform provided by Amazon" },
  { name: "TensorFlow", hint: "An open-source machine learning framework developed by Google" },
]

export default function GuessTechGame({ onComplete }: GuessTechGameProps) {
  const [currentTech, setCurrentTech] = useState({ name: "", hint: "" })
  const [guess, setGuess] = useState("")
  const [message, setMessage] = useState("")
  const [score, setScore] = useState(0)
  const [usedTechs, setUsedTechs] = useState<string[]>([])
  const [isGameActive, setIsGameActive] = useState(true)

  useEffect(() => {
    startGame()
  }, [])

  useEffect(() => {
    if (score >= 3) {
      setIsGameActive(false)
      onComplete()
    }
  }, [score, onComplete])

  const startGame = () => {
    setUsedTechs([])
    setScore(0)
    setGuess("")
    setMessage("")
    getNewTech()
    setIsGameActive(true)
  }

  const getNewTech = () => {
    const availableTechs = technologies.filter(tech => !usedTechs.includes(tech.name))
    if (availableTechs.length > 0) {
      const randomTech = availableTechs[Math.floor(Math.random() * availableTechs.length)]
      setCurrentTech(randomTech)
      setUsedTechs(prev => [...prev, randomTech.name])
    } else {
      setCurrentTech({ name: "", hint: "No more technologies available" })
      setIsGameActive(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isGameActive) return

    if (guess.toLowerCase() === currentTech.name.toLowerCase()) {
      setMessage("Correct!")
      setScore(prev => prev + 1)
      setGuess("")
      getNewTech()
    } else {
      setMessage("Try again!")
    }
  }

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">Guess the Technology</h3>
      <p className="mb-4">Score: {score}/3</p>
      <p className="mb-4">Hint: {currentTech.hint}</p>
      
      {isGameActive ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="w-full bg-zinc-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-600"
            placeholder="Enter your guess"
          />
          <motion.button
            type="submit"
            className="w-full bg-zinc-700 px-4 py-2 rounded-lg hover:bg-zinc-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>
      ) : (
        <motion.button
          onClick={startGame}
          className="w-full bg-zinc-700 px-4 py-2 rounded-lg hover:bg-zinc-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Play Again
        </motion.button>
      )}

      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  )
}