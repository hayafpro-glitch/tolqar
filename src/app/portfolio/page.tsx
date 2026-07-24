import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = { title: "أعمالنا" };
export const dynamic = "force-dynamic";

export default async function PortfolioPage() {
  let items: Awaited<ReturnType<typeof prisma.portfolioItem.findMany>> = [];
  try {
    items = await prisma.portfolioItem.findMany({
      where: { isPublished: true },
      orderBy: { createdAt: "desc" },
    });
  } catch {
    items = [];
  }

  return (
    <section className="container-tolqar py-20">
      <span className="eyebrow">أعمالنا</span>
      <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">
        معرض الأعمال
      </h1>

      {items.length === 0 ? (
        <div className="mt-16 rounded-md border border-dashed border-line p-12 text-center text-text-muted">
          ستظهر أعمالنا هنا فور إضافتها من لوحة التحكم.
        </div>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.projectUrl ?? "#"}
              className="rounded-md border border-line bg-panel p-5 hover:bg-panel-hover"
            >
              <div className="aspect-video rounded-sm bg-panel-hover" />
              <h3 className="mt-4 font-display font-bold">{item.title}</h3>
              <p className="mt-1 text-sm text-text-muted line-clamp-2">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
