"use client"

import type React from "react"

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
    <div className="w-full py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            How It Works
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-400">
            A step-by-step guide to tokenizing creative income with NapFi.
          </p>
        </div>
        <div className="mt-12 space-y-8">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
                {/* Text content - alternates left/right */}
                <div className={`flex-1 lg:max-w-md ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Visual representation - alternates right/left */}
                <div className={`flex-1 lg:max-w-md ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl p-6 border border-purple-500/30">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">
                          {index + 1}
                        </span>
                      </div>
                      <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000"
                          style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default HowItWorksSection