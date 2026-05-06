import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const text = searchParams.get("text") || "Hello";
  const phone = "923106467540";

  // ✅ BEST universal link
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  return NextResponse.redirect(url);
}