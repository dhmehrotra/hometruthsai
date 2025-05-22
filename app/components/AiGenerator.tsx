"use client"

import { useState } from "react"

export default function AiGenerator() {
  const [prompt, setPrompt] = useState("")
  const [result, setResult] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate text")
      }

      const data = await response.json()
      setResult(data.result)
    } catch (err) {
      setError("Failed to generate text. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">AI Text Generator</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
            className="w-full h-32 p-3 rounded-lg bg-blue-50 border border-blue-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">{error}</div>
        )}
        <button
          type="submit"
          disabled={!prompt.trim() || isLoading}
          className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-500 transition duration-300 ease-in-out font-bold tracking-wide"
        >
          {isLoading ? "Generating..." : "Generate"}
        </button>
      </form>
      {result && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Result:</h3>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-gray-700 whitespace-pre-wrap">{result}</p>
          </div>
        </div>
      )}
    </div>
  )
}
