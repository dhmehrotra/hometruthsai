import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Home Truths AI - Understand Property Disclosures",
  description: "AI-powered analysis of property disclosures to help you make informed real estate decisions.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
