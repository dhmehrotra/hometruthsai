"use client"

import { useState } from "react"

export default function HaikuGenerator() {
  const [prompt, setPrompt] = useState("")
  const [haiku, setHaiku] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const generateHaiku = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/generate-haiku", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate haiku")
      }

      const data = await response.json()
      setHaiku(data.haiku)
    } catch (err) {
      setError("Failed to generate haiku. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">AI Haiku Generator</h2>
      <form onSubmit={generateHaiku} className="space-y-4">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter a topic for the haiku"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          disabled={isLoading || !prompt}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-300"
        >
          {isLoading ? "Generating..." : "Generate Haiku"}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {haiku && (
        <div className="mt-4 p-4 bg-blue-50 rounded">
          <pre className="whitespace-pre-wrap">{haiku}</pre>
        </div>
      )}
    </div>
  )
}
