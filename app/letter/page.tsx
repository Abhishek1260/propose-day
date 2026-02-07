"use client"

import PhotoReveal from "@/components/PhotoReveal"
import { useRouter } from "next/navigation"

export default function LetterPage() {
    const router = useRouter()

    return (
        <main className="h-screen flex flex-col p-10 items-center">

            {/* LEFT LETTER */}
            {/* LEFT — LETTER CARD */}
            <div className="flex flex-row w-full gap-10 flex-1">
                <div
                    className="
                    bg-white
                    text-black
                    rounded-2xl
                    shadow-xl
                    p-8
                    h-full
                    md:p-10
                    max-w-xl
                    space-y-6
                    flex-1
                "
                >
                    <p>
                        i dont really know when it happenedddd
                    </p>

                    <p>
                        somewhere between random conversations
                        shared silences
                        and those moments where time just disappearedddd
                    </p>

                    <p>
                        you became important to meee
                    </p>

                    <p>
                        with you things feel easyyy
                        i feel understooddd
                        i feel calm
                        i feel like i can be completely myself
                    </p>

                    <p>
                        you have become the person i want to tell everythinggg to
                        the good days the bad ones
                        and all the little things in betweennn
                    </p>

                    <p>
                        this is me being honesttt
                        this is me choosing youuu
                    </p>

                    <p>
                        you became important to meee
                    </p>

                    <p className="italic text-rose-600">
                        This is me, choosing you.
                    </p>
                </div>


                {/* RIGHT PHOTOS */}
                <div className="flex-1 flex justify-enter align-center w-full h-full">
                    <div className="flex flex-col w-full h-full gap-10">
                        <div className="flex-row flex gap-10 h-full flex-1">
                            <PhotoReveal img="/letter/1.jpg" text="The day I realized I was falling." />
                            <PhotoReveal img="/letter/2.jpg" text="You make even ordinary moments special." />
                        </div>
                        <div className="flex flex-row gap-10 h-full flex-1">
                            <PhotoReveal img="/letter/3.jpg" text="With you, everything feels lighter." />
                            <PhotoReveal img="/letter/4.jpg" text="I choose you. Always." />
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-min text-center mt-10">
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
