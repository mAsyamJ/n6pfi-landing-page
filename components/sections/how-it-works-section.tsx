"use client"

import type React from "react"
import { motion } from "framer-motion"

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      title: "Connect & Discover",
      description:
        "A fan connects their wallet to the NapFi app and searches for 'stable music vaults.'",
    },
    {
      title: "AI-Powered Recommendations",
      description:
        "NapFi Brain scans Spotify data and recommends the 'stTAYLOR' vault (5% APY, low risk).",
    },
    {
      title: "Deposit & Receive",
      description:
        "The fan deposits USDC into VaultDeFi.sol and receives ERC-4626 tokens.",
    },
    {
      title: "Strategy Execution",
      description:
        "The router allocates funds across Aave and Curve.",
    },
    {
      title: "Engage & Participate",
      description:
        "The fan stakes shares for exclusive NFTs; labels control splits via ERC-7002 strategy NFTs.",
    },
    {
      title: "Earn & Distribute",
      description:
        "The vault auto-compounds yields; royalties distribute (50% fans, 30% artist).",
    },
    {
      title: "Withdraw & Profit",
      description:
        "The fan withdraws with profit; the protocol earns a 0.5-1% fee on TVL.",
    },
  ]

  return (
    <div className="w-full py-16 sm:py-24 bg-[#0a0a14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            How It Works
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-400">
            A step-by-step guide to tokenizing creative income with NapFi.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-[rgba(20,20,40,0.6)] p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center">
                <div className="text-2xl font-bold text-purple-400 mr-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
              </div>
              <p className="mt-4 text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWorksSection