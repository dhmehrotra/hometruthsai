import FileUpload from "@/app/components/FileUpload"

export default function UploadPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Upload Property Disclosure</h1>
            <p className="text-xl text-gray-600">
              Get a comprehensive analysis of your property disclosure document in seconds using our advanced AI
              technology.
            </p>
          </div>

          <FileUpload />

          <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">How It Works</h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold mr-3">
                  1
                </span>
                <div>
                  <h3 className="font-medium text-gray-800">Upload Your Disclosure</h3>
                  <p className="text-gray-600">
                    Select your property disclosure PDF file (up to 50MB) using the upload area above.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold mr-3">
                  2
                </span>
                <div>
                  <h3 className="font-medium text-gray-800">AI Processing</h3>
                  <p className="text-gray-600">
                    Our AI will analyze the document and identify important disclosures, potential issues, and key
                    information.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold mr-3">
                  3
                </span>
                <div>
                  <h3 className="font-medium text-gray-800">Review Your Analysis</h3>
                  <p className="text-gray-600">
                    Get a comprehensive report with positives, negatives, and key points about the property's condition.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
