"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface Tile {
  id: number
  currentPos: number
}

interface PuzzleGameProps {
  onComplete: () => void
}

export default function PuzzleGame({ onComplete }: PuzzleGameProps) {
  const size = 3
  const [tiles, setTiles] = useState<Tile[]>(() => {
    const initialTiles = Array.from({ length: size * size - 1 }, (_, i) => ({
      id: i + 1,
      currentPos: i,
    }))
    return [...initialTiles, { id: size * size, currentPos: size * size - 1 }].sort(() => Math.random() - 0.5)
  })

  const canMove = (index: number) => {
    const emptyIndex = tiles.find((t) => t.id === size * size)!.currentPos
    const row = Math.floor(index / size)
    const emptyRow = Math.floor(emptyIndex / size)
    const col = index % size
    const emptyCol = emptyIndex % size

    return (Math.abs(row - emptyRow) === 1 && col === emptyCol) || (Math.abs(col - emptyCol) === 1 && row === emptyRow)
  }

  const moveTile = (index: number) => {
    if (!canMove(index)) return

    const newTiles = [...tiles]
    const emptyTile = newTiles.find((t) => t.id === size * size)!
    const clickedTile = newTiles.find((t) => t.currentPos === index)!

    const tempPos = clickedTile.currentPos
    clickedTile.currentPos = emptyTile.currentPos
    emptyTile.currentPos = tempPos

    setTiles(newTiles)
  }

  const isSolved = () => {
    return tiles.every((tile) => tile.currentPos === tile.id - 1)
  }

  useEffect(() => {
    if (isSolved()) {
      onComplete()
    }
  }, [tiles, onComplete, isSolved]) // Added isSolved to dependencies

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">Solve the Puzzle!</h3>
      <div className="grid grid-cols-3 gap-2 w-64 mx-auto">
        {Array.from({ length: size * size }, (_, i) => {
          const tile = tiles.find((t) => t.currentPos === i)
          return (
            <motion.div
              key={i}
              className={`aspect-square ${
                tile?.id === size * size ? "bg-transparent" : "bg-zinc-800 cursor-pointer"
              } rounded-lg flex items-center justify-center`}
              whileHover={tile?.id !== size * size ? { scale: 1.05 } : {}}
              whileTap={tile?.id !== size * size ? { scale: 0.95 } : {}}
              onClick={() => moveTile(i)}
            >
              {tile?.id !== size * size && <span className="text-lg font-bold">{tile?.id}</span>}
            </motion.div>
          )
        })}
      </div>
      {isSolved() && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-center text-green-400">
          Congratulations! You've solved the puzzle!
        </motion.div>
      )}
    </div>
  )
}

