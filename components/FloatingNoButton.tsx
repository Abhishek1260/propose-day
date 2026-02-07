"use client"

import { useState } from "react"

export default function FloatingNoButton() {
    const [pos, setPos] = useState({ x: 0, y: 0 })

    const move = () => {
        setPos({
            x: Math.random() * 260 - 130,
            y: Math.random() * 120 - 60,
        })
    }

    return (
        <button
            onMouseEnter={move}
            style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`,
            }}
            className="
        px-6 py-3 
        border border-rose-300 
        rounded-full 
        relative
        transition-transform duration-200
      "
        >
            No
        </button>
    )
}
