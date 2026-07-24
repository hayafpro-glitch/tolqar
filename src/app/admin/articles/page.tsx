import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminArticlesPage() {
  let articles: Awaited<ReturnType<typeof prisma.article.findMany>> = [];
  try {
    articles = await prisma.article.findMany({ orderBy: { createdAt: "desc" } });
  } catch {
    articles = [];
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold">المقالات</h1>
        <Link
          href="/admin/articles/new"
          className="rounded-sm bg-grad-orange px-4 py-2 text-sm font-semibold text-black"
        >
          + مقال جديد
        </Link>
      </div>

      <div className="mt-8 divide-y divide-line rounded-md border border-line">
        {articles.map((a) => (
          <div key={a.id} className="flex items-center justify-between p-4">
            <span>{a.title}</span>
            <span className="text-xs text-text-faint">
              {a.isPublished ? "منشور" : "مسودة"}
            </span>
          </div>
        ))}
        {articles.length === 0 && (
          <div className="p-8 text-center text-text-muted">
            لا توجد مقالات بعد.
          </div>
        )}
      </div>
    </div>
  );
}
