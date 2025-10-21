
"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Music, Video, Twitch } from "lucide-react"

const UseCasesSection: React.FC = () => {
  const useCases = [
    {
      title: "Music Royalties",
      description:
        "'stTAYLOR' vault tokenizes royalties (5% APY). Fans buy $TAYLOR (50% split), labels own strategy via ERC-7002 NFT (30% control).",
      icon: <Music className="w-8 h-8 text-purple-400" />,
    },
    {
      title: "Video Ad Revenue",
      description:
        "'stPEWDS' vault tokenizes ad revenue (7% APY). Fans invest $10 for shares; creators get 20%.",
      icon: <Video className="w-8 h-8 text-purple-400" />,
    },
    {
      title: "Streaming Subscriptions",
      description:
        "'stVITALIK' vault tokenizes subs/donations (6% APY). Fans stake for emotes/badges.",
      icon: <Twitch className="w-8 h-8 text-purple-400" />,
    },
  ]

  return (
    <div className="w-full py-16 sm:py-24 bg-[#0a0a14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Real-World Use Cases
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-400">
            See how NapFi is revolutionizing the creator economy.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="bg-[rgba(20,20,40,0.6)] p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-4">{useCase.icon}</div>
              <h3 className="text-2xl font-semibold text-white">
                {useCase.title}
              </h3>
              <p className="mt-4 text-gray-300">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UseCasesSection
