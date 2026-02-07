"use client"

import PhotoReveal from "@/components/PhotoReveal"
import { useRouter } from "next/navigation"

export default function LetterPage() {
    const router = useRouter()

    return (
        <main className="min-h-screen grid md:grid-cols-2 gap-10 p-10 items-center">

            {/* LEFT LETTER */}
            <div className="text-lg leading-relaxed">
                <p>
                    Every conversation with you feels effortless.
                    Somewhere between laughter and late-night talks,
                    you quietly became home to me.
                </p>
            </div>

            {/* RIGHT PHOTOS */}
            <div className="grid grid-cols-2 gap-4">
                <PhotoReveal img="/1.jpg" text="The day I realized I was falling." />
                <PhotoReveal img="/2.jpg" text="You make even ordinary moments special." />
                <PhotoReveal img="/3.jpg" text="With you, everything feels lighter." />
                <PhotoReveal img="/4.jpg" text="I choose you. Always." />
            </div>

            <div className="col-span-full text-center mt-10">
                <button
                    onClick={() => router.push("/reveal")}
                    className="px-8 py-3 bg-rose-500 text-black rounded-full"
                >
                    One last thing →
                </button>
            </div>

        </main>
    )
}
