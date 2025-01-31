// "use client"

// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"

// interface UnscrambleGameProps {
//   onComplete: () => void
// }

// const words = [
//   { original: "RESUME", scrambled: "EMSURE" },
//   { original: "CAREER", scrambled: "RACEER" },
//   { original: "SKILLS", scrambled: "LSLIKS" },
//   { original: "PORTFOLIO", scrambled: "OFLOPORTI" },
//   { original: "EXPERIENCE", scrambled: "EPERXCEIEN" },
// ]

// export default function UnscrambleGame({ onComplete }: UnscrambleGameProps) {
//   const [currentWord, setCurrentWord] = useState(words[Math.floor(Math.random() * words.length)])
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
//     if (guess.toLowerCase() === currentWord.original.toLowerCase()) {
//       setMessage("Correct!")
//       setScore(score + 1)
//       setCurrentWord(words[Math.floor(Math.random() * words.length)])
//       setGuess("")
//     } else {
//       setMessage("Try again!")
//     }
//   }

//   return (
//     <div className="p-4">
//       <h3 className="text-xl font-bold mb-4">Unscramble the Word</h3>
//       <p className="mb-4">Score: {score}/3</p>
//       <p className="mb-4">Unscramble: {currentWord.scrambled}</p>
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

interface UnscrambleGameProps {
  onComplete: () => void
}

const words = [
  { original: "RESUME", scrambled: "EMSURE" },
  { original: "CAREER", scrambled: "RACEER" },
  { original: "SKILLS", scrambled: "LSLIKS" },
  { original: "PORTFOLIO", scrambled: "OFLOPORTI" },
  { original: "EXPERIENCE", scrambled: "EPERXCEIEN" },
]

export default function UnscrambleGame({ onComplete }: UnscrambleGameProps) {
  const [currentWord, setCurrentWord] = useState({ original: "", scrambled: "" })
  const [guess, setGuess] = useState("")
  const [message, setMessage] = useState("")
  const [score, setScore] = useState(0)
  const [usedWords, setUsedWords] = useState<string[]>([])
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
    setUsedWords([])
    setScore(0)
    setGuess("")
    setMessage("")
    getNewWord()
    setIsGameActive(true)
  }

  const getNewWord = () => {
    const availableWords = words.filter(word => !usedWords.includes(word.original))
    if (availableWords.length > 0) {
      const randomWord = availableWords[Math.floor(Math.random() * availableWords.length)]
      setCurrentWord(randomWord)
      setUsedWords(prev => [...prev, randomWord.original])
    } else {
      setCurrentWord({ original: "", scrambled: "No more words available" })
      setIsGameActive(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isGameActive) return

    if (guess.toLowerCase() === currentWord.original.toLowerCase()) {
      setMessage("Correct!")
      setScore(prev => prev + 1)
      setGuess("")
      getNewWord()
    } else {
      setMessage("Try again!")
    }
  }

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">Unscramble the Word</h3>
      <p className="mb-4">Score: {score}/3</p>
      <p className="mb-4">Unscramble: {currentWord.scrambled}</p>
      
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