import { notFound } from "next/navigation";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  let product = null;
  try {
    product = await prisma.product.findUnique({
      where: { slug: params.slug },
      include: { category: true, reviews: true },
    });
  } catch {
    product = null;
  }

  if (!product) notFound();

  return (
    <section className="container-tolqar grid gap-10 py-20 md:grid-cols-2">
      <div className="relative aspect-square overflow-hidden rounded-md bg-panel">
        {product.coverImage && (
          <Image
            src={product.coverImage}
            alt={product.title}
            fill
            className="object-cover"
          />
        )}
      </div>

      <div>
        {product.category && (
          <span className="eyebrow">{product.category.name}</span>
        )}
        <h1 className="mt-4 font-display text-3xl font-bold">
          {product.title}
        </h1>
        <p className="mt-4 text-text-muted">{product.description}</p>

        <div className="mt-6 flex items-baseline gap-3">
          <span className="font-display text-3xl font-bold text-orange">
            {formatPrice(product.discountPrice ?? product.price)}
          </span>
          {product.discountPrice && (
            <span className="text-text-faint line-through">
              {formatPrice(product.price)}
            </span>
          )}
        </div>

        <button className="mt-8 rounded-sm bg-grad-orange px-6 py-3 text-sm font-semibold text-black">
          اشترِ الآن
        </button>

        <p className="mt-3 text-xs text-text-faint">
          {product.salesCount} عملية بيع · تسليم رقمي فوري بعد الدفع
        </p>
      </div>
    </section>
  );
}
