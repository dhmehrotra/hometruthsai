import Image from "next/image"
import Link from "next/link"
import { ArrowRight, FileText, Zap, BarChart, AlertTriangle, Search } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Understand Property Disclosures with AI
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Home Truths AI analyzes property disclosure documents to help you identify potential issues before you
                buy.
              </p>
              <Link
                href="/upload"
                className="inline-flex items-center bg-white text-green-600 font-bold py-3 px-8 rounded-lg hover:bg-green-50 transition duration-300"
              >
                Try it now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/modern-house-blueprint-analysis.png"
                alt="Home blueprint with analysis markings"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform makes it easy to understand property disclosures in just three simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Upload Disclosure</h3>
              <p className="text-gray-600">
                Upload your property disclosure PDF through our secure interface. We support all standard disclosure
                forms.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">2. AI Analysis</h3>
              <p className="text-gray-600">
                Our advanced AI analyzes the document, identifying potential issues, repairs, and important disclosures.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Review Insights</h3>
              <p className="text-gray-600">
                Receive a comprehensive report highlighting positives, negatives, and key information about the
                property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Home Truths AI</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Make informed real estate decisions with our powerful property disclosure analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Identify Hidden Issues</h3>
                <p className="text-gray-600">
                  Our AI identifies potential problems that might be buried in dense disclosure documents, helping you
                  avoid costly surprises after purchase.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Search className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Comprehensive Analysis</h3>
                <p className="text-gray-600">
                  Get a balanced view with positives and negatives highlighted at the top, followed by a detailed
                  breakdown of key disclosures and potential concerns.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Save Time</h3>
                <p className="text-gray-600">
                  Review property disclosures in minutes instead of hours. Our AI quickly processes lengthy documents
                  and extracts the information that matters most.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Search className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Make Better Decisions</h3>
                <p className="text-gray-600">
                  Enter negotiations with confidence, knowing exactly what issues the property has and what repairs
                  might be needed in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to uncover the truth about your next home?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Try Home Truths AI today and get the insights you need to make informed real estate decisions.
          </p>
          <Link
            href="/upload"
            className="inline-flex items-center bg-white text-green-600 font-bold py-3 px-8 rounded-lg hover:bg-green-50 transition duration-300"
          >
            Analyze a disclosure <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
