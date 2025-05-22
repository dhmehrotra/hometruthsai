import { NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json()

    const { text } = await generateText({
      model: openai("gpt-4"),
      prompt: `Write a haiku about ${prompt}`,
      maxTokens: 100,
    })

    return NextResponse.json({ haiku: text })
  } catch (error) {
    console.error("Error generating haiku:", error)
    return NextResponse.json({ error: "Failed to generate haiku" }, { status: 500 })
  }
}
