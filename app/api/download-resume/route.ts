import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "resume.pdf")
    const fileBuffer = fs.readFileSync(filePath)

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=romil-jain-resume.pdf",
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to download resume" }, { status: 500 })
  }
}

