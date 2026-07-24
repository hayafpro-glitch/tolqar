import { prisma } from "@/lib/prisma";

export default async function AdminOverview() {
  let stats = { products: 0, orders: 0, users: 0, articles: 0 };

  try {
    const [products, orders, users, articles] = await Promise.all([
      prisma.product.count(),
      prisma.order.count(),
      prisma.user.count(),
      prisma.article.count(),
    ]);
    stats = { products, orders, users, articles };
  } catch {
    // قاعدة البيانات غير متصلة بعد
  }

  const cards = [
    { label: "المنتجات", value: stats.products },
    { label: "الطلبات", value: stats.orders },
    { label: "المستخدمون", value: stats.users },
    { label: "المقالات", value: stats.articles },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold">لوحة التحكم</h1>
      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.label} className="rounded-md border border-line bg-panel p-5">
            <div className="text-2xl font-bold">{c.value}</div>
            <div className="mt-1 text-sm text-text-muted">{c.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
