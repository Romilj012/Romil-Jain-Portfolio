// "use client"

// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"

// interface TypingGameProps {
//   onComplete: () => void
// }

// export default function TypingGame({ onComplete }: TypingGameProps) {
//   const phrases = ["AI and Machine Learning", "Full Stack Development", "Cloud Computing", "Database Optimization"]

//   const [currentPhrase, setCurrentPhrase] = useState("")
//   const [userInput, setUserInput] = useState("")
//   const [score, setScore] = useState(0)
//   const [timeLeft, setTimeLeft] = useState(30)
//   const [isGameActive, setIsGameActive] = useState(false)

//   useEffect(() => {
//     if (isGameActive && timeLeft > 0) {
//       const timer = setInterval(() => {
//         setTimeLeft((prev) => prev - 1)
//       }, 1000)
//       return () => clearInterval(timer)
//     } else if (timeLeft === 0) {
//       setIsGameActive(false)
//       if (score >= 5) {
//         onComplete()
//       }
//     }
//   }, [timeLeft, score, onComplete, isGameActive]) // Added isGameActive to dependencies

//   useEffect(() => {
//     if (isGameActive) {
//       setCurrentPhrase(phrases[Math.floor(Math.random() * phrases.length)])
//     }
//   }, [isGameActive])

//   const startGame = () => {
//     setIsGameActive(true)
//     setTimeLeft(60)
//     setScore(0)
//     setUserInput("")
//   }

//   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (!isGameActive) return

//     setUserInput(e.target.value)
//     if (e.target.value === currentPhrase) {
//       setScore((prev) => prev + 1)
//       setUserInput("")
//       setCurrentPhrase(phrases[Math.floor(Math.random() * phrases.length)])
//     }
//   }

//   return (
//     <div className="p-4">
//       <h3 className="text-xl font-bold mb-4">Type the Phrases!</h3>
//       <p className="mb-4">Score 5 points to unlock the next level.</p>
//       <div className="space-y-4">
//         {!isGameActive ? (
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={startGame}
//             className="bg-zinc-800 px-4 py-2 rounded-lg"
//           >
//             Start Game
//           </motion.button>
//         ) : (
//           <>
//             <div className="flex justify-between mb-4">
//               <span>Score: {score}/5</span>
//               <span>Time: {timeLeft}s</span>
//             </div>
//             <div className="bg-zinc-800 p-4 rounded-lg mb-4">{currentPhrase}</div>
//             <input
//               type="text"
//               value={userInput}
//               onChange={handleInput}
//               className="w-full bg-zinc-900 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-700"
//               placeholder="Type here..."
//               autoFocus
//             />
//           </>
//         )}
//       </div>
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypingGameProps {
  onComplete: () => void
}

export default function TypingGame({ onComplete }: TypingGameProps) {
  const phrases = ["AI and Machine Learning", "Full Stack Development", "Cloud Computing", "Database Optimization"]

  const [currentPhrase, setCurrentPhrase] = useState("")
  const [userInput, setUserInput] = useState("")
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)
  const [isGameActive, setIsGameActive] = useState(false)
  const [usedPhrases, setUsedPhrases] = useState<string[]>([])

  useEffect(() => {
    if (isGameActive && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    } else if (timeLeft === 0) {
      setIsGameActive(false)
    }
  }, [timeLeft, isGameActive])

  useEffect(() => {
    if (score >= 3) {
      setIsGameActive(false)
      onComplete()
    }
  }, [score, onComplete])

  const getNewPhrase = () => {
    const availablePhrases = phrases.filter(phrase => !usedPhrases.includes(phrase))
    if (availablePhrases.length > 0) {
      const randomPhrase = availablePhrases[Math.floor(Math.random() * availablePhrases.length)]
      setCurrentPhrase(randomPhrase)
      setUsedPhrases(prev => [...prev, randomPhrase])
    } else {
      setCurrentPhrase("")
      setIsGameActive(false)
    }
  }

  const startGame = () => {
    setIsGameActive(true)
    setTimeLeft(60)
    setScore(0)
    setUserInput("")
    setUsedPhrases([])
    getNewPhrase()
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isGameActive) return

    setUserInput(e.target.value)
    if (e.target.value === currentPhrase) {
      setScore((prev) => prev + 1)
      setUserInput("")
      getNewPhrase()
    }
  }

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">Type the Phrases!</h3>
      <p className="mb-4">Score 3 points to unlock the next level.</p>
      <div className="space-y-4">
        {!isGameActive ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startGame}
            className="bg-zinc-800 px-4 py-2 rounded-lg"
          >
            {score >= 3 ? "Level Unlocked!" : "Start Game"}
          </motion.button>
        ) : (
          <>
            <div className="flex justify-between mb-4">
              <span>Score: {score}/3</span>
              <span>Time: {timeLeft}s</span>
            </div>
            <div className="bg-zinc-800 p-4 rounded-lg mb-4">
              {currentPhrase || "Get ready..."}
            </div>
            <input
              type="text"
              value={userInput}
              onChange={handleInput}
              className="w-full bg-zinc-900 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-700"
              placeholder="Type here..."
              autoFocus
            />
          </>
        )}
      </div>
    </div>
  )
}