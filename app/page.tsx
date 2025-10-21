"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

import HowItWorksSection from "../components/sections/how-it-works-section"
import UseCasesSection from "../components/sections/use-cases-section"
import VaultShowcaseSection from "../components/sections/vault-showcase-section"

import EffortlessIntegration from "../components/sections/effortless-integration"
import NumbersThatSpeak from "../components/sections/numbers-that-speak"
import DocumentationSection from "../components/sections/documentation-section"
import TestimonialsSection from "../components/sections/testimonials-section"
import FAQSection from "../components/sections/faq-section"
import PricingSection from "../components/sections/pricing-section"
import CTASection from "../components/sections/cta-section"
import FooterSection from "../components/sections/footer-section"
import { TrendingUp, Grid, Layers, Link } from "lucide-react"
import FeatureCard from "../components/ui/feature-card"

// Reusable Badge Component
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

function HeroButton({
  text,
  variant,
  onClick,
}: {
  text: string
  variant: "primary" | "secondary"
  onClick: () => void
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`h-10 sm:h-11 md:h-12 px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-[6px] relative overflow-hidden rounded-full flex justify-center items-center transition-all duration-300 ${
        variant === "primary"
          ? `bg-gradient-to-r from-[#9333ea] to-[#7c3aed] shadow-[0px_0px_30px_rgba(147,51,234,0.4)] ${
              isHovered ? "shadow-[0px_0px_40px_rgba(147,51,234,0.6)] scale-105 animate-shimmer" : ""
            }`
          : `border border-[rgba(147,51,234,0.4)] bg-transparent hover:bg-[rgba(147,51,234,0.1)] ${
              isHovered ? "shadow-[0px_0px_20px_rgba(147,51,234,0.3)] scale-105 animate-shimmer" : ""
            }`
      }`}
    >
      <div className="w-20 sm:w-24 md:w-28 lg:w-44 h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
      <div className="flex flex-col justify-center text-white text-sm sm:text-base md:text-[15px] font-medium leading-5 font-sans relative z-10">
        {text}
      </div>
    </button>
  )
}

