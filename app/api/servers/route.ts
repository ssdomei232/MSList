import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "servers.yaml")
  const yamlContent = fs.readFileSync(filePath, "utf8")

  return NextResponse.json({ yaml: yamlContent })
}

