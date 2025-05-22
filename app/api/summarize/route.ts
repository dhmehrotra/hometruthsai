import { NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req: Request) {
  try {
    // Check if the request is JSON
    const contentType = req.headers.get("content-type") || ""

    if (!contentType.includes("application/json")) {
      console.error(`Unsupported content type: ${contentType}`)
      return NextResponse.json(
        { error: `Unsupported content type: ${contentType}. Expected application/json.` },
        { status: 400 },
      )
    }

    // Parse the JSON body
    const body = await req.json()

    // Extract file information
    const { fileName, fileType, fileSize, fileContent } = body

    if (!fileName || !fileType || !fileContent) {
      return NextResponse.json({ error: "Missing file information" }, { status: 400 })
    }

    // Validate file type
    if (fileType !== "application/pdf") {
      return NextResponse.json({ error: "Uploaded file is not a PDF" }, { status: 400 })
    }

    // Check file size (if provided)
    if (fileSize && fileSize > 50 * 1024 * 1024) {
      return NextResponse.json({ error: "File size exceeds 50MB limit" }, { status: 400 })
    }

    // Convert base64 to buffer
    const buffer = Buffer.from(fileContent, "base64")

    console.log(`Processing property disclosure: ${fileName}, Size: ${buffer.length} bytes`)

    try {
      // Process with OpenAI
      const { text: summary } = await generateText({
        model: openai("gpt-4o"),
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `Please analyze this property disclosure document and provide a comprehensive analysis using the following structure:

1. POSITIVES AND NEGATIVES:
   - Start with a section that clearly lists the key positives (good conditions, recent upgrades, favorable aspects) of the property
   - Follow with a section that clearly lists the key negatives (issues, defects, needed repairs, concerns) disclosed about the property

2. EXECUTIVE SUMMARY:
   - Provide a concise overview of the property's condition based on the disclosure (2-3 paragraphs)

3. KEY DISCLOSURES:
   - Identify and explain important disclosures about:
     - Structural elements (foundation, roof, walls)
     - Systems (electrical, plumbing, HVAC)
     - Known defects or malfunctions
     - Past repairs or renovations
     - Environmental issues (mold, asbestos, lead paint)
     - Water damage or drainage issues
   - Include any significant information that a potential buyer should be aware of

Please ensure the positives and negatives section appears at the top of the analysis before getting into the detailed content.`,
              },
              {
                type: "file",
                data: buffer,
                mimeType: "application/pdf",
                filename: fileName,
              },
            ],
          },
        ],
      })

      return NextResponse.json({
        summary,
        fileName,
      })
    } catch (error) {
      console.error("Error processing PDF with OpenAI:", error)
      return NextResponse.json(
        {
          error: error instanceof Error ? `Error processing PDF: ${error.message}` : "Error processing PDF with OpenAI",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error processing request:", error)
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 })
  }
}
