import { Clock } from "lucide-react"

export default function TrialBanner() {
  return (
    <div className="bg-blue-500">
      <div className="container mx-auto px-4 py-3 text-center">
        <p className="text-white flex items-center justify-center space-x-2">
          <Clock className="w-4 h-4" />
          <span>
            <span className="font-bold">Try SUMMARIZET free for 2 days</span>
            then $10/month
          </span>
        </p>
      </div>
    </div>
  )
}
