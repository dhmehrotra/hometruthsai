"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function TrialModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle trial signup logic here
    console.log("Starting trial for:", email)
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">Start Your Free Trial</h3>
        <p className="text-gray-600 mb-6">Try SUMMARIZET free for 2 days. No credit card required.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 font-bold tracking-wide"
          >
            START FREE TRIAL
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-4">
          By starting your trial, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
}
