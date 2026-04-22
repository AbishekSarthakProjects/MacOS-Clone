"use client"

import { PineappleMark } from "./app-icons"

interface AboutThisMacProps {
  onClose: () => void
}

export function AboutThisMac({ onClose }: AboutThisMacProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 animate-fade-in">
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-[#f5f5f7] shadow-2xl animate-scale-in">
        <div className="relative flex flex-col items-center border-b border-gray-200 bg-white p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute left-4 top-4 flex h-3 w-3 items-center justify-center rounded-full bg-[#ff5f57] transition-all hover:bg-[#ff5f57]/80"
            aria-label="Close"
          >
            <span className="text-[8px] text-red-900">x</span>
          </button>

          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#26e0ff] via-[#ff2d55] to-[#fff14a] text-white shadow-lg sm:h-20 sm:w-20">
            <PineappleMark className="h-11 w-11 drop-shadow sm:h-14 sm:w-14" />
          </div>

          <h1 className="mb-1 text-xl font-semibold text-gray-800 sm:text-2xl">PineappleBook Pro</h1>
          <p className="text-xs text-gray-500 sm:text-sm">16-inch, 2026</p>
        </div>

        <div className="space-y-2 px-6 py-4 text-sm sm:space-y-3 sm:px-8 sm:py-6">
          <div className="flex justify-between border-b border-gray-100 py-2">
            <span className="text-gray-600">Chip</span>
            <span className="font-medium text-gray-800">Pineapple P1 Pro</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 py-2">
            <span className="text-gray-600">Memory</span>
            <span className="font-medium text-gray-800">16 GB</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 py-2">
            <span className="text-gray-600">Startup disk</span>
            <span className="font-medium text-gray-800">Pineapple HD</span>
          </div>
          <div className="flex justify-between border-b border-gray-100 py-2">
            <span className="text-gray-600">Serial number</span>
            <span className="text-xs font-medium text-gray-800 sm:text-sm">P1NE-4PP1-3OS</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">System</span>
            <span className="font-medium text-gray-800">Pineapple OS 1.0</span>
          </div>
        </div>

        <div className="px-6 pb-4 sm:px-8 sm:pb-6">
          <button className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
            More Info...
          </button>
        </div>

        <div className="px-6 pb-4 text-center sm:px-8 sm:pb-6">
          <p className="text-xs text-gray-500">Regulatory Certification</p>
          <p className="mt-1 text-xs text-gray-500">Pineapple OS desktop concept.</p>
          <p className="text-xs text-gray-500">All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}
