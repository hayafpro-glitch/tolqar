"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "حدث خطأ ما.");
      return;
    }

    router.push("/login");
  }

  return (
    <section className="container-tolqar max-w-sm py-24">
      <h1 className="font-display text-3xl font-bold">إنشاء حساب</h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label className="text-sm text-text-muted">الاسم</label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-1.5 w-full rounded-sm border border-line bg-panel px-4 py-2.5 outline-none focus:border-orange"
          />
        </div>
        <div>
          <label className="text-sm text-text-muted">البريد الإلكتروني</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-1.5 w-full rounded-sm border border-line bg-panel px-4 py-2.5 outline-none focus:border-orange"
          />
        </div>
        <div>
          <label className="text-sm text-text-muted">
            كلمة المرور (8 أحرف على الأقل)
          </label>
          <input
            type="password"
            required
            minLength={8}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="mt-1.5 w-full rounded-sm border border-line bg-panel px-4 py-2.5 outline-none focus:border-orange"
          />
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-sm bg-grad-orange px-6 py-3 text-sm font-semibold text-black disabled:opacity-60"
        >
          {loading ? "جاري الإنشاء..." : "إنشاء حساب"}
        </button>
      </form>

      <p className="mt-6 text-sm text-text-muted">
        لديك حساب بالفعل؟{" "}
        <Link href="/login" className="text-orange hover:underline">
          تسجيل الدخول
        </Link>
      </p>
    </section>
  );
}
