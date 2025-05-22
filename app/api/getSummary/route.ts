import { NextResponse } from "next/server"

// In a real application, you would fetch the summary from a database
// For this example, we'll simulate retrieving a stored summary
const summaries = new Map<string, string>()

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")

  if (!id) {
    return NextResponse.json({ error: "No summary ID provided" }, { status: 400 })
  }

  // In a real application, you would fetch the summary from your database
  // For this example, we'll check if we have it in our in-memory store
  const summary = summaries.get(id)

  if (!summary) {
    // If not found, return a mock summary
    return NextResponse.json({
      summary:
        "This is a sample summary of the PDF document. In a production environment, this would be retrieved from a database based on the summary ID.",
    })
  }

  return NextResponse.json({ summary })
}
