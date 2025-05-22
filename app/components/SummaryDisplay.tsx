"use client"

import { FileText, Copy, Download, Check } from "lucide-react"
import { useState } from "react"

interface SummaryDisplayProps {
  summaryId?: string
  summary?: string | null
}

export default function SummaryDisplay({ summaryId, summary }: SummaryDisplayProps) {
  const [copied, setCopied] = useState(false)
  const summaryContent = summary || ""

  const copyToClipboard = () => {
    navigator.clipboard.writeText(summaryContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadSummary = () => {
    const element = document.createElement("a")
    const file = new Blob([summaryContent], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = "property-disclosure-analysis.txt"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  // Function to format markdown-like content
  const formatSummary = (text: string) => {
    // Replace markdown headings with styled HTML
    const withHeadings = text
      .replace(/^# (.*$)/gm, '<h2 class="text-xl font-bold text-green-700 mt-6 mb-3">$1</h2>')
      .replace(/^## (.*$)/gm, '<h3 class="text-lg font-semibold text-green-600 mt-4 mb-2">$1</h3>')
      .replace(/^### (.*$)/gm, '<h4 class="text-base font-semibold text-green-500 mt-3 mb-1">$1</h4>')

    // Replace bullet points
    const withBullets = withHeadings.replace(/^- (.*$)/gm, '<li class="ml-6 list-disc my-1">$1</li>')

    // Replace numbered lists
    const withNumbered = withBullets.replace(/^\d+\. (.*$)/gm, '<li class="ml-6 list-decimal my-1 font-medium">$1</li>')

    // Wrap adjacent list items in ul/ol tags
    let inList = false
    let inNumberedList = false
    const lines = withNumbered.split("\n")
    const processedLines = lines.map((line, index) => {
      if (line.includes('<li class="ml-6 list-disc')) {
        if (!inList) {
          inList = true
          return '<ul class="my-3">' + line
        }
        return line
      } else if (line.includes('<li class="ml-6 list-decimal')) {
        if (!inNumberedList) {
          inNumberedList = true
          return '<ol class="my-3">' + line
        }
        return line
      } else {
        let result = line
        if (inList) {
          inList = false
          result = "</ul>" + result
        }
        if (inNumberedList) {
          inNumberedList = false
          result = "</ol>" + result
        }
        return result
      }
    })

    // Close any open lists at the end
    if (inList) {
      processedLines.push("</ul>")
    }
    if (inNumberedList) {
      processedLines.push("</ol>")
    }

    // Handle paragraphs
    const withParagraphs = processedLines.join("\n").replace(/^(?!<[holu]|<\/[ou])(.*$)/gm, (match) => {
      if (match.trim() === "") return match
      return `<p class="my-2">${match}</p>`
    })

    // Handle bold text
    const withBold = withParagraphs.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')

    return withBold
  }

  if (!summary) return null

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="bg-green-50 p-4 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center">
          <FileText className="w-5 h-5 text-green-600 mr-2" />
          <h3 className="font-semibold text-gray-800">Disclosure Analysis</h3>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={copyToClipboard}
            className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition flex items-center"
            title="Copy to clipboard"
          >
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            <span className="ml-1 text-sm">{copied ? "Copied" : "Copy"}</span>
          </button>
          <button
            onClick={downloadSummary}
            className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition flex items-center"
            title="Download analysis"
          >
            <Download className="w-5 h-5" />
            <span className="ml-1 text-sm">Download</span>
          </button>
        </div>
      </div>
      <div className="p-6">
        <div
          className="prose max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: formatSummary(summaryContent) }}
        />
      </div>
    </div>
  )
}
