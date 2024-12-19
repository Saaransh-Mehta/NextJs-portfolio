'use client'

import { useEffect, useState } from 'react'

export const TextGenerateEffect = ({ words, className = '' }: { words: string; className?: string }) => {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let i = 0
    const intervalId = setInterval(() => {
      setDisplayedText(words.slice(0, i))
      i++
      if (i > words.length) {
        clearInterval(intervalId)
      }
    }, 50)

    return () => clearInterval(intervalId)
  }, [words])

  return <h2 className={`text-blue-400 ${className}`}>{displayedText}</h2>
}