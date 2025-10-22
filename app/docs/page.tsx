"use client"

import { useState } from "react"
import { Search, BookOpen, Code, Zap, Shield, Users, ChevronRight, ExternalLink, Copy, Check, Play, Terminal, FileText, GitBranch, Settings } from "lucide-react"
import Link from "next/link"

// Enhanced documentation data
const docSections = {
  "Getting Started": [
    {
      title: "Quick Start",
      slug: "quick-start",
      description: "Get up and running with NapFi in minutes",
      icon: <Zap className="w-5 h-5" />,
      difficulty: "Beginner",
      time: "5 min"
    },
    {
      title: "Installation",
      slug: "installation", 
      description: "Install NapFi SDK and dependencies",
      icon: <Code className="w-5 h-5" />,
      difficulty: "Beginner",
      time: "10 min"
    },
    {
      title: "Configuration",
      slug: "configuration",
      description: "Configure your NapFi environment",
      icon: <Settings className="w-5 h-5" />,
      difficulty: "Intermediate",
      time: "15 min"
    }
  ],
  "Smart Contracts": [
    {
      title: "VaultV3",
      slug: "vault-v3",
      description: "Core vault implementation (ERC-4626)",
      icon: <BookOpen className="w-5 h-5" />,
      difficulty: "Advanced",
      time: "30 min"
    },
    {
      title: "StrategyRouter", 
      slug: "strategy-router",
      description: "AI-powered fund allocation",
      icon: <Zap className="w-5 h-5" />,
      difficulty: "Advanced",
      time: "25 min"
    },
    {
      title: "VaultFactory",
      slug: "vault-factory", 
      description: "Deploy custom vaults",
      icon: <Code className="w-5 h-5" />,
      difficulty: "Advanced",
      time: "20 min"
    }
  ],
  "API Reference": [
    {
      title: "REST API",
      slug: "rest-api",
      description: "HTTP endpoints for integration",
      icon: <Code className="w-5 h-5" />,
      difficulty: "Intermediate",
      time: "20 min"
    },
    {
      title: "WebSocket",
      slug: "websocket",
      description: "Real-time data streams",
      icon: <Zap className="w-5 h-5" />,
      difficulty: "Intermediate",
      time: "15 min"
    },
    {
      title: "SDK Methods",
      slug: "sdk-methods",
      description: "JavaScript/TypeScript SDK",
      icon: <BookOpen className="w-5 h-5" />,
      difficulty: "Beginner",
      time: "25 min"
    }
  ],
  "Guides": [
    {
      title: "Creating Vaults",
      slug: "creating-vaults",
      description: "Build custom yield strategies",
      icon: <Users className="w-5 h-5" />,
      difficulty: "Advanced",
      time: "45 min"
    },
    {
      title: "AI Integration",
      slug: "ai-integration",
      description: "Integrate with NapFi Brain",
      icon: <Zap className="w-5 h-5" />,
      difficulty: "Advanced",
      time: "30 min"
    },
    {
      title: "Security Best Practices",
      slug: "security",
      description: "Secure your integrations",
      icon: <Shield className="w-5 h-5" />,
      difficulty: "Intermediate",
      time: "20 min"
    }
  ]
}

