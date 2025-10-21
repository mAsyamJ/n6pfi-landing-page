"use client"

import type React from "react"
import FooterSection from "../sections/footer-section"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function DocLayout({
  children,
  sections = [],
  basePath = "",
}: {
  children: React.ReactNode
  sections?: { title: string; slug: string }[]
  basePath?: string
}) {
  const pathname = usePathname()

  return (
    <div className="w-full min-h-screen relative bg-[#0a0a14] overflow-x-hidden flex flex-col justify-start items-center animated-grid-background">
      <div className="glow-container">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>
      </div>

      <div className="relative flex flex-col justify-start items-center w-full z-10">
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
                    <Link href="/">
                      <div className="flex flex-col justify-center text-[#f0f0f0] text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-5 font-sans cursor-pointer">
                        NapFi
                      </div>
                    </Link>
                  </div>
                  <div className="pl-3 sm:pl-4 md:pl-5 lg:pl-5 flex justify-start items-start hidden sm:flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4">
                    
                    <div className="flex justify-start items-center">
                      <Link href="/doc-dev">
                        <div className="flex flex-col justify-center text-[rgba(200,200,220,0.7)] text-xs md:text-[13px] font-medium leading-[14px] font-sans cursor-pointer">
                          Developer Docs
                        </div>
                      </Link>
                    </div>
                    <div className="flex justify-start items-center">
                      <Link href="/doc-user">
                        <div className="flex flex-col justify-center text-[rgba(200,200,220,0.7)] text-xs md:text-[13px] font-medium leading-[14px] font-sans cursor-pointer">
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

            {/* Content */}
            <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-[120px] pb-8 sm:pb-12 md:pb-16 flex flex-row justify-start items-start px-2 sm:px-4 md:px-8 lg:px-0 w-full">
              {sections.length > 0 && (
                <aside className="w-full sm:w-1/4 lg:w-1/5 xl:w-1/5 sticky top-24 pr-6 md:pr-8 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[rgba(147,51,234,0.2)] scrollbar-track-transparent">
                  <nav className="flex flex-col gap-1.5 border-l border-[rgba(147,51,234,0.15)] pl-4">
                    {sections.map((section) => {
                      const isActive = pathname === `${basePath}/${section.slug}`
                      return (
                        <Link
                          key={section.slug}
                          href={`${basePath}/${section.slug}`}
                          className={`relative text-sm md:text-[15px] font-medium transition-all duration-200 pl-3 py-1.5 rounded-md 
                            ${
                              isActive
                                ? "text-white bg-[rgba(147,51,234,0.1)] border-l-2 border-purple-500"
                                : "text-[rgba(200,200,220,0.7)] hover:text-white hover:bg-[rgba(147,51,234,0.05)]"
                            }`}
                        >
                          {section.title}
                        </Link>
                      )
                    })}
                  </nav>
                </aside>
              )}

              <main
                className={`${
                  sections.length > 0 ? "w-full sm:w-3/4 lg:w-4/5 xl:w-4/5" : "w-full"
                } prose prose-invert max-w-none px-2 sm:px-4 md:px-6 lg:px-8`}
              >
                {children}
              </main>
            </div>


            <FooterSection />
          </div>
        </div>
      </div>
    </div>
  )
}
