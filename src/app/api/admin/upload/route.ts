import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const role = (session?.user as { role?: string } | undefined)?.role;

  if (!session || (role !== "ADMIN" && role !== "EDITOR")) {
    return NextResponse.json({ error: "غير مصرح" }, { status: 401 });
  }

  const form = await req.formData();
  const file = form.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ error: "لم يتم إرفاق أي ملف" }, { status: 400 });
  }

  const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json(
      { error: "يُسمح فقط بصور JPG أو PNG أو WEBP أو GIF" },
      { status: 400 }
    );
  }

  if (file.size > 5 * 1024 * 1024) {
    return NextResponse.json(
      { error: "يجب ألا يتجاوز حجم الصورة 5 ميغابايت" },
      { status: 400 }
    );
  }

  const blob = await put(`uploads/${Date.now()}-${file.name}`, file, {
    access: "public",
    token: process.env.BLOBPUB_READ_WRITE_TOKEN,
  });

  return NextResponse.json({ url: blob.url });
}
