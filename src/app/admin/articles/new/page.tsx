"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ImageUploader from "@/components/ImageUploader";

export default function NewArticlePage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    coverImage: "",
  });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/admin/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    router.push("/admin/articles");
    router.refresh();
  }

  return (
    <div className="max-w-lg">
      <h1 className="font-display text-2xl font-bold">مقال جديد</h1>
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <ImageUploader
          value={form.coverImage}
          onChange={(url) => setForm({ ...form, coverImage: url })}
        />
        <input
          placeholder="العنوان"
          required
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full rounded-sm border border-line bg-panel px-4 py-2.5 outline-none focus:border-orange"
        />
        <input
          placeholder="الرابط المختصر (مثال: my-article)"
          required
          value={form.slug}
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
          className="w-full rounded-sm border border-line bg-panel px-4 py-2.5 outline-none focus:border-orange"
          dir="ltr"
        />
        <input
          placeholder="مقتطف قصير"
          value={form.excerpt}
          onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
          className="w-full rounded-sm border border-line bg-panel px-4 py-2.5 outline-none focus:border-orange"
        />
        <textarea
          placeholder="المحتوى"
          required
          rows={8}
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="w-full rounded-sm border border-line bg-panel px-4 py-2.5 outline-none focus:border-orange"
        />
        <button
          disabled={loading}
          className="rounded-sm bg-grad-orange px-6 py-3 text-sm font-semibold text-black disabled:opacity-60"
        >
          {loading ? "جاري النشر..." : "نشر المقال"}
        </button>
      </form>
    </div>
  );
}
