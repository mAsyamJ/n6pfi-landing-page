"use client"

import { useState, useEffect } from "react"
import type React from "react"

// Badge component for consistency
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-[#1a1a2e] shadow-[0px_0px_20px_rgba(147,51,234,0.2)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(147,51,234,0.3)]">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#e0e0e0] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

export default function DocumentationSection() {
  const [activeCard, setActiveCard] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)

  const cards = [
    {
      title: "AI-Optimized Routing",
      description: "NapFi Brain automatically reallocates liquidity\nto the best-performing strategies.",
      image: "/modern-dashboard-interface-with-data-visualization.jpg",
    },
    {
      title: "Revenue Tokenization",
      description: "Transform royalties and subscriptions\ninto yield-bearing ERC-4626 vaults.",
      image: "/analytics-dashboard.png",
    },
    {
      title: "Fractional Ownership",
      description: "Enable fans and DAOs to co-own\nyield streams via ERC-1155 tokens.",
      image: "/team-collaboration-interface-with-shared-workspace.jpg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length)
      setAnimationKey((prev) => prev + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [cards.length])

  const handleCardClick = (index: number) => {
    setActiveCard(index)
    setAnimationKey((prev) => prev + 1)
  }

  return (
    <div className="w-full border-b border-[rgba(147,51,234,0.1)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(147,51,234,0.1)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4 shadow-none">
          <Badge
            icon={
              <div className="w-[10.50px] h-[10.50px] outline outline-[1.17px] outline-[#e0e0e0] outline-offset-[-0.58px] rounded-full"></div>
            }
            text="Core Features"
          />
          <div className="self-stretch text-center flex justify-center flex-col text-[#f0f0f0] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Intelligent Yield Infrastructure
          </div>
          <div className="self-stretch text-center text-[#c0c0c0] text-base font-normal leading-7 font-sans">
            Explore AI-optimized routing, revenue tokenization, and fractional ownership
            <br />
            all in one modular platform.
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="self-stretch px-4 md:px-9 overflow-hidden flex justify-start items-center">
        <div className="flex-1 py-8 md:py-11 flex flex-col md:flex-row justify-start items-center gap-6 md:gap-12">
          {/* Left Column - Feature Cards */}
          <div className="w-full md:w-auto md:max-w-[400px] flex flex-col justify-center items-center gap-4 order-2 md:order-1">
            {cards.map((card, index) => {
              const isActive = index === activeCard

              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`w-full overflow-hidden flex flex-col justify-start items-start transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[rgba(147,51,234,0.1)] shadow-[0px_0px_20px_rgba(147,51,234,0.15),inset_0px_0px_0px_1px_rgba(147,51,234,0.2)]"
                      : "border border-[rgba(147,51,234,0.1)]"
                  }`}
                >
                  <div
                    className={`w-full h-0.5 bg-[rgba(147,51,234,0.1)] overflow-hidden ${isActive ? "opacity-100" : "opacity-0"}`}
                  >
                    <div
                      key={animationKey}
                      className="h-0.5 bg-gradient-to-r from-[#9333ea] to-[#7c3aed] animate-[progressBar_5s_linear_forwards] will-change-transform"
                    />
                  </div>
                  <div className="px-6 py-5 w-full flex flex-col gap-2">
                    <div className="self-stretch flex justify-center flex-col text-[#f0f0f0] text-sm font-semibold leading-6 font-sans">
                      {card.title}
                    </div>
                    <div className="self-stretch text-[#c0c0c0] text-[13px] font-normal leading-[22px] font-sans whitespace-pre-line">
                      {card.description}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-auto rounded-lg flex flex-col justify-center items-center gap-2 order-1 md:order-2 md:px-0 px-[00]">
            <div className="w-full md:w-[580px] h-[250px] md:h-[420px] bg-[#1a1a2e] shadow-[0px_0px_30px_rgba(147,51,234,0.2),inset_0px_0px_0px_1px_rgba(147,51,234,0.1)] overflow-hidden rounded-lg flex flex-col justify-start items-start">
              <div
                className={`w-full h-full transition-all duration-300 ${
                  activeCard === 0
                    ? "bg-gradient-to-br from-[#1a1a2e] to-[#2a2a4e]"
                    : activeCard === 1
                      ? "bg-gradient-to-br from-[#1a1a2e] to-[#2a2a4e]"
                      : "bg-gradient-to-br from-[#1a1a2e] to-[#2a2a4e]"
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progressBar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  )
}
