"use client"

import { useState } from "react"
import { Search, BookOpen, Code, Zap, Shield, Users, ChevronRight, ExternalLink, Copy, Check } from "lucide-react"
import type React from "react"

// Documentation data structure
const docSections = {
  "Getting Started": [
    {
      title: "Quick Start",
      slug: "quick-start",
      description: "Get up and running with NapFi in minutes",
      icon: <Zap className="w-5 h-5" />,
      content: "Learn how to deploy your first vault and start earning yields."
    },
    {
      title: "Installation",
      slug: "installation", 
      description: "Install NapFi SDK and dependencies",
      icon: <Code className="w-5 h-5" />,
      content: "Step-by-step installation guide for developers."
    },
    {
      title: "Configuration",
      slug: "configuration",
      description: "Configure your NapFi environment",
      icon: <Shield className="w-5 h-5" />,
      content: "Environment setup and security configuration."
    }
  ],
  "Smart Contracts": [
    {
      title: "VaultV3",
      slug: "vault-v3",
      description: "Core vault implementation (ERC-4626)",
      icon: <BookOpen className="w-5 h-5" />,
      content: "The main vault contract for managing deposits and yield generation."
    },
    {
      title: "StrategyRouter", 
      slug: "strategy-router",
      description: "AI-powered fund allocation",
      icon: <Zap className="w-5 h-5" />,
      content: "Intelligent routing of funds across multiple DeFi protocols."
    },
    {
      title: "VaultFactory",
      slug: "vault-factory", 
      description: "Deploy custom vaults",
      icon: <Code className="w-5 h-5" />,
      content: "Factory contract for creating new vault instances."
    }
  ],
  "API Reference": [
    {
      title: "REST API",
      slug: "rest-api",
      description: "HTTP endpoints for integration",
      icon: <Code className="w-5 h-5" />,
      content: "Complete REST API documentation with examples."
    },
    {
      title: "WebSocket",
      slug: "websocket",
      description: "Real-time data streams",
      icon: <Zap className="w-5 h-5" />,
      content: "Live updates for vault performance and events."
    },
    {
      title: "SDK Methods",
      slug: "sdk-methods",
      description: "JavaScript/TypeScript SDK",
      icon: <BookOpen className="w-5 h-5" />,
      content: "Client library methods and utilities."
    }
  ],
  "Guides": [
    {
      title: "Creating Vaults",
      slug: "creating-vaults",
      description: "Build custom yield strategies",
      icon: <Users className="w-5 h-5" />,
      content: "Learn how to create and deploy custom vaults."
    },
    {
      title: "AI Integration",
      slug: "ai-integration",
      description: "Integrate with NapFi Brain",
      icon: <Zap className="w-5 h-5" />,
      content: "Connect your applications to NapFi's AI optimization."
    },
    {
      title: "Security Best Practices",
      slug: "security",
      description: "Secure your integrations",
      icon: <Shield className="w-5 h-5" />,
      content: "Security guidelines and best practices."
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

contract VaultV3 is ERC4626 {
    address public immutable asset;
    address public strategy;
    
    constructor(address _asset) ERC4626(IERC20(_asset)) {
        asset = _asset;
    }
    
    function setStrategy(address _strategy) external onlyOwner {
        strategy = _strategy;
    }
    
    function _deposit(
        address caller,
        address receiver,
        uint256 assets,
        uint256 shares
    ) internal override {
        // Deposit logic here
        super._deposit(caller, receiver, assets, shares);
    }
}`,
    functions: [
      {
        name: "deposit",
        description: "Deposit assets into the vault",
        parameters: [
          { name: "assets", type: "uint256", description: "Amount of assets to deposit" },
          { name: "receiver", type: "address", description: "Address to receive shares" }
        ],
        returns: "uint256 shares"
      },
      {
        name: "withdraw", 
        description: "Withdraw assets from the vault",
        parameters: [
          { name: "assets", type: "uint256", description: "Amount of assets to withdraw" },
          { name: "receiver", type: "address", description: "Address to receive assets" },
          { name: "owner", type: "address", description: "Owner of the shares" }
        ],
        returns: "uint256 assets"
      }
    ]
  }
}

export default function BeautifulDocsSection() {
  const [activeSection, setActiveSection] = useState("Getting Started")
  const [activeItem, setActiveItem] = useState("quick-start")
  const [searchQuery, setSearchQuery] = useState("")
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

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
    <div className="w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Documentation
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-6">
            Comprehensive guides, API references, and examples to help you build with NapFi
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="/docs" 
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              View Full Documentation
            </a>
            <a 
              href="/docs" 
              className="px-6 py-3 border border-purple-600 text-purple-400 rounded-lg hover:bg-purple-600/10 transition-colors flex items-center gap-2"
            >
              <Code className="w-4 h-4" />
              API Reference
            </a>
          </div>
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
              <nav className="space-y-2">
                {filteredSections.map((section) => (
                  <div key={section.name}>
                    <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">
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
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${
                            activeItem === item.slug
                              ? "bg-purple-600 text-white"
                              : "text-gray-300 hover:bg-gray-800 hover:text-white"
                          }`}
                        >
                          {item.icon}
                          <span className="flex-1">{item.title}</span>
                          <ChevronRight className="w-4 h-4" />
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
                    <button className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600 transition-colors">
                      <ExternalLink className="w-3 h-3 mr-1 inline" />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
