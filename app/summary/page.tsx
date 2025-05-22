"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import SummaryDisplay from "../components/SummaryDisplay"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function SummaryPage() {
  const searchParams = useSearchParams()
  const summaryId = searchParams.get("id")
  const [summary, setSummary] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSummary = async () => {
      if (!summaryId) {
        setError("No summary ID provided")
        setLoading(false)
        return
      }

      try {
        const response = await fetch(`/api/getSummary?id=${summaryId}`)
        if (!response.ok) {
          throw new Error("Failed to fetch summary")
        }
        const data = await response.json()
        setSummary(data.summary)
      } catch (error) {
        console.error("Error fetching summary:", error)
        setError("Failed to load summary. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    fetchSummary()
  }, [summaryId])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Your PDF Summary</h1>

          {loading && (
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading your summary...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 p-6 rounded-xl border border-red-200 text-red-700">
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && summary && <SummaryDisplay summary={summary} />}

          <div className="mt-8 text-center">
            <a
              href="/"
              className="inline-block bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Summarize Another PDF
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
