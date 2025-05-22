import { Check } from "lucide-react"

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your needs with our straightforward pricing options.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Free</h3>
              <p className="text-gray-600">Perfect for occasional use</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-800">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">5 PDF summaries per month</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">Max 10 pages per PDF</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">Standard summary quality</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">Email support</span>
              </li>
            </ul>

            <button className="w-full py-3 px-4 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition">
              Get Started
            </button>
          </div>

          <div className="bg-blue-600 p-8 rounded-xl shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-semibold">POPULAR</div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <p className="text-blue-100">For professionals and teams</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">$19</span>
                <span className="text-blue-100">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Unlimited PDF summaries</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-white mr-2 mt-0.5" />
                <span className="text-white">No page limit</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Enhanced summary quality</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-white mr-2 mt-0.5" />
                <span className="text-white">Priority support</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-white mr-2 mt-0.5" />
                <span className="text-white">API access</span>
              </li>
            </ul>

            <button className="w-full py-3 px-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
