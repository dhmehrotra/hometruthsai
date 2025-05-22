"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Home Truths AI" width={40} height={40} />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Home Truths AI</h1>
              <p className="text-xs text-green-600">Property Disclosure Analysis</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">
              Home
            </Link>
            <Link href="/upload" className="text-gray-700 hover:text-green-600 font-medium">
              Upload
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-green-600 font-medium">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium">
              About
            </Link>
            <Link href="/upload" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
              Try Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-green-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/upload"
              className="block text-gray-700 hover:text-green-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Upload
            </Link>
            <Link
              href="/pricing"
              className="block text-gray-700 hover:text-green-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-green-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/upload"
              className="block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Try Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
