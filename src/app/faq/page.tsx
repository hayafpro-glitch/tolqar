import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة",
  description: "أسئلة متكررة حول العمل مع تولقار.",
};

const faqs = [
  {
    q: "كم تستغرق المشاريع عادة؟",
    a: "التأسيس الأولي (MVP) يستغرق عادة 2-4 أسابيع. المنصات الأكبر يتم تحديد نطاقها بشكل فردي حسب المتطلبات.",
  },
  {
    q: "هل تقدمون دعمًا بعد الإطلاق؟",
    a: "نعم، كل تعاون يشمل خيار الصيانة والتطوير المستمر.",
  },
  {
    q: "ما وسائل الدفع التي يدعمها متجركم؟",
    a: "ندعم Stripe وPayPal وUSDT (TRC20/BEP20) وBinance Pay ووسائل دفع محلية يتم التحقق منها يدويًا.",
  },
  {
    q: "هل يمكنكم تطوير مشروع قائم بالفعل؟",
    a: "نعم، نقوم بشكل منتظم بإعادة بناء أو توسيع منتجات قائمة ببنية نظيفة وقابلة للتوسع.",
  },
];

export default function FaqPage() {
  return (
    <section className="container-tolqar max-w-2xl py-20">
      <span className="eyebrow">أسئلة</span>
      <h1 className="mt-4 font-display text-4xl font-bold">
        الأسئلة الشائعة
      </h1>

      <div className="mt-10 divide-y divide-line">
        {faqs.map((f) => (
          <div key={f.q} className="py-6">
            <h3 className="font-display font-bold">{f.q}</h3>
            <p className="mt-2 text-sm text-text-muted">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
