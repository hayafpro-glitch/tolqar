import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "من نحن",
  description: "تولقار شركة تقنية تبني منتجات ومنصات وخدمات رقمية مصممة للتوسع.",
};

export default function AboutPage() {
  return (
    <section className="container-tolqar max-w-2xl py-20">
      <span className="eyebrow">من نحن</span>
      <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">
        تولقار
      </h1>
      <p className="mt-6 text-lg text-text-muted">
        تولقار شركة تقنية تبني منتجات ومنصات وخدمات رقمية مصممة للتوسع.
        نبني برمجيات مخصصة — لا قوالب جاهزة — لأن الشركات التي نعمل معها
        تحتاج بنية تحتية تنمو معها، لا تحدّها.
      </p>
      <p className="mt-4 text-text-muted">
        من تطبيق ويب واحد إلى منصة رقمية كاملة، منهجنا واحد دائمًا: بنية
        نظيفة، هندسة حقيقية، ونظرة بعيدة المدى لما يحتاجه المنتج مستقبلًا.
      </p>
    </section>
  );
}
