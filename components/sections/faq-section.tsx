"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What is NapFi and how does it work?",
    answer:
      "NapFi is an AI-powered decentralized finance (DeFi) and creative finance protocol built on the Optimism Layer 2 network. It operates as a yield aggregator and Infrastructure-as-a-Service (IaaS) that tokenizes creator revenue streams ,  such as royalties, ads, or streams ,  into ERC-4626 vaults and strategy ownership NFTs. Through a modular architecture called NapV2, users deposit assets into vaults, AI routes those assets to optimal strategies across Aave, Curve, or Compound, and creators can tokenize their earnings transparently. The result: Creators gain direct control and fair revenue splits, fans earn yield and rewards by staking in creator vaults, and institutions access auditable, on-chain data and standardized APIs for financial integration.",
  },
  {
    question: "How does the AI optimization work?",
    answer:
      "NapFi's AI layer ,  called NapFi Brain , uses the Model Context Protocol (MCP) to securely connect off-chain intelligence to on-chain vault data. It continuously scans metrics such as APY, TVL, volatility, and market conditions to dynamically rebalance vault allocations. For example, a 'Music Vault' may allocate 60% of assets to Aave and 40% to Curve for stable returns. If volatility spikes, NapFi Brain automatically adjusts exposure to safer pools. Each decision is transparent, explainable, and user-facing through the interface: 'This vault yields 8% from Aave with a 2% impermanent loss risk.' Unlike traditional aggregators, NapV2's AI layer learns user behavior, tracks platform analytics (e.g., YouTube, Spotify), and explains every yield strategy in human-readable terms.",
  },
  {
    question: "Can I integrate NapFi with my existing protocols?",
    answer:
      "Yes. NapFi is fully modular and standards-based, allowing seamless integration through its SDK and API suite. You can plug NapFi into DeFi protocols (via ERC-4626 vault adapters and StrategyRouter.sol), creator platforms (Spotify, YouTube, Twitch) through MCP SDK integration, and enterprise dashboards for data analytics and engagement tracking. Developers can deploy new vaults using VaultDeFi.sol or customize strategies through StrategyOwnership.sol, using ERC-721/1155/2981 standards for interoperability. NapFi's open IaaS model supports white-label deployments, making it ideal for platforms seeking embedded yield or tokenized revenue solutions.",
  },
  {
    question: "How does revenue tokenization work?",
    answer:
      "NapFi turns digital income streams into tokenized financial instruments using layered standards: ERC-4626 Vaults represent deposits and yield-bearing positions, ERC-1155 Tokens represent fractionalized royalty or ad-revenue shares, ERC-2981 ensures automatic royalty payouts to rightful owners, and ERC-721 (StrategyOwnership.sol) gives strategy creators unique, tradable ownership of vault logic. Example: A 'stTAYLOR' vault tokenizes Spotify royalties. Fans stake USDC to earn yield; artists retain majority revenue; labels own strategy NFTs to control fee splits , all governed by smart contracts. This model builds a transparent, gamified economy where creators, fans, and investors share aligned incentives.",
  },
  {
    question: "What security measures does NapFi have?",
    answer:
      "Security is core to NapFi's design. All contracts follow OpenZeppelin standards and undergo unit and fuzz testing using Foundry, timelock governance to prevent admin exploits, AI risk scoring for real-time vault monitoring, and MEV-resistant adapters for yield routing. MCP Trusted Execution Environments (TEEs) provide secure AI data exchange. Audits are scheduled before mainnet release, and optional insurance coverage via Nexus Mutual will protect against major DeFi exploits or oracle failures. In short, NapFi is engineered for auditability, transparency, and investor-grade reliability.",
  },
  {
    question: "How do I get started with NapFi?",
    answer:
      "For Users & Fans: Connect your wallet (MetaMask, WalletConnect) on app.napfi.io, browse available vaults (e.g., 'stTAYLOR', 'stPEWDS') via the AI scanner, and deposit assets (USDC/ETH) to earn 5–12% APY and unlock creator perks. For Creators & Platforms: Apply for the NapFi Pilot Program to tokenize your revenue stream, use MusicVaultFactory.sol or StreamVaultFactory.sol to deploy your vault, and manage splits and royalties via your Strategy NFT dashboard. For Developers & Institutions: Integrate NapFi SDK ($99/mo) for white-label vaults, access analytics via NapFi API (/api/apy, /api/strategy), and join the IaaS partner program to deploy NapFi nodes or enterprise vaults.",
  },
  {
    question: "How does NapV2 architecture solve DeFi yield fragmentation?",
    answer:
      "Traditional aggregators struggle with vault overload and capital inefficiency, too many vaults, too little clarity. NapFi's NapV2 architecture fixes this by introducing a layered yield aggregation system: Vault Layer (ERC-4626) provides standardized, composable vaults for any asset or revenue type. Router Layer (NapV2 Strategy Router) uses AI-driven allocation logic that auto-compounds across protocols. Ownership Layer (ERC-721 Strategy NFTs) enables decentralized control and fee sharing for strategy developers. Analytics Layer (EAS + MCP) provides transparent, explainable performance data for every vault. This architecture eliminates yield fragmentation, standardizes vault behavior, and allows AI agents to autonomously manage, optimize, and explain on-chain strategies, all while keeping governance decentralized.",
  },
]



export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="w-full flex justify-center items-start border-b border-[rgba(147,51,234,0.1)]">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#f0f0f0] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Frequently Asked Questions
          </div>
          <div className="w-full text-[#c0c0c0] text-base font-normal leading-7 font-sans">
            Learn more about NapFi's architecture,
            <br className="hidden md:block" />
            features, and how to get started.
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index)

              return (
                <div key={index} className="w-full border-b border-[rgba(147,51,234,0.1)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(147,51,234,0.05)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#f0f0f0] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDown
                        className={`w-6 h-6 text-[#a0a0a0] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#c0c0c0] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
