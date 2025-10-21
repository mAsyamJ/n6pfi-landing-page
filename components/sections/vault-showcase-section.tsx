
"use client"

import type React from "react"
import { BarChart, DollarSign, Zap, TrendingUp } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const VaultShowcaseSection: React.FC = () => {
  return (
    <div className="w-full py-16 sm:py-24 bg-[#0a0a14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Featured Vault
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-400">
            Discover the power of our AI-optimized vaults.
          </p>
        </div>
        <div className="mt-12 p-8 bg-[rgba(20,20,40,0.6)] rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vault Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-semibold text-white">nElon MemeBoost Vault</h3>
                <span className="ml-4 px-2 py-1 text-xs font-semibold text-purple-300 bg-purple-900 rounded-full">Yearn V3</span>
              </div>
              <p className="text-gray-400 mb-8">Elon Musk’s meme-powered vault — high-volatility PEPE farming optimized by Yearn V3 strategies for the ultimate degen believers.</p>

              {/* Key Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <div className="p-6 bg-[rgba(30,30,50,0.8)] rounded-lg">
                  <div className="flex items-center">
                    <DollarSign className="w-8 h-8 text-green-400 mr-4" />
                    <div>
                      <p className="text-gray-400">TVL</p>
                      <p className="text-2xl font-bold text-white">$12.40M</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-[rgba(30,30,50,0.8)] rounded-lg">
                  <div className="flex items-center">
                    <TrendingUp className="w-8 h-8 text-purple-400 mr-4" />
                    <div>
                      <p className="text-gray-400">APY</p>
                      <p className="text-2xl font-bold text-white">45.2%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="h-80 bg-gray-800 rounded-lg flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Strategies */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-white mb-4">Active Strategies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-[rgba(30,30,50,0.8)] rounded-lg flex items-center">
                <Zap className="w-6 h-6 text-yellow-400 mr-4" />
                <p className="text-gray-300">Uniswap V3 DAI/ETH LP</p>
              </div>
              <div className="p-4 bg-[rgba(30,30,50,0.8)] rounded-lg flex items-center">
                <Zap className="w-6 h-6 text-blue-400 mr-4" />
                <p className="text-gray-300">Yearn DAI/ETH LP Optimizer</p>
              </div>
              <div className="p-4 bg-[rgba(30,30,50,0.8)] rounded-lg flex items-center">
                <Zap className="w-6 h-6 text-green-400 mr-4" />
                <p className="text-gray-300">DAI/ETH LP Staking Rewards</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-purple-600 rounded-lg text-white font-bold hover:bg-purple-700 transition-colors">View Vault</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VaultShowcaseSection