export default function LandingPage() {
  const [activeCard, setActiveCard] = useState(0)
  const [progress, setProgress] = useState(0)
  const mountedRef = useRef(true)

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const progressInterval = setInterval(() => {
      if (!mountedRef.current) return

      setProgress((prev) => {
        if (prev >= 100) {
          if (mountedRef.current) {
            setActiveCard((current) => (current + 1) % 3)
          }
          return 0
        }
        return prev + 2
      })
    }, 100)

    return () => {
      clearInterval(progressInterval)
      mountedRef.current = false
    }
  }, [isMounted])

  useEffect(() => {
    return () => {
      mountedRef.current = false
    }
  }, [])

  const handleCardClick = (index: number) => {
    if (!mountedRef.current) return
    setActiveCard(index)
    setProgress(0)
  }

  const getDashboardContent = () => {
    switch (activeCard) {
      case 0:
        return <div className="text-[#a0a0a0] text-sm">AI-Optimized Yield Routing</div>
      case 1:
        return <div className="text-[#a0a0a0] text-sm">Revenue Tokenization Dashboard</div>
      case 2:
        return <div className="text-[#a0a0a0] text-sm">Fractional Ownership Management</div>
      default:
        return <div className="text-[#a0a0a0] text-sm">AI-Optimized Yield Routing</div>
    }
  }

  return (
    <div className="w-full min-h-screen relative bg-[#0a0a14] overflow-x-hidden flex flex-col justify-start items-center animated-grid-background">
      <div className="glow-container">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>
      </div>

      <div className="relative flex flex-col justify-start items-center w-full z-10">
        {/* Main container with proper margins */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(147,51,234,0.15)] shadow-[1px_0px_0px_rgba(147,51,234,0.1)] z-0"></div>

          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(147,51,234,0.15)] shadow-[1px_0px_0px_rgba(147,51,234,0.1)] z-0"></div>

          <div className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(147,51,234,0.1)] flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-10">
            {/* Navigation */}
            <div className="w-full h-12 sm:h-14 md:h-16 lg:h-[84px] absolute left-0 top-0 flex justify-center items-center z-20 px-6 sm:px-8 md:px-12 lg:px-0">
              <div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-[42px] border-t border-[rgba(147,51,234,0.1)] shadow-[0px_1px_0px_rgba(147,51,234,0.05)]"></div>

              <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[700px] lg:w-[700px] h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-3 sm:px-4 md:px-4 pr-2 sm:pr-3 bg-[rgba(20,20,40,0.6)] backdrop-blur-md shadow-[0px_0px_20px_rgba(147,51,234,0.15),inset_0px_0px_0px_1px_rgba(147,51,234,0.2)] overflow-hidden rounded-[50px] flex justify-between items-center relative z-30">
                <div className="flex justify-center items-center">
                  <div className="flex justify-start items-center">
                    <div className="flex flex-col justify-center text-[#f0f0f0] text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-5 font-sans">
                      NapFi
                    </div>
                  </div>
                  <div className="pl-3 sm:pl-4 md:pl-5 lg:pl-5 flex justify-start items-start hidden sm:flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4">
                    
                    <div className="flex justify-start items-center">
                      <Link href="/doc-dev">
                        <div className="flex flex-col justify-center text-[rgba(200,200,220,0.7)] text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                          Developer Docs
                        </div>
                      </Link>
                    </div>
                    <div className="flex justify-start items-center">
                      <Link href="/doc-user">
                        <div className="flex flex-col justify-center text-[rgba(200,200,220,0.7)] text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                          User Docs
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="h-6 sm:h-7 md:h-8 flex justify-start items-start gap-2 sm:gap-3">
                  <div className="px-2 sm:px-3 md:px-[14px] py-1 sm:py-[6px] bg-[#f0f0f0] shadow-[0px_0px_15px_rgba(147,51,234,0.2)] overflow-hidden rounded-full flex justify-center items-center">
                    <div className="flex flex-col justify-center text-[#0a0a14] text-xs md:text-[13px] font-medium leading-5 font-sans">
                      Log in
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Section */}
            <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0">
              <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                  <div className="w-full max-w-[748.71px] lg:w-[748.71px] text-center flex justify-center flex-col text-[#f0f0f0] text-[24px] xs:text-[28px] sm:text-[36px] md:text-[52px] lg:text-[80px] font-normal leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-24 font-serif px-2 sm:px-4 md:px-0 animate-gradient-text">
                    The Future of Creative Economies,
                    <br />
                    Powered by DeFi
                  </div>
                  <div className="w-full max-w-[506.08px] lg:w-[506.08px] text-center flex justify-center flex-col text-[rgba(200,200,220,0.8)] sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm">
                    Tokenize your music, art, and content. Empower your fans, and unlock new revenue streams.
                  </div>
                </div>
              </div>

              <div className="w-full max-w-[497px] lg:w-[497px] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                <div className="backdrop-blur-[8.25px] flex justify-center items-center gap-3 sm:gap-4 flex-wrap">
                  <HeroButton
                    text="Explore Vaults"
                    variant="primary"
                    onClick={() => console.log("Explore Vaults clicked")}
                  />
                  <HeroButton
                    text="Become a Creator"
                    variant="secondary"
                    onClick={() => console.log("Become a Creator clicked")}
                  />
                </div>
              </div>

              <div className="absolute top-[232px] sm:top-[248px] md:top-[264px] lg:top-[320px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
                <img
                  src="/patterns/mask-group-pattern.svg"
                  alt=""
                  className="w-[936px] sm:w-[1404px] md:w-[2106px] lg:w-[2808px] h-auto opacity-20 sm:opacity-25 md:opacity-30 mix-blend-screen"
                  style={{
                    filter: "hue-rotate(280deg) saturate(1.2) brightness(0.8)",
                  }}
                />
              </div>

              <div className="w-full max-w-[960px] lg:w-[960px] pt-2 sm:pt-4 pb-6 sm:pb-8 md:pb-10 px-2 sm:px-4 md:px-6 lg:px-11 flex flex-col justify-center items-center gap-2 relative z-5 my-8 sm:my-12 md:my-16 lg:my-16 mb-0 lg:pb-0">
                <div className="w-full max-w-[960px] lg:w-[960px] h-[200px] sm:h-[280px] md:h-[450px] lg:h-[695.55px] bg-[#1a1a2e] shadow-[0px_0px_30px_rgba(147,51,234,0.2),inset_0px_0px_0px_1px_rgba(147,51,234,0.1)] overflow-hidden rounded-[6px] sm:rounded-[8px] lg:rounded-[9.06px] flex flex-col justify-start items-start">
                  {/* Dashboard Content */}
                  <div className="self-stretch flex-1 flex justify-start items-start">
                    {/* Main Content */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="relative w-full h-full overflow-hidden">
                        {/* Product Image 1 - AI-Optimized Yield Routing */}
                        <div
                          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                            activeCard === 0 ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
                          }`}
                        >
                          <img
                            src="/images/dsadsadsa.jpg.jpeg"
                            alt="AI Yield Routing Dashboard"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Image 2 - Revenue Tokenization */}
                        <div
                          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                            activeCard === 1 ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
                          }`}
                        >
                          <img
                            src="/images/analytics-dashboard-with-charts-graphs-and-data-vi.jpg"
                            alt="Revenue Tokenization Dashboard"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Image 3 - Fractional Ownership */}
                        <div
                          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                            activeCard === 2 ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
                          }`}
                        >
                          <img
                            src="/images/data-visualization-dashboard-with-interactive-char.jpg"
                            alt="Fractional Ownership Dashboard"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="self-stretch border-t border-[rgba(147,51,234,0.1)] border-b border-[rgba(147,51,234,0.1)] flex justify-center items-start">
                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                  {/* Left decorative pattern */}
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(147,51,234,0.08)] outline-offset-[-0.25px]"
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
                  {/* Feature Cards */}
                  <FeatureCard
                    title="AI-Optimized Yield Routing"
                    description="Automatically reallocate liquidity to the best-performing strategies across protocols."
                    isActive={activeCard === 0}
                    progress={activeCard === 0 ? progress : 0}
                    onClick={() => handleCardClick(0)}
                  />
                  <FeatureCard
                    title="Revenue Tokenization"
                    description="Transform royalties and subscriptions into yield-bearing ERC-4626 vaults."
                    isActive={activeCard === 1}
                    progress={activeCard === 1 ? progress : 0}
                    onClick={() => handleCardClick(1)}
                  />
                  <FeatureCard
                    title="Fractional Ownership"
                    description="Enable fans and DAOs to co-own yield streams via ERC-1155 tokens."
                    isActive={activeCard === 2}
                    progress={activeCard === 2 ? progress : 0}
                    onClick={() => handleCardClick(2)}
                  />
                </div>

                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                  {/* Right decorative pattern */}
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(147,51,234,0.08)] outline-offset-[-0.25px]"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

                            {/* Social Proof Section */}

                            <div className="w-full border-b border-[rgba(147,51,234,0.1)] flex flex-col justify-center items-center">

                              <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(147,51,234,0.1)] flex justify-center items-center gap-6">

                                <div className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">

                                  <Badge

                                    icon={<TrendingUp className="w-4 h-4 text-white" />}

                                    text="Market Opportunity"

                                  />

                                  <div className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-[#f0f0f0] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">

                                    $200B+ DeFi meets $500B Creator Economy

                                  </div>

                                  <div className="self-stretch text-center text-[#c0c0c0] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">

                                    NapFi bridges the gap between yield optimization

                                    <br className="hidden sm:block" />

                                    and creator economy infrastructure.

                                  </div>

                                </div>

                              </div>

              

                              {/* Logo Grid */}

                              <div className="self-stretch border-[rgba(147,51,234,0.1)] flex justify-center items-start border-t border-b-0">

                                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">

                                  {/* Left decorative pattern */}

                                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">

                                    {Array.from({ length: 50 }).map((_, i) => (

                                      <div

                                        key={i}

                                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(147,51,234,0.08)] outline-offset-[-0.25px]"

                                      />

                                    ))}

                                  </div>

                                </div>

              

                                <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-0 border-l border-r border-[rgba(147,51,234,0.1)]">

                                  {/* Logo Grid - Responsive grid */}

                                  {Array.from({ length: 4 }).map((_, index) => {

                                    const isMobileFirstColumn = index % 2 === 0

                                    const isMobileLastColumn = index % 2 === 1

                                    const isDesktopFirstColumn = index % 4 === 0

                                    const isDesktopLastColumn = index % 4 === 3

                                    const isMobileBottomRow = index >= 6

                                    const isDesktopTopRow = index < 4

                                    const isDesktopBottomRow = index >= 4

              

                                    let protocolName = ""

                                    let logoSrc = "/icons/horizon-icon.svg" // Default logo

                                    if (index === 0) {

                                      protocolName = "Base"

                                      logoSrc = "/icons/_base-square.svg"

                                    } else if (index === 1) {

                                      protocolName = "Base"

                                      logoSrc = "/icons/_base-square.svg"

                                    } else if (index === 2) {

                                      protocolName = "Base"

                                      logoSrc = "/icons/_base-square.svg"

                                    } else if (index === 3) {

                                      protocolName = "Base"

                                      logoSrc = "/icons/_base-square.svg"

                                    }

              

                                    return (

                                      <div

                                        key={index}

                                        className={`

                                          h-24 xs:h-28 sm:h-32 md:h-36 lg:h-40 flex justify-center items-center gap-1 xs:gap-2 sm:gap-3

                                          border-b border-[rgba(147,51,234,0.08)]

                                          ${index < 6 ? "sm:border-b-[0.5px]" : "sm:border-b"}

                                          ${index >= 6 ? "border-b" : ""}

                                          ${isMobileFirstColumn ? "border-r-[0.5px]" : ""}

                                          sm:border-r-[0.5px] sm:border-l-0

                                          ${isDesktopFirstColumn ? "md:border-l" : "md:border-l-[0.5px]"}

                                          ${isDesktopLastColumn ? "md:border-r" : "md:border-r-[0.5px]"}

                                          ${isDesktopTopRow ? "md:border-b-[0.5px]" : ""}

                                          ${isDesktopBottomRow ? "md:border-t-[0.5px] md:border-b" : ""}

                                          border-[rgba(147,51,234,0.1)]

                                        `}

                                      >

                                        <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 relative flex items-center justify-center">

                                          {protocolName === 'Base' ? <img src={logoSrc} alt={protocolName} className="w-full h-full object-contain" /> : <Layers className="w-6 h-6 text-white" />}

                                        </div>

                                        <div className="text-center flex justify-center flex-col text-[#e0e0e0] text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-tight md:leading-9 font-sans">

                                          {protocolName}

                                        </div>

                                      </div>

                                    )

                                  })}

                                </div>

              

                                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">

                                  {/* Right decorative pattern */}

                                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">

                                    {Array.from({ length: 50 }).map((_, i) => (

                                      <div

                                        key={i}

                                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(147,51,234,0.08)] outline-offset-[-0.25px]"

                                      />

                                    ))}

                                  </div>

                                </div>

                              </div>

                            </div>

              

                            <HowItWorksSection />

                            <UseCasesSection />
              <VaultShowcaseSection />
              

              

                            {/* Documentation Section */}
              <DocumentationSection />

              {/* Testimonials Section */}
              <TestimonialsSection />

              {/* Pricing Section */}
              {/* <PricingSection /> */}

              {/* FAQ Section */}
              <FAQSection />

              {/* CTA Section */}
              <CTASection />

              {/* Footer Section */}
              <FooterSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
