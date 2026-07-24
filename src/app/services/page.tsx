import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الخدمات",
  description: "منصات ويب ومنتجات رقمية وأتمتة تبنيها تولقار.",
};

const services = [
  {
    title: "تطوير المواقع",
    desc: "منصات مخصصة مبنية بـ Next.js وTypeScript وPostgreSQL — بدون قوالب جاهزة.",
  },
  {
    title: "حلول المتاجر الإلكترونية",
    desc: "متاجر رقمية تدعم وسائل الدفع العالمية والمحلية، مع أنظمة كوبونات وإدارة طلبات.",
  },
  {
    title: "تصميم واجهات المستخدم",
    desc: "واجهات مصممة حسب طريقة تفكير مستخدميك الفعلية، لا قوالب عامة جاهزة.",
  },
  {
    title: "الذكاء الاصطناعي والأتمتة",
    desc: "أتمتة سير العمل وأدوات ذكية تزيل الأعمال المتكررة عن فريقك.",
  },
  {
    title: "البنية التحتية السحابية",
    desc: "استضافة قابلة للتوسع وآمنة — من منتج واحد إلى منصة متعددة الخدمات.",
  },
  {
    title: "الدعم المستمر",
    desc: "صيانة ومتابعة وتطوير طويل الأمد — المنصة لا تنتهي أبدًا عند الإطلاق.",
  },
];

export default function ServicesPage() {
  return (
    <section className="container-tolqar py-20">
      <span className="eyebrow">ماذا نقدم</span>
      <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">
        الخدمات
      </h1>
      <p className="mt-4 max-w-xl text-text-muted">
        حلول رقمية متكاملة، مبنية كبرمجيات حقيقية — لا مجمّعة من قوالب.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-md border border-line bg-panel p-6">
            <h3 className="font-display text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
