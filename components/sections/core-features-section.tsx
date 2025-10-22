"use client"

import { useState } from "react"
import { Brain, Coins, Users, Zap, Shield, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"
import type React from "react"

const coreFeatures = [
  {
    id: "ai-routing",
    title: "AI-Optimized Routing",
    description: "NapFi Brain automatically analyzes market conditions and routes funds to the highest-yielding strategies across DeFi protocols.",
    icon: <Brain className="w-8 h-8" />,
    benefits: [
      "7-12% APY through intelligent allocation",
      "Real-time market analysis and rebalancing",
      "Risk-adjusted portfolio optimization",
      "Gas fee optimization across protocols"
    ],
    stats: {
      apy: "8.5%",
      protocols: "15+",
      optimization: "24/7"
    },
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "revenue-tokenization", 
    title: "Revenue Tokenization",
    description: "Transform creative assets like music royalties, YouTube revenue, and streaming income into tradeable ERC-4626 vaults.",
    icon: <Coins className="w-8 h-8" />,
    benefits: [
      "Tokenize music royalties (stTAYLOR)",
      "YouTube ad revenue sharing (stPEWDS)", 
      "Twitch subscription tokenization (stVITALIK)",
      "Automated royalty distribution via ERC-2981"
    ],
    stats: {
      creators: "500+",
      revenue: "$2.1M",
      splits: "70%+"
    },
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "fractional-ownership",
    title: "Fractional Ownership", 
    description: "Enable fans and DAOs to co-own yield streams through ERC-1155 tokens and ERC-7002 strategy NFTs.",
    icon: <Users className="w-8 h-8" />,
    benefits: [
      "Fans stake tokens for exclusive perks",
      "Labels control strategies via ERC-7002 NFTs",
      "Community governance and voting rights",
      "Transparent on-chain ownership tracking"
    ],
    stats: {
      holders: "10K+",
      nfts: "2.5K",
      governance: "Active"
    },
    color: "from-green-500 to-emerald-500"
  }
]

const useCases = [
  {
    title: "Music Industry",
    description: "Taylor Swift's 'stTAYLOR' vault tokenizes 5% APY royalties with 50% fan splits",
    icon: "🎵",
    metrics: "$1.4M TVL in 2 weeks"
  },
  {
    title: "Content Creation", 
    description: "PewDiePie's 'stPEWDS' vault shares 7% APY from YouTube ad revenue",
    icon: "📺",
    metrics: "20% creator, 50% fans, 30% label"
  },
  {
    title: "Streaming Platforms",
    description: "Vitalik's 'stVITALIK' vault tokenizes 6% APY from Twitch subscriptions",
    icon: "🎮", 
    metrics: "Top stakers get private stream access"
  }
]

export default function CoreFeaturesSection() {
  const [activeFeature, setActiveFeature] = useState("ai-routing")
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  const currentFeature = coreFeatures.find(f => f.id === activeFeature)

  return (
    <div className="w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Core Features
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto mb-8">
            Intelligent Yield Infrastructure
          </p>
          <p className="text-base text-gray-500 max-w-3xl mx-auto">
            Explore AI-optimized routing, revenue tokenization, and fractional ownership
            all in one modular platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Feature Cards */}
          <div className="space-y-6">
            {coreFeatures.map((feature) => (
              <div
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  activeFeature === feature.id
                    ? "border-purple-500 bg-purple-500/10"
                    : hoveredFeature === feature.id
                    ? "border-purple-400/50 bg-purple-500/5"
                    : "border-gray-700 bg-gray-800/50"
                }`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${feature.color} opacity-5`} />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} text-white`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {feature.description}
                      </p>
                      
                      {/* Stats */}
                      <div className="flex gap-6 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{feature.stats.apy}</div>
                          <div className="text-xs text-gray-400">APY</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{feature.stats.protocols}</div>
                          <div className="text-xs text-gray-400">Protocols</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{feature.stats.optimization}</div>
                          <div className="text-xs text-gray-400">Optimization</div>
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="space-y-2">
                        {feature.benefits.slice(0, 2).map((benefit, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Feature Details */}
          <div className="lg:sticky lg:top-8">
            {currentFeature && (
              <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                {/* Header */}
                <div className={`bg-gradient-to-r ${currentFeature.color} p-6`}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-lg text-white">
                      {currentFeature.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{currentFeature.title}</h3>
                      <p className="text-white/80">{currentFeature.description}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* All Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Benefits</h4>
                    <div className="space-y-3">
                      {currentFeature.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-white">{currentFeature.stats.apy}</div>
                      <div className="text-sm text-gray-400">Average APY</div>
                    </div>
                    <div className="text-center p-4 bg-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-white">{currentFeature.stats.protocols}</div>
                      <div className="text-sm text-gray-400">Protocols</div>
                    </div>
                    <div className="text-center p-4 bg-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-white">{currentFeature.stats.optimization}</div>
                      <div className="text-sm text-gray-400">Optimization</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Real-World Applications</h3>
            <p className="text-gray-400">See how NapFi is revolutionizing different industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{useCase.icon}</div>
                  <h4 className="text-lg font-semibold text-white">{useCase.title}</h4>
                </div>
                <p className="text-gray-300 text-sm mb-4">{useCase.description}</p>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                  <div className="text-purple-400 font-semibold text-sm">{useCase.metrics}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
