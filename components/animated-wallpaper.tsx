"use client"

import { useState } from "react"

export function AnimatedWallpaper() {
  const [imageMissing, setImageMissing] = useState(false)

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {!imageMissing && (
        <img
          src="/image.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
          onError={() => setImageMissing(true)}
        />
      )}

      {imageMissing && (
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(255,0,120,0.22),transparent_20%),radial-gradient(circle_at_19%_83%,rgba(0,229,255,0.2),transparent_24%),linear-gradient(115deg,transparent_0_20%,rgba(0,229,255,0.28)_21%,rgba(255,255,255,0.82)_22%,rgba(255,0,120,0.48)_23%,transparent_24%_45%,rgba(255,0,120,0.46)_46%,rgba(0,229,255,0.72)_47%,rgba(255,238,0,0.76)_48%,transparent_49%)]" />
          <div className="absolute bottom-20 left-1/2 max-w-[520px] -translate-x-1/2 rounded-xl border border-white/14 bg-black/40 px-5 py-3 text-center text-sm text-white/80 shadow-2xl backdrop-blur-xl">
            Save the provided wallpaper as <span className="font-semibold text-white">public/image.png</span> to show the exact image.
          </div>
        </div>
      )}
    </div>
  )
}
