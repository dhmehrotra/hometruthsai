import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/logo.svg" alt="Home Truths AI" width={32} height={32} />
              <span className="text-lg font-bold">Home Truths AI</span>
            </div>
            <p className="text-gray-400 text-sm">
              AI-powered property disclosure analysis that helps you understand the true condition of a home before you
              buy.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/upload" className="text-gray-400 hover:text-white transition">
                  Try Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p className="mb-2">
            Built by{" "}
            <a
              href="https://sparkai.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition"
            >
              Spark AI Studio
            </a>
          </p>
          <p>© {new Date().getFullYear()} Home Truths AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
