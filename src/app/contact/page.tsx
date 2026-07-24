import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: "ابدأ مشروعك مع تولقار.",
};

export default function ContactPage() {
  return (
    <section className="container-tolqar max-w-xl py-20">
      <span className="eyebrow">تواصل معنا</span>
      <h1 className="mt-4 font-display text-4xl font-bold">تواصل معنا</h1>
      <p className="mt-4 text-text-muted">
        أخبرنا عن مشروعك — عادة نرد خلال يوم عمل واحد.
      </p>

      <form className="mt-10 space-y-5">
        <div>
          <label className="text-sm text-text-muted">الاسم</label>
          <input
            type="text"
            required
            className="mt-1.5 w-full rounded-sm border border-line bg-panel px-4 py-2.5 outline-none focus:border-orange"
          />
        </div>
        <div>
          <label className="text-sm text-text-muted">البريد الإلكتروني</label>
          <input
            type="email"
            required
            className="mt-1.5 w-full rounded-sm border border-line bg-panel px-4 py-2.5 outline-none focus:border-orange"
          />
        </div>
        <div>
          <label className="text-sm text-text-muted">الرسالة</label>
          <textarea
            required
            rows={5}
            className="mt-1.5 w-full rounded-sm border border-line bg-panel px-4 py-2.5 outline-none focus:border-orange"
          />
        </div>
        <button
          type="submit"
          className="rounded-sm bg-grad-orange px-6 py-3 text-sm font-semibold text-black"
        >
          إرسال الرسالة
        </button>
      </form>
    </section>
  );
}
