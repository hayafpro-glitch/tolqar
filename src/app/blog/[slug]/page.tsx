import { notFound } from "next/navigation";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  let article = null;
  try {
    article = await prisma.article.findUnique({ where: { slug: params.slug } });
  } catch {
    article = null;
  }

  if (!article) notFound();

  return (
    <article className="container-tolqar max-w-2xl py-20">
      {article.coverImage && (
        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-md bg-panel">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <h1 className="font-display text-3xl font-bold md:text-4xl">
        {article.title}
      </h1>
      <div className="prose prose-invert mt-8 max-w-none text-text-muted">
        {article.content}
      </div>
    </article>
  );
}
