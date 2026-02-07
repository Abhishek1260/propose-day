"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"

export default function DraggablePhoto({ img }) {
    // Random rotation between -8° to +8°
    const rotation = useMemo(
        () => Math.random() * 16 - 8,
        []
    )

    return (
        <motion.div
            drag
            dragConstraints={{ top: -400, bottom: 400, left: -400, right: 400 }}
            className="
        absolute
        w-[480px]
        h-[480px]
        bg-white
        rounded-2xl
        shadow-2xl
        cursor-grab
        flex
        items-center
        justify-center
      "
            style={{
                rotate: rotation,
            }}
            whileDrag={{
                scale: 1.05,
                rotate: 0,
                zIndex: 50,
            }}
        >
            <img
                src={img}
                className="
          w-full
          h-full
          object-cover
          rounded-2xl
        "
            />
        </motion.div>
    )
}
