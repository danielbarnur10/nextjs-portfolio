import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  return NextResponse.json(
    { message: "in post" },
    { status: 200 }
  );
}
export async function GET(req: NextRequest) {
  return NextResponse.json(
    { message: "in post" },
    { status: 200 }
  );
}