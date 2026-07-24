import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الخصوصية والشروط",
  description: "سياسة الخصوصية وشروط الاستخدام لتولقار.",
};

export default function PrivacyPage() {
  return (
    <section className="container-tolqar max-w-2xl py-20">
      <span className="eyebrow">قانوني</span>
      <h1 className="mt-4 font-display text-4xl font-bold">
        الخصوصية والشروط
      </h1>

      <div className="prose prose-invert mt-8 max-w-none space-y-6 text-text-muted">
        <div>
          <h2 className="font-display text-lg font-bold text-text">
            المعلومات التي نجمعها
          </h2>
          <p className="mt-2 text-sm">
            نجمع المعلومات التي تقدمها مباشرة (الاسم، البريد الإلكتروني،
            بيانات الدفع) عند إنشاء حساب أو شراء منتج أو التواصل معنا.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-text">
            كيف نستخدمها
          </h2>
          <p className="mt-2 text-sm">
            تُستخدم معلوماتك لمعالجة الطلبات وإدارة حسابك وإرسال تحديثات
            متعلقة بالخدمات التي تستخدمها.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-text">
            بيانات الدفع
          </h2>
          <p className="mt-2 text-sm">
            تتم معالجة مدفوعات البطاقات مباشرة عبر Stripe/PayPal — لا تخزّن
            تولقار بيانات بطاقتك الكاملة على خوادمها.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-text">
            التواصل
          </h2>
          <p className="mt-2 text-sm">
            يمكن إرسال أي استفسارات حول هذه السياسة عبر صفحة التواصل معنا.
          </p>
        </div>
      </div>
    </section>
  );
}
