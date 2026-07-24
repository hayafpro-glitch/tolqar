import Link from "next/link";

const services = [
  {
    title: "تطوير المواقع",
    desc: "مواقع حديثة سريعة ومتجاوبة مبنية بتقنية Next.js.",
  },
  {
    title: "منتجات رقمية",
    desc: "منصات متكاملة مصممة للنمو من أول يوم.",
  },
  {
    title: "المتاجر الإلكترونية",
    desc: "متاجر رقمية آمنة تدعم وسائل الدفع العالمية والمحلية.",
  },
  {
    title: "الأتمتة والذكاء الاصطناعي",
    desc: "أنظمة ذكية تسهّل عمل شركتك اليومي.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="container-tolqar py-24 md:py-32">
        <span className="eyebrow">حلول تولقار الرقمية</span>
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.15] md:text-7xl">
          نبني المستقبل، <span className="text-orange">رقميًا.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-text-muted">
          نصمم ونبني منتجات ومنصات وخدمات رقمية مصممة للتوسع — من أول سطر
          كود إلى بنية أعمال متكاملة.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/services"
            className="rounded-sm bg-grad-orange px-6 py-3 text-sm font-semibold text-black"
          >
            استكشف خدماتنا
          </Link>
          <Link
            href="/contact"
            className="rounded-sm border border-line-strong px-6 py-3 text-sm font-semibold text-text hover:bg-panel-hover"
          >
            ابدأ مشروعك
          </Link>
        </div>
      </section>

      <section className="container-tolqar py-16">
        <span className="eyebrow">ماذا نقدم</span>
        <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
          خدماتنا
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-md border border-line bg-panel p-6 transition-colors hover:bg-panel-hover"
            >
              <h3 className="font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
