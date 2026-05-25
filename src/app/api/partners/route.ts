import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import defaultPartners from "@/data/partners.json";

const DATA_FILE = path.join(process.cwd(), "src/data/partners.json");

// Global in-memory cache to handle warm serverless functions on Vercel
let partnersCache: any[] | null = null;

async function readPartners(): Promise<any[]> {
  if (partnersCache !== null) {
    return partnersCache;
  }

  // 1. Try Vercel KV
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const res = await fetch(`${process.env.KV_REST_API_URL}/get/partners`, {
        headers: {
          Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
        },
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.result) {
          partnersCache = JSON.parse(data.result);
          return partnersCache!;
        }
      }
    } catch (error) {
      console.error("Error reading from Vercel KV:", error);
    }
  }

  // 2. Try Local Filesystem
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, "utf-8");
      partnersCache = JSON.parse(raw);
      return partnersCache!;
    }
  } catch (error) {
    console.error("Error reading partners.json from disk:", error);
  }

  // 3. Static Fallback
  partnersCache = [...defaultPartners];
  return partnersCache;
}

async function writePartners(data: any[]) {
  partnersCache = data;

  // 1. Try Vercel KV
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      await fetch(`${process.env.KV_REST_API_URL}/set/partners`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("Error writing to Vercel KV:", error);
    }
  }

  // 2. Try Local Filesystem
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing partners.json to disk:", error);
  }
}

// GET — list all
export async function GET() {
  try {
    const partners = await readPartners();
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
    const partners = await readPartners();
    const newPartner = {
      id: Date.now().toString(),
      name: body.name || "",
      logo: body.logo || "",
    };
    partners.push(newPartner);
    await writePartners(partners);
    return NextResponse.json(newPartner, { status: 201 });
  } catch (error) {
    console.error("Error in api/partners POST:", error);
    return NextResponse.json({ error: "Failed to create partner" }, { status: 500 });
  }
}

// PUT — update by id
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const partners = await readPartners();
    const idx = partners.findIndex((p: { id: string }) => p.id === body.id);
    if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
    partners[idx] = {
      ...partners[idx],
      name: body.name,
      logo: body.logo,
    };
    await writePartners(partners);
    return NextResponse.json(partners[idx]);
  } catch (error) {
    console.error("Error in api/partners PUT:", error);
    return NextResponse.json({ error: "Failed to update partner" }, { status: 500 });
  }
}

// DELETE — by id
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    const partners = await readPartners();
    const filtered = partners.filter((p: { id: string }) => p.id !== id);
    await writePartners(filtered);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in api/partners DELETE:", error);
    return NextResponse.json({ error: "Failed to delete partner" }, { status: 500 });
  }
}
