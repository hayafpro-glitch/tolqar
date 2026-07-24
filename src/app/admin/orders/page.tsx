import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { formatPrice } from "@/lib/utils";
import OrderStatusSelect from "./OrderStatusSelect";

export const dynamic = "force-dynamic";

type OrderWithRelations = Prisma.OrderGetPayload<{ include: { user: true; items: { include: { product: true } } } }>;

export default async function AdminOrdersPage() {
  let orders: OrderWithRelations[] = [];
  try {
    orders = await prisma.order.findMany({
      orderBy: { createdAt: "desc" },
      include: { user: true, items: { include: { product: true } } },
    });
  } catch {
    orders = [];
  }

  return (
    <div>
      <h1 className="font-display text-2xl font-bold">الطلبات</h1>

      <div className="mt-8 overflow-x-auto rounded-md border border-line">
        <table className="w-full text-right text-sm">
          <thead className="border-b border-line text-text-faint">
            <tr>
              <th className="p-4">رقم الطلب</th>
              <th className="p-4">العميل</th>
              <th className="p-4">الإجمالي</th>
              <th className="p-4">طريقة الدفع</th>
              <th className="p-4">الحالة</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-b border-line last:border-0">
                <td className="p-4 font-mono text-xs" dir="ltr">{o.orderNumber}</td>
                <td className="p-4">{o.user?.name ?? o.user?.email}</td>
                <td className="p-4">{formatPrice(o.totalAmount)}</td>
                <td className="p-4">{o.paymentMethod}</td>
                <td className="p-4">
                  <OrderStatusSelect id={o.id} status={o.status} />
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-text-muted">
                  لا توجد طلبات بعد.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
