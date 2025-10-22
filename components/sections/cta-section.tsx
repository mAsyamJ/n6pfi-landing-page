"use client"

import { useState } from "react"

export default function CTASection() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  return (
    <div className="w-full relative overflow-hidden flex flex-col justify-center items-center gap-2">
      {/* Content */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-12 border-t border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6 relative z-10">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full relative">
            {Array.from({ length: 300 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-4 w-full rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                style={{
                  top: `${i * 16 - 120}px`,
                  left: "-100%",
                  width: "300%",
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[586px] px-6 py-5 md:py-8 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-6 relative z-20">
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="self-stretch text-center flex justify-center flex-col text-white text-3xl md:text-5xl font-semibold leading-tight md:leading-[56px] font-sans tracking-tight">
              Ready to Build the Future?
            </div>
            <div className="self-stretch text-center text-white text-base leading-7 font-sans font-medium">
              Join thousands of developers and creators building the next generation of DeFi infrastructure.
            </div>
          </div>
          <div className="w-full max-w-[497px] flex flex-col justify-center items-center gap-12">
            <div className="flex justify-center items-center gap-4 flex-wrap">
              <CTAButton
                text="Start Building"
                variant="primary"
                isHovered={hoveredButton === "start-building"}
                onHover={() => setHoveredButton("start-building")}
                onLeave={() => setHoveredButton(null)}
                onClick={() => console.log("Start Building clicked")}
              />
              <CTAButton
                text="View Documentation"
                variant="secondary"
                isHovered={hoveredButton === "documentation"}
                onHover={() => setHoveredButton("documentation")}
                onLeave={() => setHoveredButton(null)}
                onClick={() => console.log("View Documentation clicked")}
              />
            </div>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              <CTAButton
                text="Join Developers"
                variant="secondary"
                isHovered={hoveredButton === "developers"}
                onHover={() => setHoveredButton("developers")}
                onLeave={() => setHoveredButton(null)}
                onClick={() => console.log("Join Developers clicked")}
              />
              <CTAButton
                text="Join Community"
                variant="secondary"
                isHovered={hoveredButton === "community"}
                onHover={() => setHoveredButton("community")}
                onLeave={() => setHoveredButton(null)}
                onClick={() => console.log("Join Community clicked")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CTAButton({
  text,
  variant,
  isHovered,
  onHover,
  onLeave,
  onClick,
}: {
  text: string
  variant: "primary" | "secondary"
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`h-10 px-8 py-[6px] relative overflow-hidden rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 ${
        variant === "primary"
          ? `${
              isHovered
                ? "bg-[#2A2520] shadow-[0px_0px_15px_rgba(147,51,234,0.3)]"
                : "bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset]"
            }`
          : `${
              isHovered
                ? "bg-[rgba(147,51,234,0.2)] shadow-[0px_0px_15px_rgba(147,51,234,0.2)]"
                : "bg-transparent border border-[rgba(147,51,234,0.3)]"
            }`
      }`}
    >
      <div className="w-44 h-[41px] absolute left-0 top-0 bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
      <div className="flex flex-col justify-center text-white text-[13px] font-medium leading-5 font-sans relative z-10">
        {text}
      </div>
    </button>
  )
}
