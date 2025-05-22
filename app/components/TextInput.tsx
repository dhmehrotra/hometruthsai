"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { BookOpen } from "lucide-react"

export default function TextInput() {
  const [text, setText] = useState("")
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!text.trim()) {
      setError("Please enter some text or a book title.")
      return
    }

    setProcessing(true)
    setError(null)

    try {
      const response = await fetch("/api/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Text summarization failed")
      }

      if (result.summaryId) {
        router.push(`/summary?id=${result.summaryId}`)
      } else {
        throw new Error("No summary ID returned from the server")
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error)
      setError(error instanceof Error ? error.message : "An unexpected error occurred")
    } finally {
      setProcessing(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 tracking-wide">Enter Text or Book Title</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <BookOpen className="absolute top-3 left-3 text-blue-500" />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-64 p-3 pl-12 rounded-lg bg-blue-50 border border-blue-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter text or book title here..."
          ></textarea>
        </div>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        <button
          type="submit"
          disabled={!text.trim() || processing}
          className="w-full bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 disabled:bg-gray-300 disabled:text-gray-500 transition duration-300 ease-in-out font-bold tracking-wide"
        >
          {processing ? "PROCESSING..." : "SUMMARIZE"}
        </button>
      </form>
    </div>
  )
}
