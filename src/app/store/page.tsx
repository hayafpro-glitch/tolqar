import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "المتجر",
  description: "منتجات تولقار الرقمية.",
};

export const dynamic = "force-dynamic";

export default async function StorePage() {
  let products: Awaited<ReturnType<typeof prisma.product.findMany>> = [];

  try {
    products = await prisma.product.findMany({
      where: { isPublished: true },
      orderBy: { createdAt: "desc" },
    });
  } catch {
    products = [];
  }

  return (
    <section className="container-tolqar py-20">
      <span className="eyebrow">المتجر الرقمي</span>
      <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">
        المنتجات
      </h1>

      {products.length === 0 ? (
        <div className="mt-16 rounded-md border border-dashed border-line p-12 text-center text-text-muted">
          لا توجد منتجات منشورة بعد. أضف أول منتج من لوحة التحكم.
        </div>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.id}
              href={`/store/${p.slug}`}
              className="group rounded-md border border-line bg-panel p-5 transition-colors hover:bg-panel-hover"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-panel-hover">
                {p.coverImage && (
                  <Image
                    src={p.coverImage}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <h3 className="mt-4 font-display text-base font-bold">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-text-muted line-clamp-2">
                {p.description}
              </p>
              <div className="mt-3 font-semibold text-orange">
                {formatPrice(p.discountPrice ?? p.price)}
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
