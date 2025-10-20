import type React from "react"
import type { Metadata } from "next"
import { Outfit, Space_Mono } from "next/font/google"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "NapFi - AI Yield Aggregator for the Creator Economy",
  description:
    "Automate yield, tokenize ownership, and turn creative income into composable onchain assets with NapFi's modular DeFi infrastructure.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceMono.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
