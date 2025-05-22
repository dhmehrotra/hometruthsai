import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">PDF Summarizer</h3>
            <p className="text-gray-400">
              AI-powered PDF summarization tool that helps you extract key insights from documents in seconds.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  API
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} PDF Summarizer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
