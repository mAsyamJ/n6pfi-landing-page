
"use client"

import type React from "react"
import { BarChart, DollarSign, Zap, TrendingUp } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';

// Strategy data
const mockStrategies = [
  {
    id: "1",
    name: "Uniswap V3 DAI/ETH LP",
    description: "Core Strategy",
    allocation: 65,
    apy: 8.1,
    status: "active",
    riskScore: "medium",
    managementFee: 0,
    performanceFee: 10,
    lastReport: "2 days ago",
    rewards: ["DAI", "ETH"],
    contractAddress: "0x1234...5678",
    etherscanUrl: "https://etherscan.io/address/0x1234567890",
    dailyApy: 8.3,
    weeklyApy: 7.9,
    monthlyApy: 8.5,
    dailyChange: 0.3,
    weeklyChange: -0.5,
    monthlyChange: 1.2,
    performanceData: [7.5, 7.8, 7.9, 8.2, 8.0, 8.3, 8.1],
    icon: "sparkles"
  },
  {
    id: "2",
    name: "Yearn DAI/ETH LP Optimizer",
    description: "Dynamic yield optimizer",
    allocation: 25,
    apy: 3.1,
    status: "active",
    riskScore: "low",
    managementFee: 0,
    performanceFee: 20,
    lastReport: "5 hours ago",
    rewards: ["DAI", "ETH", "YFI"],
    contractAddress: "0xabcd...efgh",
    etherscanUrl: "https://etherscan.io/address/0xabcdefgh",
    dailyApy: 3.2,
    weeklyApy: 3.0,
    monthlyApy: 3.3,
    dailyChange: 0.1,
    weeklyChange: -0.1,
    monthlyChange: 0.4,
    performanceData: [2.9, 3.0, 3.1, 3.0, 3.1, 3.2, 3.1],
    icon: "trending-up"
  },
  {
    id: "3",
    name: "DAI/ETH LP Staking Rewards",
    description: "Passive staking rewards",
    allocation: 10,
    apy: 1.2,
    status: "active",
    riskScore: "low",
    managementFee: 0,
    performanceFee: 5,
    lastReport: "1 day ago",
    rewards: ["DAI"],
    contractAddress: "0x9876...4321",
    etherscanUrl: "https://etherscan.io/address/0x98764321",
    dailyApy: 1.2,
    weeklyApy: 1.3,
    monthlyApy: 1.1,
    dailyChange: 0,
    weeklyChange: 0.1,
    monthlyChange: -0.1,
    performanceData: [1.2, 1.3, 1.2, 1.3, 1.2, 1.2, 1.2],
    icon: "wallet"
  }
];

// Generate combined performance data
const generatePerformanceData = () => {
  const days = ['Mar 1', 'Mar 8', 'Mar 15', 'Mar 22', 'Mar 29', 'Apr 5', 'Apr 12', 'Apr 19'];
  return days.map((day, index) => {
    const uniswapData = mockStrategies[0].performanceData[index] || 8.1;
    const yearnData = mockStrategies[1].performanceData[index] || 3.1;
    const stakingData = mockStrategies[2].performanceData[index] || 1.2;
    
    return {
      day,
      'Uniswap V3': uniswapData,
      'Yearn Optimizer': yearnData,
      'Staking Rewards': stakingData,
      'Combined APY': uniswapData + yearnData + stakingData,
      'TVL': 12 + (index * 0.5) + Math.sin(index * 0.5) * 2
    };
  });
};

const performanceData = generatePerformanceData();

const VaultShowcaseSection: React.FC = () => {
  return (
    <div className="w-full py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Featured Vault
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-400">
            Discover the power of our AI-optimized vaults.
          </p>
        </div>
        <div className="mt-12 p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vault Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                {/* Elon Musk Profile Photo */}
                <div className="relative mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80" 
                    alt="Elon Musk" 
                    className="w-16 h-16 rounded-full border-2 border-purple-500 object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">nElon MemeBoost Vault</h3>
                  <p className="text-sm text-gray-400">Created by Elon Musk</p>
                </div>
                <span className="ml-4 px-2 py-1 text-xs font-semibold text-purple-300 bg-purple-900 rounded-full">Yearn V3</span>
              </div>
              <p className="text-gray-400 mb-8">Elon Musk’s meme-powered vault — high-volatility PEPE farming optimized by Yearn V3 strategies for the ultimate degen believers.</p>

              {/* Key Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <div className="p-6 rounded-lg">
                  <div className="flex items-center">
                    <DollarSign className="w-8 h-8 text-green-400 mr-4" />
                    <div>
                      <p className="text-gray-400">TVL</p>
                      <p className="text-2xl font-bold text-white">$12.40M</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg">
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

            {/* Performance Chart */}
            <div className="h-80 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">Performance</h3>
                <div className="flex gap-2">
                  {['1D', '1W', '1M', 'ALL'].map((period) => (
                    <button
                      key={period}
                      className={`px-3 py-1 text-xs rounded ${
                        period === '1D' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorUniswap" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorYearn" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorStaking" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="day" 
                    stroke="#9ca3af"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    yAxisId="apy"
                    orientation="left"
                    stroke="#9ca3af"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    label={{ value: 'APY (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#9ca3af' } }}
                  />
                  <YAxis 
                    yAxisId="tvl"
                    orientation="right"
                    stroke="#9ca3af"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    label={{ value: 'TVL (M$)', angle: 90, position: 'insideRight', style: { textAnchor: 'middle', fill: '#9ca3af' } }}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#f9fafb'
                    }}
                  />
                  <Legend 
                    wrapperStyle={{ color: '#f9fafb', fontSize: '12px' }}
                  />
                  <Area
                    yAxisId="apy"
                    type="monotone"
                    dataKey="Uniswap V3"
                    stackId="1"
                    stroke="#3b82f6"
                    fill="url(#colorUniswap)"
                    strokeWidth={2}
                  />
                  <Area
                    yAxisId="apy"
                    type="monotone"
                    dataKey="Yearn Optimizer"
                    stackId="1"
                    stroke="#8b5cf6"
                    fill="url(#colorYearn)"
                    strokeWidth={2}
                  />
                  <Area
                    yAxisId="apy"
                    type="monotone"
                    dataKey="Staking Rewards"
                    stackId="1"
                    stroke="#10b981"
                    fill="url(#colorStaking)"
                    strokeWidth={2}
                  />
                  <Line
                    yAxisId="tvl"
                    type="monotone"
                    dataKey="TVL"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Strategies */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-white mb-4">Active Strategies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg flex items-center">
                <Zap className="w-6 h-6 text-yellow-400 mr-4" />
                <p className="text-gray-300">Uniswap V3 DAI/ETH LP</p>
              </div>
              <div className="p-4 rounded-lg flex items-center">
                <Zap className="w-6 h-6 text-blue-400 mr-4" />
                <p className="text-gray-300">Yearn DAI/ETH LP Optimizer</p>
              </div>
              <div className="p-4 rounded-lg flex items-center">
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
