"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function PhotoReveal({ img, text }: { img: string, text: string }) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <img
                src={img}
                onClick={() => setOpen(true)}
                className="rounded-xl cursor-pointer object-cover"
            />

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center p-8 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                    >
                        <motion.p
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="text-xl max-w-lg text-center"
                        >
                            {text}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
