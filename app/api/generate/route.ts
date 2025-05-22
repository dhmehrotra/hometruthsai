import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json()

    const { text } = await generateText({
      model: openai("gpt-4"),
      prompt: prompt,
      maxTokens: 500,
    })

    return NextResponse.json({ result: text })
  } catch (error) {
    console.error("Error generating text:", error)
    return NextResponse.json({ error: "Failed to generate text" }, { status: 500 })
  }
}
