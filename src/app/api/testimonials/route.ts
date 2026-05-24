import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "src/data/clients.json");

function readClients() {
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

function writeClients(data: unknown) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

// GET — list all
export async function GET() {
  try {
    const clients = readClients();
    return NextResponse.json(clients);
  } catch {
    return NextResponse.json({ error: "Failed to read clients" }, { status: 500 });
  }
}

// POST — create new
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const clients = readClients();
    const newClient = {
      id: Date.now().toString(),
      name: body.name || "",
      title: body.title || "",
      feedback: body.feedback || "",
      avatar: (body.name || "?")[0].toUpperCase(),
    };
    clients.push(newClient);
    writeClients(clients);
    return NextResponse.json(newClient, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create client" }, { status: 500 });
  }
}

// PUT — update by id
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const clients = readClients();
    const idx = clients.findIndex((c: { id: string }) => c.id === body.id);
    if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
    clients[idx] = {
      ...clients[idx],
      name: body.name,
      title: body.title,
      feedback: body.feedback,
      avatar: (body.name || "?")[0].toUpperCase(),
    };
    writeClients(clients);
    return NextResponse.json(clients[idx]);
  } catch {
    return NextResponse.json({ error: "Failed to update client" }, { status: 500 });
  }
}

// DELETE — by id
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    const clients = readClients();
    const filtered = clients.filter((c: { id: string }) => c.id !== id);
    writeClients(filtered);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete client" }, { status: 500 });
  }
}
