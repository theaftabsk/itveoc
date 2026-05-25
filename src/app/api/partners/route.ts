import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import defaultPartners from "@/data/partners.json";

const DATA_FILE = path.join(process.cwd(), "src/data/partners.json");

function readPartners() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(raw);
    }
  } catch (error) {
    console.error("Error reading partners.json from disk:", error);
  }
  return defaultPartners;
}

function writePartners(data: unknown) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing partners.json to disk:", error);
  }
}

// GET — list all
export async function GET() {
  try {
    const partners = readPartners();
    return NextResponse.json(partners);
  } catch (error: any) {
    console.error("Error in api/partners GET:", error);
    return NextResponse.json({ error: "Failed to read partners", details: error?.message || String(error) }, { status: 500 });
  }
}

// POST — create new
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const partners = readPartners();
    const newPartner = {
      id: Date.now().toString(),
      name: body.name || "",
      logo: body.logo || "",
    };
    partners.push(newPartner);
    writePartners(partners);
    return NextResponse.json(newPartner, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create partner" }, { status: 500 });
  }
}

// PUT — update by id
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const partners = readPartners();
    const idx = partners.findIndex((p: { id: string }) => p.id === body.id);
    if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
    partners[idx] = {
      ...partners[idx],
      name: body.name,
      logo: body.logo,
    };
    writePartners(partners);
    return NextResponse.json(partners[idx]);
  } catch {
    return NextResponse.json({ error: "Failed to update partner" }, { status: 500 });
  }
}

// DELETE — by id
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    const partners = readPartners();
    const filtered = partners.filter((p: { id: string }) => p.id !== id);
    writePartners(filtered);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete partner" }, { status: 500 });
  }
}
