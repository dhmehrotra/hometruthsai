"use client"

import type React from "react"

import { useState } from "react"
import { Upload, FileText, Check, AlertCircle, Loader2 } from "lucide-react"
import SummaryDisplay from "./SummaryDisplay"

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [uploadStatus, setUploadStatus] = useState<string | null>(null)
  const [summary, setSummary] = useState<string | null>(null)
  const [useMockApi, setUseMockApi] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      if (selectedFile.type === "application/pdf") {
        if (selectedFile.size > 50 * 1024 * 1024) {
          setFile(null)
          setError("File size exceeds 50MB limit. Please upload a smaller file.")
          return
        }
        setFile(selectedFile)
        setError(null)
      } else {
        setFile(null)
        setError("Please upload a PDF file.")
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) return

    setUploading(true)
    setError(null)
    setUploadStatus("Processing your disclosure document...")
    setSummary(null)

    try {
      // Read the file as base64
      const reader = new FileReader()

      reader.onload = async () => {
        try {
          // Get base64 string from reader result
          const base64String = reader.result?.toString().split(",")[1]

          if (!base64String) {
            throw new Error("Failed to read file")
          }

          // Use either the real API or the mock API
          const apiEndpoint = useMockApi ? "/api/summarize-mock" : "/api/summarize"

          // Send the base64 encoded file instead of FormData
          const response = await fetch(apiEndpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fileName: file.name,
              fileType: file.type,
              fileSize: file.size,
              fileContent: base64String,
            }),
          })

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}))
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
          }

          const result = await response.json()

          if (result.summary) {
            setSummary(result.summary)
            setUploadStatus("Analysis completed successfully!")
          } else {
            throw new Error("No analysis returned from the server")
          }
        } catch (error) {
          console.error("Error processing file:", error)
          setError(error instanceof Error ? error.message : "An unexpected error occurred")
          setUploading(false)
        }
      }

      reader.onerror = () => {
        setError("Failed to read the file")
        setUploading(false)
      }

      // Start reading the file
      reader.readAsDataURL(file)
    } catch (error) {
      console.error("Error in handleSubmit:", error)
      setError(error instanceof Error ? error.message : "An unexpected error occurred")
      setUploading(false)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200 bg-green-50">
        <h2 className="text-xl font-semibold text-gray-800">Upload Property Disclosure</h2>
        <p className="text-gray-600 mt-1">Upload your disclosure PDF to get an AI-powered analysis</p>
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-green-300 border-dashed rounded-xl cursor-pointer bg-green-50 hover:bg-green-100 transition duration-300"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-12 h-12 mb-4 text-green-500" />
                <p className="mb-2 text-lg font-semibold text-gray-700">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">PDF (MAX. 50MB)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" accept=".pdf" onChange={handleFileChange} />
            </label>
          </div>

          {file && (
            <div className="flex items-center p-4 bg-green-50 rounded-lg">
              <FileText className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-sm text-gray-700">{file.name}</span>
            </div>
          )}

          {error && (
            <div className="flex items-center p-4 bg-red-50 rounded-lg text-red-700" role="alert">
              <AlertCircle className="w-5 h-5 mr-2" />
              <span>{error}</span>
            </div>
          )}

          {uploadStatus && !error && (
            <div className="flex items-center p-4 bg-green-50 rounded-lg text-green-700" role="alert">
              <Check className="w-5 h-5 mr-2" />
              <span>{uploadStatus}</span>
            </div>
          )}

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="useMockApi"
              checked={useMockApi}
              onChange={(e) => setUseMockApi(e.target.checked)}
              className="rounded text-green-600 focus:ring-green-500"
            />
            <label htmlFor="useMockApi" className="text-sm text-gray-600">
              Use mock API (for testing without OpenAI)
            </label>
          </div>

          <button
            type="submit"
            disabled={!file || uploading}
            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:text-gray-500 transition duration-300 font-semibold text-center flex items-center justify-center"
          >
            {uploading ? (
              <>
                <Loader2 className="animate-spin mr-2 h-5 w-5" /> Analyzing Disclosure...
              </>
            ) : (
              "Analyze Disclosure"
            )}
          </button>
        </form>

        {summary && (
          <div className="mt-8">
            <SummaryDisplay summary={summary} />
          </div>
        )}
      </div>
    </div>
  )
}
