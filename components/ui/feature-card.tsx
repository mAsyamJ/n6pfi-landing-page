"use client"

import type React from "react"

export default function FeatureCard({
  title,
  description,
  isActive,
  progress,
  onClick,
}: {
  title: string
  description: string
  isActive: boolean
  progress: number
  onClick: () => void
}) {
  return (
    <div
      className={`w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 last:border-b-0 ${
        isActive
          ? "bg-[rgba(147,51,234,0.1)] shadow-[0px_0px_20px_rgba(147,51,234,0.15),inset_0px_0px_0px_1px_rgba(147,51,234,0.2)]"
          : "border-l-0 border-r-0 md:border border-[rgba(147,51,234,0.1)]"
      }`}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute top-0 left-0 w-full h-0.5 bg-[rgba(147,51,234,0.2)]">
          <div
            className="h-full bg-gradient-to-r from-[#9333ea] to-[#7c3aed] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="self-stretch flex justify-center flex-col text-[#f0f0f0] text-sm md:text-sm font-semibold leading-6 md:leading-6 font-sans">
        {title}
      </div>
      <div className="self-stretch text-[#c0c0c0] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px] font-sans">
        {description}
      </div>
    </div>
  )
}