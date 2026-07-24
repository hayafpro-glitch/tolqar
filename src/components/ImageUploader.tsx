"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageUploader({
  value,
  onChange,
}: {
  value: string;
  onChange: (url: string) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/admin/upload", {
      method: "POST",
      body: formData,
    });

    setUploading(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "فشل رفع الصورة.");
      return;
    }

    const data = await res.json();
    onChange(data.url);
  }

  return (
    <div>
      <label className="text-sm text-text-muted">صورة الغلاف</label>

      {value ? (
        <div className="mt-2 flex items-center gap-4">
          <div className="relative h-24 w-24 overflow-hidden rounded-sm border border-line">
            <Image src={value} alt="الغلاف" fill className="object-cover" />
          </div>
          <button
            type="button"
            onClick={() => onChange("")}
            className="text-xs text-red-400 hover:underline"
          >
            إزالة
          </button>
        </div>
      ) : (
        <div className="mt-1.5">
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            onChange={handleFileChange}
            disabled={uploading}
            className="w-full rounded-sm border border-line bg-panel px-4 py-2.5 text-sm outline-none file:ms-4 file:rounded-sm file:border-0 file:bg-orange file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-black"
          />
          {uploading && (
            <p className="mt-1 text-xs text-text-muted">جاري الرفع...</p>
          )}
        </div>
      )}

      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
