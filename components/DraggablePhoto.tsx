"use client"

import { motion, useMotionValue } from "framer-motion"
import { useEffect, useMemo } from "react"

export default function DraggablePhoto({ img, onRemove }: { img: string, onRemove: () => void }) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const rotation = useMemo(() => Math.random() * 16 - 8, [])

    useEffect(() => {
        const unsubscribeX = x.on("change", (latestX) => {
            const latestY = y.get()
            const distance = Math.sqrt(latestX ** 2 + latestY ** 2)

            // if photo is dragged far enough, consider it removed
            if (distance > 180) {
                onRemove()
            }
        })

        return () => unsubscribeX()
    }, [x, y, onRemove])

    return (
        <motion.div
            drag
            style={{ x, y, rotate: rotation }}
            dragConstraints={{ top: -400, bottom: 400, left: -400, right: 400 }}
            className="
                absolute
                w-[320px] h-[320px]
                md:w-[480px] md:h-[480px]
                bg-white
                rounded-2xl
                shadow-2xl
                cursor-grab
                flex
                items-center
                justify-center
                z-20
      "
            whileDrag={{ scale: 1.05, rotate: 0 }}
        >
            <img
                src={img}
                className="w-full h-full object-cover rounded-2xl pointer-events-none"
            />
        </motion.div>
    )
}
