"use client"

import { useEffect, useRef, useState } from "react"

export default function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [muted, setMuted] = useState(false)

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.4
            audioRef.current.play().catch(() => { })
        }
    }, [])

    return (
        <>
            <audio ref={audioRef} loop src="/music.mp3" />

            <button
                onClick={() => {
                    if (!audioRef.current) return
                    audioRef.current.muted = !muted
                    setMuted(!muted)
                }}
                className="
          fixed bottom-6 right-6
          bg-white/80
          backdrop-blur
          px-4 py-2
          rounded-full
          shadow-lg
          text-black
          z-50
        "
            >
                {muted ? "🔇 Music Off" : "🎶 Music On"}
            </button>
        </>
    )
}
