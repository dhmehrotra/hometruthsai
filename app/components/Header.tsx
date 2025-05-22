import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=40&query=abstract document with AI icon"
              alt="PDF Summarizer Logo"
              width={40}
              height={40}
              className="mr-3"
            />
            <span className="text-xl font-bold text-gray-800">PDF Summarizer</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="#features" className="text-gray-600 hover:text-blue-600 transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-600 hover:text-blue-600 transition">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-600 hover:text-blue-600 transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-600 hover:text-blue-600 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <a
              href="#upload"
              className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Try Now
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
