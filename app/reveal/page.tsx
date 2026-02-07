"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import DraggablePhoto from "@/components/DraggablePhoto"
import FloatingNoButton from "@/components/FloatingNoButton"

const TOTAL_PHOTOS = 4

export default function RevealPage() {
    const router = useRouter()
    const [removed, setRemoved] = useState(0)

    const handleRemove = () => {
        setRemoved((prev) => Math.min(prev + 1, TOTAL_PHOTOS))
    }

    const fullyRevealed = removed === TOTAL_PHOTOS

    return (
        <main className="min-h-screen flex justify-center items-center relative overflow-hidden">

            {/* CENTER QUESTION + BUTTONS (ALWAYS PRESENT) */}
            <div
                className={`
          absolute
          flex flex-col items-center gap-6
          transition-opacity duration-500
          ${fullyRevealed ? "opacity-100" : "opacity-0"}
        `}
                style={{ zIndex: 10 }}
            >
                <h2 className="text-3xl text-center">
                    Will you be my Valentine?
                </h2>

                <div className="relative flex gap-6">
                    <button
                        onClick={() => router.push("/accepted")}
                        className="px-6 py-3 bg-rose-500 text-black rounded-full"
                    >
                        Yes
                    </button>

                    <button
                        onClick={() => router.push("/accepted")}
                        className="px-6 py-3 bg-pink-400 text-black rounded-full"
                    >
                        Definitely Yes
                    </button>

                    <FloatingNoButton />
                </div>
            </div>

            {/* PHOTO STACK ON TOP */}
            <div className="relative w-full h-full flex justify-center items-center">
                <DraggablePhoto img="/1.PNG" onRemove={handleRemove} />
                <DraggablePhoto img="/2.PNG" onRemove={handleRemove} />
                <DraggablePhoto img="/3.PNG" onRemove={handleRemove} />
                <DraggablePhoto img="/4.PNG" onRemove={handleRemove} />
            </div>

        </main>
    )
}
