import { Link } from "@tanstack/react-router";

import { formatDate } from "@/data";
import type { Article } from "@/data/types";

interface ArticleCardProps {
  article: Article;
  layout?: "vertical" | "horizontal";
}

export function ArticleCard({ article, layout = "vertical" }: ArticleCardProps) {
  if (layout === "horizontal") {
    return (
      <Link
        to="/blog/$slug"
        params={{ slug: article.slug }}
        className="group grid gap-5 sm:grid-cols-[minmax(0,11rem)_1fr] sm:items-center"
      >
        <div className="overflow-hidden rounded-lg">
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="aspect-4/3 w-full object-cover transition-transform duration-[1.2s] ease-editorial group-hover:scale-105"
          />
        </div>
        <div>
          <p className="eyebrow text-accent">{article.categoryLabel}</p>
          <h3 className="mt-2 text-lg leading-snug">{article.title}</h3>
          <p className="mt-2 text-xs text-muted-foreground">
            {formatDate(article.date)} · {article.readingMinutes} min de lectura
          </p>
        </div>
      </Link>
    );
  }

  return (
    <article className="group h-full">
      <Link to="/blog/$slug" params={{ slug: article.slug }} className="flex h-full flex-col">
        <div className="overflow-hidden rounded-lg">
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="aspect-3/2 w-full object-cover transition-transform duration-[1.2s] ease-editorial group-hover:scale-[1.05]"
          />
        </div>
        <div className="flex flex-1 flex-col pt-5">
          <p className="eyebrow text-accent">{article.categoryLabel}</p>
          <h3 className="mt-2.5 text-xl leading-[1.25] transition-colors group-hover:text-accent md:text-[1.4rem]">
            {article.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {article.excerpt}
          </p>
          <p className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">
            {formatDate(article.date)} · {article.readingMinutes} min de lectura
          </p>
        </div>
      </Link>
    </article>
  );
}
