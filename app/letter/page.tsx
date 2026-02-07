"use client"

import PhotoReveal from "@/components/PhotoReveal"
import { useRouter } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export default function LetterPage() {
  const router = useRouter()

  const [open, setOpen] = useState<boolean>(false)

  return (
    <main className="h-screen flex flex-col p-10 items-center">

      {/* LEFT LETTER */}
      {/* LEFT — LETTER CARD */}
      <div
        className="flex flex-row w-full gap-10 flex-1"
      >
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
          onClick={() => setOpen(true)}

        >
          <p>
            i dont really know when it happenedddd
          </p>

          <p>
            somewhere between random conversations
            <br />
            shared silences
            <br />
            and those moments where time just disappearedddd
          </p>

          <p>
            you became important to meee
          </p>

          <p>
            with you things feel easyyy
            <br />

            i feel understooddd
            <br />

            i feel calm
            <br />

            i feel like i can be completely myself
          </p>

          <p>
            you have become the person i want to tell everythinggg to
            <br />

            the good days the bad ones
            <br />

            and all the little things in betweennn
          </p>

          <p>
            this is me being honesttt
            <br />

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
              <PhotoReveal img="/letter/1.jpg" text="/handwritten/4.jpg" />
              <PhotoReveal img="/letter/2.jpg" text="/handwritten/3.jpg" />
            </div>
            <div className="flex flex-row gap-10 h-full flex-1">
              <PhotoReveal img="/letter/3.jpg" text="/handwritten/5.jpg" />
              <PhotoReveal img="/letter/4.jpg" text="/handwritten/2.jpg" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-min text-center mt-10 mb-10">
        <button
          onClick={() => router.push("/reveal")}
          className="px-8 py-3 bg-rose-500 text-black rounded-full mb-10"
        >
          One last thing →
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            {/* WHITE REVEAL CARD */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="
                bg-white
                text-black
                rounded-2xl
                shadow-2xl
                p-8
                max-w-lg
                text-center
              "
              onClick={(e) => e.stopPropagation()}
            >
              <img src="/handwritten/1.jpg"></img>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  )
}