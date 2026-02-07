"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useMemo, useState } from "react"

export default function PhotoReveal({ img, text }: { img: string, text: string }) {
    const [open, setOpen] = useState(false)

    // One random rotation per photo (used everywhere)
    const rotation = useMemo(
        () => Math.random() * 12 - 6, // -6° to +6°
        []
    )

    return (
        <>
            {/* PHOTO THUMBNAIL CARD */}
            <motion.div
                style={{ rotate: rotation }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="
                bg-white
                aspect-square
                rounded-2xl
                shadow-xl
                cursor-pointer
                flex
                items-center
                w-full
                justify-center
                p-2
                "
                onClick={() => setOpen(true)}
            >
                <img
                    src={img}
                    className="
            w-full
            h-full
            object-cover
            rounded-xl
            pointer-events-none
          "
                />
            </motion.div>

            {/* REVEAL OVERLAY */}
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
                            initial={{ scale: 0.85, rotate: rotation, opacity: 0 }}
                            animate={{ scale: 1, rotate: rotation, opacity: 1 }}
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
                            <img src={text}></img>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
