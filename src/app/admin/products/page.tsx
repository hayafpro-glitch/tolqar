import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/utils";
import DeleteProductButton from "./DeleteProductButton";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage() {
  let products: Awaited<ReturnType<typeof prisma.product.findMany>> = [];
  try {
    products = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });
  } catch {
    products = [];
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold">المنتجات</h1>
        <Link
          href="/admin/products/new"
          className="rounded-sm bg-grad-orange px-4 py-2 text-sm font-semibold text-black"
        >
          + منتج جديد
        </Link>
      </div>

      <div className="mt-8 overflow-x-auto rounded-md border border-line">
        <table className="w-full text-right text-sm">
          <thead className="border-b border-line text-text-faint">
            <tr>
              <th className="p-4"></th>
              <th className="p-4">العنوان</th>
              <th className="p-4">السعر</th>
              <th className="p-4">المبيعات</th>
              <th className="p-4">الحالة</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b border-line last:border-0">
                <td className="p-4">
                  {p.coverImage ? (
                    <div className="relative h-10 w-10 overflow-hidden rounded-sm">
                      <Image src={p.coverImage} alt={p.title} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="h-10 w-10 rounded-sm bg-panel-hover" />
                  )}
                </td>
                <td className="p-4">{p.title}</td>
                <td className="p-4">{formatPrice(p.price)}</td>
                <td className="p-4">{p.salesCount}</td>
                <td className="p-4">
                  {p.isPublished ? (
                    <span className="text-orange">منشور</span>
                  ) : (
                    <span className="text-text-faint">مسودة</span>
                  )}
                </td>
                <td className="p-4 text-left">
                  <DeleteProductButton id={p.id} />
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan={6} className="p-8 text-center text-text-muted">
                  لا توجد منتجات بعد.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
