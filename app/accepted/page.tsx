"use client"

import confetti from "canvas-confetti"
import { useEffect, useState } from "react"
import BackgroundMusic from "@/components/BackgroundMusic"
import { motion } from "framer-motion"
import HeartParticles from "@/components/HeartParticles"


export default function AcceptedPage() {

    useEffect(() => {
        confetti({
            particleCount: 180,
            spread: 90,
            origin: { y: 0.6 },
            colors: ["#ff5c8a", "#ffd1dc", "#ffffff"],
        })
    }, [])


    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
            style={{ backgroundImage: "url('/us.jpg')" }}
        >
            <HeartParticles />
            <BackgroundMusic />

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="
          relative
          bg-white/90
          backdrop-blur-sm
          p-10
          rounded-3xl
          text-center
          shadow-2xl
          max-w-md
        "
            >
                <h1 className="text-4xl mb-4 text-black">
                    She said yes 💍
                </h1>

                <p className="text-lg text-gray-800 leading-relaxed">
                    And this just became
                    <br />
                    my favorite story.
                </p>
            </motion.div>
        </div>
    )
}
