import { prisma } from "@/lib/prisma";
import NewCouponForm from "./NewCouponForm";

export const dynamic = "force-dynamic";

export default async function AdminCouponsPage() {
  let coupons: Awaited<ReturnType<typeof prisma.coupon.findMany>> = [];
  try {
    coupons = await prisma.coupon.findMany({ orderBy: { code: "asc" } });
  } catch {
    coupons = [];
  }

  return (
    <div>
      <h1 className="font-display text-2xl font-bold">الكوبونات</h1>

      <NewCouponForm />

      <div className="mt-8 overflow-x-auto rounded-md border border-line">
        <table className="w-full text-right text-sm">
          <thead className="border-b border-line text-text-faint">
            <tr>
              <th className="p-4">الكود</th>
              <th className="p-4">الخصم</th>
              <th className="p-4">الاستخدام</th>
              <th className="p-4">مفعّل</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((c) => (
              <tr key={c.id} className="border-b border-line last:border-0">
                <td className="p-4 font-mono" dir="ltr">{c.code}</td>
                <td className="p-4">
                  {c.discountValue.toString()}
                  {c.discountType === "PERCENT" ? "%" : " دولار"}
                </td>
                <td className="p-4">
                  {c.usedCount}
                  {c.maxUses ? ` / ${c.maxUses}` : ""}
                </td>
                <td className="p-4">{c.isActive ? "نعم" : "لا"}</td>
              </tr>
            ))}
            {coupons.length === 0 && (
              <tr>
                <td colSpan={4} className="p-8 text-center text-text-muted">
                  لا توجد كوبونات بعد.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
