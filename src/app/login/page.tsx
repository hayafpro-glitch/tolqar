"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
      return;
    }
    router.push("/");
    router.refresh();
  }

  return (
    <section className="container-tolqar max-w-sm py-24">
      <h1 className="font-display text-3xl font-bold">تسجيل الدخول</h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label className="text-sm text-text-muted">البريد الإلكتروني</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full rounded-sm border border-line bg-panel px-4 py-2.5 outline-none focus:border-orange"
          />
        </div>
        <div>
          <label className="text-sm text-text-muted">كلمة المرور</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1.5 w-full rounded-sm border border-line bg-panel px-4 py-2.5 outline-none focus:border-orange"
          />
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-sm bg-grad-orange px-6 py-3 text-sm font-semibold text-black disabled:opacity-60"
        >
          {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
        </button>
      </form>

      <p className="mt-6 text-sm text-text-muted">
        ليس لديك حساب؟{" "}
        <Link href="/register" className="text-orange hover:underline">
          أنشئ حسابًا
        </Link>
      </p>
    </section>
  );
}
