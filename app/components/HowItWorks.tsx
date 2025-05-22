import { Upload, BookOpen, FileText, Download } from "lucide-react"

export default function HowItWorks() {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Upload className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Upload Your Document</h3>
              <p className="text-gray-600">
                Start by uploading your PDF document or pasting the text you want to summarize. Our system accepts
                various file formats and can handle large documents with ease.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-3 rounded-full">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-600">
                Our advanced AI algorithms read and analyze your document, identifying key concepts, main ideas, and
                important details. The AI understands context and prioritizes information based on relevance.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Generate Concise Summary</h3>
              <p className="text-gray-600">
                Based on the analysis, SUMMARIZET creates a concise, coherent summary of your document. The summary
                retains the most crucial information while significantly reducing the overall length.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <Download className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Review and Download</h3>
              <p className="text-gray-600">
                Review your generated summary instantly on our platform. You can then download the summary in various
                formats (PDF, Word) for easy sharing or future reference. The process is quick, efficient, and produces
                high-quality results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
