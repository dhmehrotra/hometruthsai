"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: "How accurate are the summaries?",
      answer:
        "Our AI-powered summarizer is trained on millions of documents and can extract the most important information with high accuracy. The quality of summaries depends on the clarity and structure of the original document, but our system consistently delivers reliable results.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we take data security very seriously. Your documents are processed securely and are not stored permanently on our servers. We use encryption for all data transfers and comply with industry-standard security practices.",
    },
    {
      question: "What types of documents can I summarize?",
      answer:
        "Currently, our system supports PDF documents. We're working on adding support for more file formats in the future, including Word documents, PowerPoint presentations, and more.",
    },
    {
      question: "Is there a limit to the file size?",
      answer:
        "Yes, the maximum file size for uploads is 50MB. This limit helps ensure fast processing times and optimal performance for all users.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to the service until the end of your current billing period.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our PDF summarizer.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center p-4 rounded-lg text-left font-semibold ${
                  openIndex === index ? "bg-blue-50 text-blue-600" : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                }`}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="p-4 bg-white border border-gray-100 rounded-b-lg mt-1">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
