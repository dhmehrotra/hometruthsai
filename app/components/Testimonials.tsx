export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thousands of professionals trust our AI PDF summarizer to save time and extract key information.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600 font-bold">JD</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">John Doe</h4>
                <p className="text-sm text-gray-500">Marketing Director</p>
              </div>
            </div>
            <p className="text-gray-600">
              "This tool has saved me countless hours of reading through lengthy reports. The summaries are accurate and
              capture all the key points I need."
            </p>
            <div className="flex text-yellow-400 mt-4">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-600 font-bold">JS</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Jane Smith</h4>
                <p className="text-sm text-gray-500">Research Analyst</p>
              </div>
            </div>
            <p className="text-gray-600">
              "As a researcher, I need to process dozens of papers weekly. This AI summarizer has become an essential
              part of my workflow. Highly recommended!"
            </p>
            <div className="flex text-yellow-400 mt-4">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-purple-600 font-bold">RJ</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Robert Johnson</h4>
                <p className="text-sm text-gray-500">Legal Consultant</p>
              </div>
            </div>
            <p className="text-gray-600">
              "The accuracy of the summaries is impressive. It helps me quickly understand the key points of legal
              documents without missing important details."
            </p>
            <div className="flex text-yellow-400 mt-4">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
