import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your real estate needs with our straightforward pricing options.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Basic</h3>
              <p className="text-gray-600">For individual home buyers</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-800">$9</span>
                <span className="text-gray-600">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">5 disclosure analyses per month</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">Standard analysis depth</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">Email support</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">PDF download of analyses</span>
              </li>
            </ul>

            <Link
              href="/upload"
              className="block w-full py-3 px-4 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition text-center"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-green-600 p-8 rounded-xl shadow-md relative overflow-hidden transform scale-105">
            <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-semibold">
              POPULAR
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <p className="text-green-100">For active home buyers</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">$29</span>
                <span className="text-green-100">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-white mr-2 mt-0.5" />
                <span className="text-white">20 disclosure analyses per month</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Enhanced analysis depth</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Priority support</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Cost estimates for repairs</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Negotiation tips based on disclosures</span>
              </li>
            </ul>

            <Link
              href="/upload"
              className="block w-full py-3 px-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition text-center"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Team</h3>
              <p className="text-gray-600">For real estate professionals</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-800">$99</span>
                <span className="text-gray-600">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">Unlimited disclosure analyses</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">Premium analysis depth</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">5 team member accounts</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">White-labeled reports for clients</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">API access</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">Dedicated account manager</span>
              </li>
            </ul>

            <Link
              href="/contact"
              className="block w-full py-3 px-4 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition text-center"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                What types of disclosure documents can I analyze?
              </h4>
              <p className="text-gray-600">
                Home Truths AI can analyze standard seller's disclosure forms, property condition reports, HOA
                disclosures, and other common real estate disclosure documents. If you have a specific type of document
                you'd like to analyze, please contact us to confirm compatibility.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">How accurate is the analysis?</h4>
              <p className="text-gray-600">
                Our AI provides a comprehensive analysis of the information contained in the disclosure documents, but
                it's not a substitute for a professional home inspection. We recommend using our analysis alongside a
                professional inspection for the most complete understanding of a property's condition.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Can I cancel my subscription anytime?</h4>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to the
                service until the end of your current billing period.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Is my data secure?</h4>
              <p className="text-gray-600">
                Yes, we take data security very seriously. Your documents are processed securely and are not stored
                permanently on our servers. We use encryption for all data transfers and comply with industry-standard
                security practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
