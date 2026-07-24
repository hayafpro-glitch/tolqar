"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ImageUploader from "@/components/ImageUploader";

export default function NewProductPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
    price: "",
    coverImage: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        price: parseFloat(form.price),
        isPublished: true,
      }),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "حدث خطأ ما.");
      return;
    }

    router.push("/admin/products");
    router.refresh();
  }

  return (
    <div className="max-w-lg">
      <h1 className="font-display text-2xl font-bold">منتج جديد</h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <ImageUploader
          value={form.coverImage}
          onChange={(url) => setForm({ ...form, coverImage: url })}
        />
        <div>
          <label className="text-sm text-text-muted">العنوان</label>
          <input
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="mt-1.5 w-full rounded-sm border border-line bg-panel px-4 py-2.5 outline-none focus:border-orange"
          />
        </div>
        <div>
          <label className="text-sm text-text-muted">
            الرابط المختصر (مثال: my-product)
          </label>
          <input
            required
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            className="mt-1.5 w-full rounded-sm border border-line bg-panel px-4 py-2.5 outline-none focus:border-orange"
            dir="ltr"
          />
        </div>
        <div>
          <label className="text-sm text-text-muted">الوصف</label>
          <textarea
            required
            rows={4}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="mt-1.5 w-full rounded-sm border border-line bg-panel px-4 py-2.5 outline-none focus:border-orange"
          />
        </div>
        <div>
          <label className="text-sm text-text-muted">السعر (دولار)</label>
          <input
            required
            type="number"
            step="0.01"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="mt-1.5 w-full rounded-sm border border-line bg-panel px-4 py-2.5 outline-none focus:border-orange"
          />
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="rounded-sm bg-grad-orange px-6 py-3 text-sm font-semibold text-black disabled:opacity-60"
        >
          {loading ? "جاري الحفظ..." : "إنشاء المنتج"}
        </button>
      </form>
    </div>
  );
}
