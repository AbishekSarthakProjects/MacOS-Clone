"use client"

import { useEffect, useState } from "react"
import { PineappleMark } from "./app-icons"

export function BootScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex h-[100dvh] w-screen flex-col items-center justify-center bg-[#020205]">
      <div className="animate-fade-in text-white">
        <PineappleMark className="h-24 w-24" />
      </div>

      {/* Progress bar */}
      <div className="mt-16 w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
