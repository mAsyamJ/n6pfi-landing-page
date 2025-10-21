
"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Music, Video, Twitch } from "lucide-react"

const VaultPlaygroundSection: React.FC = () => {
  return (
    <div className="w-full py-16 sm:py-24 bg-[#0a0a14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Vault Playground
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-400">
            Experience the power of NapFi. Simulate a vault creation.
          </p>
        </div>
        <div className="mt-12 p-8 bg-[rgba(20,20,40,0.6)] rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1: Choose Creator Type */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-white mb-4">1. Choose Creator Type</h3>
              <div className="flex gap-4">
                <button className="p-4 bg-purple-500 rounded-lg text-white"><Music /></button>
                <button className="p-4 bg-gray-700 rounded-lg text-white"><Video /></button>
                <button className="p-4 bg-gray-700 rounded-lg text-white"><Twitch /></button>
              </div>
            </div>

            {/* Step 2: Simulate Revenue */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-white mb-4">2. Simulate Revenue</h3>
              <input type="range" min="0" max="10000" className="w-full" />
              <p className="text-white mt-2">$5,000 / month</p>
            </div>

            {/* Step 3: Launch Vault */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-white mb-4">3. Launch Vault</h3>
              <button className="px-8 py-4 bg-green-500 rounded-lg text-white font-bold">Launch</button>
            </div>
          </div>

          {/* Visualization */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-white">NapFi Earnings vs. Traditional</h3>
            <div className="mt-4 h-64 bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-white">[Chart Visualization Placeholder]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VaultPlaygroundSection
