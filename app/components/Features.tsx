import { FileText, Zap, Lock, BarChart } from "lucide-react"

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI-powered PDF summarizer offers everything you need to extract key information quickly and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Accurate Summaries</h3>
            <p className="text-gray-600">
              Our AI technology extracts the most important information from your PDFs with high accuracy.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Lightning Fast</h3>
            <p className="text-gray-600">
              Get your summaries in seconds, no matter how large or complex your PDF documents are.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Processing</h3>
            <p className="text-gray-600">
              Your documents are processed securely and never stored permanently on our servers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Insights</h3>
            <p className="text-gray-600">
              Our AI doesn't just summarize—it identifies the most important insights from your documents.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
