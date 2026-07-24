"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewCouponForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    code: "",
    discountType: "PERCENT",
    discountValue: "",
  });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/admin/coupons", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        discountValue: parseFloat(form.discountValue),
      }),
    });
    setLoading(false);
    setForm({ code: "", discountType: "PERCENT", discountValue: "" });
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-wrap gap-3">
      <input
        placeholder="الكود"
        required
        value={form.code}
        onChange={(e) => setForm({ ...form, code: e.target.value.toUpperCase() })}
        className="rounded-sm border border-line bg-panel px-3 py-2 text-sm outline-none focus:border-orange"
        dir="ltr"
      />
      <select
        value={form.discountType}
        onChange={(e) => setForm({ ...form, discountType: e.target.value })}
        className="rounded-sm border border-line bg-panel px-3 py-2 text-sm"
      >
        <option value="PERCENT">نسبة مئوية %</option>
        <option value="FIXED">مبلغ ثابت $</option>
      </select>
      <input
        placeholder="القيمة"
        type="number"
        required
        value={form.discountValue}
        onChange={(e) => setForm({ ...form, discountValue: e.target.value })}
        className="w-28 rounded-sm border border-line bg-panel px-3 py-2 text-sm outline-none focus:border-orange"
      />
      <button
        disabled={loading}
        className="rounded-sm bg-grad-orange px-4 py-2 text-sm font-semibold text-black disabled:opacity-60"
      >
        {loading ? "جاري الإضافة..." : "إضافة كوبون"}
      </button>
    </form>
  );
}
