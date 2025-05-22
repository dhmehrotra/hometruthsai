import { NextResponse } from "next/server"

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
    const { fileName, fileType, fileSize } = body

    if (!fileName || !fileType) {
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

    console.log(`Processing mock property disclosure: ${fileName}`)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generate a mock summary with positives and negatives at the top
    const mockSummary = `# POSITIVES AND NEGATIVES

## Positives:
- Recently renovated kitchen with new appliances (2021)
- Roof replaced within the last 5 years
- No history of flooding or water intrusion
- HVAC system upgraded in 2020
- No known foundation issues
- Property is not in a flood zone

## Negatives:
- Minor plumbing leak in master bathroom (disclosed but not repaired)
- Some electrical outlets in the living room not functioning properly
- Evidence of past termite damage (treated in 2019)
- Garage door opener requires replacement
- Cracks in driveway concrete
- Water heater is at the end of its expected lifespan (15+ years old)

# EXECUTIVE SUMMARY

This property disclosure for "${fileName}" reveals a home that is generally well-maintained with several recent upgrades, including a kitchen renovation and HVAC system replacement within the last few years. The roof is relatively new, and there are no major structural concerns disclosed. However, there are some maintenance issues that should be addressed, including plumbing and electrical problems, as well as a water heater that will likely need replacement soon. Past termite damage has been treated, but a new inspection is recommended to ensure the treatment was effective.

Overall, the disclosure indicates a property with normal wear and tear for its age, with no catastrophic issues but several items that would benefit from attention or repair. The seller appears to have been transparent about the property's condition, which provides a good foundation for negotiation or planning for future repairs.

# KEY DISCLOSURES

## Structural Elements
- Foundation: No known issues or repairs disclosed
- Roof: Replaced in 2018, no leaks or damage reported
- Walls: Some settlement cracks in drywall in the guest bedroom, cosmetic only
- Windows: Two windows in the dining room have broken seals causing fogging between panes

## Systems
- Electrical: Several outlets in the living room not functioning properly, circuit breaker panel was updated in 2017
- Plumbing: Slow drain and minor leak under master bathroom sink, not repaired
- HVAC: System replaced in 2020, regular maintenance performed, last service date January 2023
- Water Heater: Original to home (approximately 15 years old), functioning but near end of expected lifespan

## Known Defects/Malfunctions
- Garage door opener requires replacement, currently operating manually
- Dishwasher occasionally leaks during operation
- Doorbell does not function
- Ceiling fan in master bedroom makes noise when operating at high speed

## Past Repairs/Renovations
- Kitchen fully renovated in 2021 (new cabinets, countertops, and appliances)
- Master bathroom shower retiled in 2019
- Termite damage discovered and treated in 2019, repairs made to affected baseboards

## Environmental Issues
- No known presence of asbestos
- No known presence of lead paint
- No known presence of radon
- No known presence of mold or mildew

## Water/Drainage Issues
- No history of flooding or water intrusion
- Gutters were cleaned and repaired in 2022
- Yard has some areas of poor drainage after heavy rain (northeast corner)

This analysis is based on the information provided in the disclosure document. A professional home inspection is recommended to verify these disclosures and identify any additional issues not mentioned in the document.`

    return NextResponse.json({
      summary: mockSummary,
      fileName,
    })
  } catch (error) {
    console.error("Error processing request:", error)
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 })
  }
}
