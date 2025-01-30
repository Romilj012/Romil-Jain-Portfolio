"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Card {
  id: number
  content: string
  isFlipped: boolean
  isMatched: boolean
}

interface MemoryGameProps {
  onComplete: () => void
}

export default function MemoryGame({ onComplete }: MemoryGameProps) {
  const skillPairs = ["Python", "JavaScript", "React", "Node.js", "AWS", "Docker", "MongoDB", "FastAPI"]

  const [cards, setCards] = useState<Card[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [isLocked, setIsLocked] = useState(false)
  const [matches, setMatches] = useState(0)

  useEffect(() => {
    const shuffledCards = [...skillPairs, ...skillPairs]
      .sort(() => Math.random() - 0.5)
      .map((content, index) => ({
        id: index,
        content,
        isFlipped: false,
        isMatched: false,
      }))
    setCards(shuffledCards)
  }, [])

  const handleCardClick = (clickedId: number) => {
    if (isLocked) return
    if (flippedCards.length === 2) return
    if (cards[clickedId].isMatched) return
    if (flippedCards.includes(clickedId)) return

    const newCards = [...cards]
    newCards[clickedId].isFlipped = true
    setCards(newCards)
    setFlippedCards([...flippedCards, clickedId])

    if (flippedCards.length === 1) {
      setIsLocked(true)
      if (cards[flippedCards[0]].content === cards[clickedId].content) {
        newCards[flippedCards[0]].isMatched = true
        newCards[clickedId].isMatched = true
        setCards(newCards)
        setMatches(matches + 1)
        setFlippedCards([])
        setIsLocked(false)
      } else {
        setTimeout(() => {
          newCards[flippedCards[0]].isFlipped = false
          newCards[clickedId].isFlipped = false
          setCards(newCards)
          setFlippedCards([])
          setIsLocked(false)
        }, 1000)
      }
    }
  }

  useEffect(() => {
    if (matches === skillPairs.length) {
      onComplete()
    }
  }, [matches, onComplete])

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">Match the Skills!</h3>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className={`aspect-square cursor-pointer ${
              card.isFlipped ? "bg-zinc-700" : "bg-zinc-800"
            } rounded-lg flex items-center justify-center`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCardClick(card.id)}
          >
            <AnimatePresence>
              {card.isFlipped && (
                <motion.span
                  initial={{ opacity: 0, rotateY: 180 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: 180 }}
                  className="text-sm font-medium"
                >
                  {card.content}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      {matches === skillPairs.length && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-center text-green-400">
          Congratulations! You've matched all the skills!
        </motion.div>
      )}
    </div>
  )
}