const codeExamples = {
  "vault-v3": {
    title: "VaultV3 Contract",
    description: "Core vault implementation following ERC-4626 standard",
    code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract VaultV3 is ERC4626, Ownable {
    address public immutable asset;
    address public strategy;
    uint256 public totalAssets;
    
    event StrategyUpdated(address indexed newStrategy);
    event AssetsDeposited(address indexed user, uint256 amount);
    
    constructor(address _asset) ERC4626(IERC20(_asset)) {
        asset = _asset;
    }
    
    function setStrategy(address _strategy) external onlyOwner {
        strategy = _strategy;
        emit StrategyUpdated(_strategy);
    }
    
    function _deposit(
        address caller,
        address receiver,
        uint256 assets,
        uint256 shares
    ) internal override {
        totalAssets += assets;
        emit AssetsDeposited(receiver, assets);
        super._deposit(caller, receiver, assets, shares);
    }
    
    function _withdraw(
        address caller,
        address receiver,
        address owner,
        uint256 assets,
        uint256 shares
    ) internal override {
        totalAssets -= assets;
        super._withdraw(caller, receiver, owner, assets, shares);
    }
}`,
    functions: [
      {
        name: "deposit",
        description: "Deposit assets into the vault and receive shares",
        parameters: [
          { name: "assets", type: "uint256", description: "Amount of assets to deposit" },
          { name: "receiver", type: "address", description: "Address to receive shares" }
        ],
        returns: "uint256 shares"
      },
      {
        name: "withdraw", 
        description: "Withdraw assets from the vault by burning shares",
        parameters: [
          { name: "assets", type: "uint256", description: "Amount of assets to withdraw" },
          { name: "receiver", type: "address", description: "Address to receive assets" },
          { name: "owner", type: "address", description: "Owner of the shares" }
        ],
        returns: "uint256 assets"
      },
      {
        name: "setStrategy",
        description: "Set the strategy contract for yield generation",
        parameters: [
          { name: "_strategy", type: "address", description: "Address of the strategy contract" }
        ],
        returns: "void"
      }
    ]
  }
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("Getting Started")
  const [activeItem, setActiveItem] = useState("quick-start")
  const [searchQuery, setSearchQuery] = useState("")
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [showPlayground, setShowPlayground] = useState(false)

  const handleCopyCode = async (code: string) => {
    await navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const filteredSections = Object.entries(docSections).map(([sectionName, items]) => ({
    name: sectionName,
    items: items.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0)

  const currentItem = Object.values(docSections)
    .flat()
    .find(item => item.slug === activeItem)

  const currentCodeExample = codeExamples[activeItem as keyof typeof codeExamples]

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/" className="text-purple-400 hover:text-purple-300 transition-colors">
              ← Back to Home
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">NapFi Documentation</h1>
          <p className="text-gray-400 text-lg">
            Complete guides, API references, and examples for building with NapFi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Navigation */}
              <nav className="space-y-4">
                {filteredSections.map((section) => (
                  <div key={section.name}>
                    <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                      {section.name}
                    </h3>
                    <div className="space-y-1">
                      {section.items.map((item) => (
                        <button
                          key={item.slug}
                          onClick={() => {
                            setActiveItem(item.slug)
                            setActiveSection(section.name)
                          }}
                          className={`w-full text-left px-3 py-3 rounded-lg text-sm transition-all duration-200 flex items-center gap-3 ${
                            activeItem === item.slug
                              ? "bg-purple-600 text-white"
                              : "text-gray-300 hover:bg-gray-800 hover:text-white"
                          }`}
                        >
                          {item.icon}
                          <div className="flex-1">
                            <div className="font-medium">{item.title}</div>
                            <div className="text-xs opacity-75 mt-1">{item.description}</div>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <span className={`px-2 py-1 rounded ${
                              item.difficulty === 'Beginner' ? 'bg-green-900 text-green-300' :
                              item.difficulty === 'Intermediate' ? 'bg-yellow-900 text-yellow-300' :
                              'bg-red-900 text-red-300'
                            }`}>
                              {item.difficulty}
                            </span>
                            <span className="text-gray-400">{item.time}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
              {/* Content Header */}
              <div className="px-6 py-4 border-b border-gray-800 bg-gray-800/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-white">{currentItem?.title}</h1>
                    <p className="text-gray-400 mt-1">{currentItem?.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setShowPlayground(!showPlayground)}
                      className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600 transition-colors flex items-center gap-1"
                    >
                      <Play className="w-3 h-3" />
                      Playground
                    </button>
                    <button className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600 transition-colors flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      View Source
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6">
                {currentCodeExample ? (
                  <div className="space-y-6">
                    {/* Code Example */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-white">Contract Implementation</h3>
                        <button
                          onClick={() => handleCopyCode(currentCodeExample.code)}
                          className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600 transition-colors"
                        >
                          {copiedCode === currentCodeExample.code ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                          {copiedCode === currentCodeExample.code ? "Copied!" : "Copy"}
                        </button>
                      </div>
                      <div className="bg-gray-950 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-300 font-mono">
                          <code>{currentCodeExample.code}</code>
                        </pre>
                      </div>
                    </div>

                    {/* Functions */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Functions</h3>
                      <div className="space-y-4">
                        {currentCodeExample.functions.map((func, index) => (
                          <div key={index} className="bg-gray-800 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-purple-400 font-mono text-sm">{func.name}</span>
                              <span className="text-gray-400 text-sm">({func.returns})</span>
                            </div>
                            <p className="text-gray-300 text-sm mb-3">{func.description}</p>
                            <div>
                              <h4 className="text-sm font-medium text-gray-400 mb-2">Parameters:</h4>
                              <div className="space-y-1">
                                {func.parameters.map((param, paramIndex) => (
                                  <div key={paramIndex} className="flex gap-4 text-sm">
                                    <span className="text-purple-400 font-mono w-20">{param.name}</span>
                                    <span className="text-blue-400 font-mono w-16">{param.type}</span>
                                    <span className="text-gray-300">{param.description}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 leading-relaxed">{currentItem?.content}</p>
                    
                    {/* Example content for different sections */}
                    {activeItem === "quick-start" && (
                      <div className="mt-6 space-y-4">
                        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                          <h4 className="text-blue-400 font-semibold mb-2">Quick Example</h4>
                          <div className="bg-gray-950 rounded p-3">
                            <pre className="text-sm text-gray-300">
{`// Install NapFi SDK
npm install @napfi/sdk

// Initialize the client
import { NapFiClient } from '@napfi/sdk';

const client = new NapFiClient({
  network: 'optimism',
  apiKey: 'your-api-key'
});

// Create a new vault
const vault = await client.vaults.create({
  name: 'My Yield Vault',
  asset: 'USDC',
  strategy: 'aave-optimizer'
});`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeItem === "rest-api" && (
                      <div className="mt-6 space-y-4">
                        <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                          <h4 className="text-green-400 font-semibold mb-2">API Endpoints</h4>
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">GET</span>
                              <code className="text-gray-300">/api/v1/vaults</code>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">POST</span>
                              <code className="text-gray-300">/api/v1/vaults</code>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="px-2 py-1 bg-yellow-600 text-white text-xs rounded">PUT</span>
                              <code className="text-gray-300">/api/v1/vaults/&#123;id&#125;</code>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Interactive Playground */}
                {showPlayground && (
                  <div className="mt-8 border-t border-gray-800 pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Terminal className="w-5 h-5 text-purple-400" />
                      <h3 className="text-lg font-semibold text-white">Interactive Playground</h3>
                    </div>
                    <div className="bg-gray-950 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex gap-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-400 text-sm">NapFi Playground</span>
                      </div>
                      <div className="bg-black rounded p-3 font-mono text-sm">
                        <div className="text-green-400">$ npm install @napfi/sdk</div>
                        <div className="text-gray-300">✓ Installing NapFi SDK...</div>
                        <div className="text-green-400">$ npx napfi init</div>
                        <div className="text-gray-300">✓ Initializing NapFi project...</div>
                        <div className="text-green-400">$ npx napfi deploy --network optimism</div>
                        <div className="text-gray-300">✓ Deploying to Optimism...</div>
                        <div className="text-green-400">$ </div>
                        <div className="inline-block w-2 h-4 bg-green-400 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
