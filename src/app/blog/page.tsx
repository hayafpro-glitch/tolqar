import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "المدونة",
  description: "مقالات حول تطوير تولقار — المنتج والهندسة وأخبار الشركة.",
};
export const dynamic = "force-dynamic";

export default async function BlogPage() {
  let articles: Awaited<ReturnType<typeof prisma.article.findMany>> = [];
  try {
    articles = await prisma.article.findMany({
      where: { isPublished: true },
      orderBy: { publishedAt: "desc" },
    });
  } catch {
    articles = [];
  }

  return (
    <section className="container-tolqar py-20">
      <span className="eyebrow">مقالات</span>
      <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">
        المدونة
      </h1>

      {articles.length === 0 ? (
        <div className="mt-16 rounded-md border border-dashed border-line p-12 text-center text-text-muted">
          لا توجد مقالات منشورة بعد.
        </div>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {articles.map((a) => (
            <Link
              key={a.id}
              href={`/blog/${a.slug}`}
              className="block overflow-hidden rounded-md border border-line bg-panel hover:bg-panel-hover"
            >
              <div className="relative aspect-video w-full bg-panel-hover">
                {a.coverImage && (
                  <Image
                    src={a.coverImage}
                    alt={a.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl font-bold">{a.title}</h2>
                {a.excerpt && (
                  <p className="mt-2 text-text-muted">{a.excerpt}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
