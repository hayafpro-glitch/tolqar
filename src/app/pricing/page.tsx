import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الأسعار",
  description: "خطط تعاون تولقار — من التأسيس الأولي إلى المنصات الكاملة.",
};

const plans = [
  {
    name: "التأسيس الأولي",
    desc: "نقطة انطلاق جاهزة للإنتاج.",
    features: [
      "موقع أو تطبيق أساسي",
      "حتى 5 صفحات/شاشات",
      "وصول أساسي للوحة التحكم",
      "النشر وربط الدومين",
    ],
  },
  {
    name: "منصة النمو",
    desc: "للمنتجات الجاهزة للتوسع مع مستخدمين حقيقيين.",
    features: [
      "منصة مخصصة كاملة",
      "لوحة تحكم إدارية",
      "دمج بوابات الدفع",
      "حسابات المستخدمين والصلاحيات",
    ],
    highlighted: true,
  },
  {
    name: "المؤسسات",
    desc: "منصات متعددة الخدمات مع دعم مخصص.",
    features: [
      "كل ما في خطة النمو",
      "تكاملات مخصصة",
      "اتفاقية مستوى خدمة ودعم أولوية",
      "بنية تحتية مخصصة",
    ],
  },
];

export default function PricingPage() {
  return (
    <section className="container-tolqar py-20">
      <span className="eyebrow">خطط التعاون</span>
      <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">
        الأسعار
      </h1>
      <p className="mt-4 max-w-xl text-text-muted">
        كل مشروع يُحدد نطاقه بشكل فردي. هذه الخطط توضح طريقة تنظيمنا
        المعتادة للمشاريع — تواصل معنا للحصول على عرض سعر دقيق.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-md border p-6 ${
              plan.highlighted
                ? "border-orange bg-panel-hover"
                : "border-line bg-panel"
            }`}
          >
            <h3 className="font-display text-lg font-bold">{plan.name}</h3>
            <p className="mt-2 text-sm text-text-muted">{plan.desc}</p>
            <ul className="mt-5 space-y-2 text-sm text-text-muted">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-orange" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
