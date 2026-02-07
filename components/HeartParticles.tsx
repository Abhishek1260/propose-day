"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const hearts = Array.from({ length: 12 })

export default function HeartParticles() {
    const [mounted, setMounted] = useState(false)
    const [viewport, setViewport] = useState({ width: 0, height: 0 })

    useEffect(() => {
        setViewport({ width: window.innerWidth, height: window.innerHeight })
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            {hearts.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-rose-400 text-2xl"
                    initial={{
                        x: Math.random() * viewport.width,
                        y: viewport.height + 50,
                        opacity: 0,
                    }}
                    animate={{
                        y: -100,
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: 10 + Math.random() * 6,
                        delay: Math.random() * 5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    💗
                </motion.div>
            ))}
        </div>
    )
}
