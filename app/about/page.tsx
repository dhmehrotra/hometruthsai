import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">About Home Truths AI</h1>
            <p className="text-xl text-gray-600">
              We're on a mission to help home buyers understand property disclosures and make informed real estate
              decisions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Home Truths AI was born from a personal experience. Our founder, after purchasing a home and later
              discovering significant issues that were buried in dense disclosure documents, realized there had to be a
              better way to help buyers understand what they're really getting into.
            </p>
            <p className="text-gray-600 mb-4">
              Launched in 2023, our platform uses advanced AI technology to analyze property disclosure documents and
              generate clear, comprehensive reports that highlight potential issues and important information. What
              started as a tool for individual home buyers has grown into a solution used by real estate professionals
              across the country.
            </p>
            <p className="text-gray-600">
              Today, Home Truths AI helps thousands of users make more informed real estate decisions by uncovering the
              true condition of properties before purchase, potentially saving them from costly surprises and
              disappointments.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Technology</h2>
            <p className="text-gray-600 mb-4">
              At the heart of Home Truths AI is our proprietary AI technology that combines natural language processing,
              machine learning, and deep learning techniques to understand and analyze property disclosure documents.
            </p>
            <p className="text-gray-600 mb-4">
              Our system doesn't just extract text; it comprehends context, identifies potential issues, and recognizes
              the significance of different disclosures. This allows us to generate analyses that highlight what matters
              most to buyers, from structural concerns to system malfunctions and environmental issues.
            </p>
            <p className="text-gray-600">
              We continuously improve our algorithms based on user feedback and the latest advancements in AI research,
              ensuring that our analyses are always accurate, comprehensive, and useful for real estate decision-making.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Ready to uncover the truth about your next home?</h2>
            <Link
              href="/upload"
              className="inline-flex items-center bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Analyze a disclosure <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
