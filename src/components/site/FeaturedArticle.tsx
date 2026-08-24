import { Link } from "@tanstack/react-router";

import { formatDate } from "@/data";
import type { Article } from "@/data/types";

export function FeaturedArticle({ article }: { article: Article }) {
  return (
    <article className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
      <Link
        to="/blog/$slug"
        params={{ slug: article.slug }}
        className="group order-1 overflow-hidden rounded-lg lg:order-none"
      >
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="aspect-4/3 w-full object-cover transition-transform duration-[1.4s] ease-editorial group-hover:scale-[1.04] lg:aspect-4/5"
        />
      </Link>

      <div className="order-2 lg:order-none">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="eyebrow text-accent">{article.categoryLabel}</span>
          <span className="size-1 rounded-full bg-border" />
          <span>{article.readingMinutes} min de lectura</span>
          <span className="size-1 rounded-full bg-border" />
          <span>{formatDate(article.date)}</span>
        </div>
        <h2 className="mt-5 text-3xl leading-[1.05] md:text-[3rem]">{article.title}</h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {article.excerpt}
        </p>
        <Link
          to="/blog/$slug"
          params={{ slug: article.slug }}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
        >
          Leer guía
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
