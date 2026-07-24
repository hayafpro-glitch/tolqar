# TOLQAR Platform

منصة TOLQAR التقنية الكاملة — Next.js 14 + TypeScript + Tailwind + PostgreSQL + Prisma.

## ما الذي تم بناؤه فعليًا (Phase 1 — MVP)

- ✅ 10 صفحات عامة: الرئيسية، الخدمات، المتجر، معرض الأعمال، المدونة، الأسعار، الأسئلة الشائعة، من نحن، التواصل، سياسة الخصوصية
- ✅ نظام تسجيل دخول/تسجيل حساب (NextAuth + تشفير bcrypt)
- ✅ صلاحيات المستخدمين: ADMIN / EDITOR / CUSTOMER
- ✅ لوحة تحكم Admin: إدارة المنتجات (كاملة)، الطلبات (تغيير الحالة)، الكوبونات، المقالات، المستخدمين
- ✅ قاعدة بيانات كاملة (Prisma Schema) تغطي: المنتجات، الطلبات، الاشتراكات، التقييمات، طرق الدفع المحلية

## ما لم يُبنَ بعد (يحتاج إعداد فعلي منك)

- ⏳ ربط بوابات الدفع الفعلية (Stripe/PayPal/USDT) بصفحة الدفع (Checkout) — يحتاج مفاتيح API حقيقية منك
- ⏳ صفحة السلة (Cart) وتدفق الدفع الكامل (Checkout flow)
- ⏳ رفع الملفات/الصور (يحتاج خدمة تخزين مثل Vercel Blob أو Cloudflare R2)
- ⏳ تطبيقات الجوال (Android/iOS) — مرحلة لاحقة بعد استقرار المنصة
- ⏳ قسم أدوات الذكاء الاصطناعي — يحتاج تحديد الأدوات المطلوبة بالضبط

---

## التشغيل خطوة بخطوة

### 1. المتطلبات
- Node.js 18 أو أحدث
- حساب على [Vercel Postgres](https://vercel.com/storage/postgres) أو [Neon](https://neon.tech) (قاعدة بيانات مجانية)

### 2. التثبيت المحلي
```bash
npm install
```

### 3. إعداد المتغيرات البيئية
انسخ `.env.example` باسم `.env` وعبّي القيم (خصوصًا `DATABASE_URL` و `NEXTAUTH_SECRET`).

### 4. إنشاء جداول قاعدة البيانات
```bash
npm run db:push
```

### 5. التشغيل محليًا
```bash
npm run dev
```
افتح `http://localhost:3000`

### 6. إنشاء أول حساب Admin
سجّل حساب عادي من `/register`، ثم من قاعدة البيانات (عبر `npm run db:studio`) غيّر قيمة `role` للمستخدم من `CUSTOMER` إلى `ADMIN` يدويًا لأول مرة فقط.

---

## الرفع على GitHub و Vercel

```bash
git init
git add .
git commit -m "TOLQAR Platform - Initial MVP"
git remote add origin <رابط-مستودعك-على-GitHub>
git push -u origin main
```

بعدها اربط المستودع بمشروع Vercel الموجود (نفس اللي فيه دومين tolqar.com حاليًا)، وأضف كل المتغيرات البيئية من `.env` داخل إعدادات المشروع على Vercel (Settings → Environment Variables).

---

## البنية

```
src/
  app/            صفحات Next.js (App Router)
    admin/        لوحة التحكم (محمية بالصلاحيات)
    api/          نقاط الاتصال الخلفية (API Routes)
  components/     مكونات قابلة لإعادة الاستخدام
  lib/            الاتصال بقاعدة البيانات، المصادقة، الأدوات المساعدة
prisma/
  schema.prisma   مخطط قاعدة البيانات الكامل
```
