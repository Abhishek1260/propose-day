"use client"

import DraggablePhoto from "@/components/DraggablePhoto"
import FloatingNoButton from "@/components/FloatingNoButton"
import { useRouter } from "next/navigation"

export default function RevealPage() {
    const router = useRouter()

    return (
        <main className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">

            {/* PHOTO STACK */}
            <div className="relative w-full h-[60vh] flex justify-center items-center">
                <DraggablePhoto img="/1.jpg" />
                <DraggablePhoto img="/2.jpg" />
                <DraggablePhoto img="/3.jpg" />
                <DraggablePhoto img="/4.jpg" />
            </div>

            {/* QUESTION */}
            <h2 className="text-3xl mt-10 mb-6">
                Will you be my Valentine?
            </h2>

            {/* BUTTONS */}
            <div className="relative flex gap-6 items-center mt-4">

                <button
                    onClick={() => router.push("/accepted")}
                    className="px-6 py-3 bg-rose-500 text-black rounded-full z-10"
                >
                    Yes
                </button>

                <button
                    onClick={() => router.push("/accepted")}
                    className="px-6 py-3 bg-pink-400 text-black rounded-full z-10"
                >
                    Definitely Yes
                </button>

                {/* No button lives here */}
                <FloatingNoButton />

            </div>

        </main>
    )
}
