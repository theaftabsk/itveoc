import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import defaultClients from "@/data/clients.json";

const DATA_FILE = path.join(process.cwd(), "src/data/clients.json");

// Global in-memory cache to handle warm serverless functions on Vercel
let clientsCache: any[] | null = null;

async function readClients(): Promise<any[]> {
  if (clientsCache !== null) {
    return clientsCache;
  }

  // 1. Try Vercel KV
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const res = await fetch(`${process.env.KV_REST_API_URL}/get/testimonials`, {
        headers: {
          Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
        },
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.result) {
          clientsCache = JSON.parse(data.result);
          return clientsCache!;
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
      clientsCache = JSON.parse(raw);
      return clientsCache!;
    }
  } catch (error) {
    console.error("Error reading clients.json from disk:", error);
  }

  // 3. Static Fallback
  clientsCache = [...defaultClients];
  return clientsCache;
}

async function writeClients(data: any[]) {
  clientsCache = data;

  // 1. Try Vercel KV
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      await fetch(`${process.env.KV_REST_API_URL}/set/testimonials`, {
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
    console.error("Error writing clients.json to disk:", error);
  }
}

// GET — list all
export async function GET() {
  try {
    const clients = await readClients();
    return NextResponse.json(clients);
  } catch (error: any) {
    console.error("Error in api/testimonials GET:", error);
    return NextResponse.json({ error: "Failed to read clients", details: error?.message || String(error) }, { status: 500 });
  }
}

// POST — create new
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const clients = await readClients();
    const newClient = {
      id: Date.now().toString(),
      name: body.name || "",
      title: body.title || "",
      feedback: body.feedback || "",
      avatar: (body.name || "?")[0].toUpperCase(),
    };
    clients.push(newClient);
    await writeClients(clients);
    return NextResponse.json(newClient, { status: 201 });
  } catch (error) {
    console.error("Error in api/testimonials POST:", error);
    return NextResponse.json({ error: "Failed to create client" }, { status: 500 });
  }
}

// PUT — update by id
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const clients = await readClients();
    const idx = clients.findIndex((c: { id: string }) => c.id === body.id);
    if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
    clients[idx] = {
      ...clients[idx],
      name: body.name,
      title: body.title,
      feedback: body.feedback,
      avatar: (body.name || "?")[0].toUpperCase(),
    };
    await writeClients(clients);
    return NextResponse.json(clients[idx]);
  } catch (error) {
    console.error("Error in api/testimonials PUT:", error);
    return NextResponse.json({ error: "Failed to update client" }, { status: 500 });
  }
}

// DELETE — by id
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    const clients = await readClients();
    const filtered = clients.filter((c: { id: string }) => c.id !== id);
    await writeClients(filtered);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in api/testimonials DELETE:", error);
    return NextResponse.json({ error: "Failed to delete client" }, { status: 500 });
  }
}
