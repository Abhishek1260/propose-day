"use client"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <div className="h-screen flex flex-col justify-center items-center text-white text-center px-6">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-3xl max-w-xl"
      >
        I never planned this…
        but somehow you became my favorite part of every day.
      </motion.h1>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-10 px-8 py-3 bg-white text-black rounded-full"
        onClick={() => router.push("/letter")}
      >
        Continue
      </motion.button>
    </div>
  )
}
