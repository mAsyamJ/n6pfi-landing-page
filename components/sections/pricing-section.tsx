"use client"

import { useState } from "react"
import { DollarSign } from "lucide-react"

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("annually")

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(147,51,234,0.1)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4 shadow-none">
          {/* Pricing Badge */}
          <div className="px-[14px] py-[6px] bg-[#1a1a2e] shadow-[0px_0px_20px_rgba(147,51,234,0.2)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(147,51,234,0.3)]">
            <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Billing Toggle Section */}
      <div className="self-stretch px-6 md:px-16 py-9 relative flex justify-center items-center gap-4">
        {/* Horizontal line */}
        <div className="w-full max-w-[1060px] h-0 absolute left-1/2 transform -translate-x-1/2 top-[63px] border-t border-[rgba(147,51,234,0.1)] z-0"></div>

        {/* Toggle Container */}
        <div className="p-3 relative bg-[rgba(147,51,234,0.05)] border border-[rgba(147,51,234,0.1)] backdrop-blur-[44px] flex justify-center items-center rounded-lg z-20">
          <div className="p-[2px] bg-[rgba(147,51,234,0.1)] shadow-[0px_1px_0px_rgba(147,51,234,0.2)] rounded-[99px] border-[0.5px] border-[rgba(147,51,234,0.2)] flex justify-center items-center gap-[2px] relative">
            <div
              className={`absolute top-[2px] w-[calc(50%-1px)] h-[calc(100%-4px)] bg-gradient-to-r from-[#9333ea] to-[#7c3aed] shadow-[0px_2px_4px_rgba(147,51,234,0.3)] rounded-[99px] transition-all duration-300 ease-in-out ${
                billingPeriod === "annually" ? "left-[2px]" : "right-[2px]"
              }`}
            />

            <button
              onClick={() => setBillingPeriod("annually")}
              className="px-4 py-1 rounded-[99px] flex justify-center items-center gap-2 transition-colors duration-300 relative z-10 flex-1"
            >
              <div
                className={`text-[13px] font-medium leading-5 font-sans transition-colors duration-300 ${
                  billingPeriod === "annually" ? "text-[#f0f0f0]" : "text-[#a0a0a0]"
                }`}
              >
                Annually
              </div>
            </button>

            <button
              onClick={() => setBillingPeriod("monthly")}
              className="px-4 py-1 rounded-[99px] flex justify-center items-center gap-2 transition-colors duration-300 relative z-10 flex-1"
            >
              <div
                className={`text-[13px] font-medium leading-5 font-sans transition-colors duration-300 ${
                  billingPeriod === "monthly" ? "text-[#f0f0f0]" : "text-[#a0a0a0]"
                }`}
              >
                Monthly
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
