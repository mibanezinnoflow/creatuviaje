import { articles } from "./articles";
import { categories } from "./categories";
import { destinations } from "./destinations";
import { guides } from "./guides";
import type { Article, Destination, SearchResult } from "./types";

export { articles, categories, destinations, guides };
export type * from "./types";

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export function getArticles(options?: {
  category?: string;
  destination?: string;
  query?: string;
  order?: "recientes" | "antiguos" | "lectura";
  limit?: number;
}): Article[] {
  const { category, destination, query, order = "recientes", limit } = options ?? {};
  const q = query ? normalize(query) : "";

  let result = articles.filter((article) => {
    if (category && category !== "todas" && article.category !== category) return false;
    if (destination && destination !== "todos" && article.destinationSlug !== destination)
      return false;
    if (q) {
      const haystack = normalize(
        [article.title, article.subtitle, article.excerpt, article.categoryLabel].join(" "),
      );
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  result = [...result].sort((a, b) => {
    if (order === "lectura") return a.readingMinutes - b.readingMinutes;
    const diff = new Date(a.date).getTime() - new Date(b.date).getTime();
    return order === "antiguos" ? diff : -diff;
  });

  return typeof limit === "number" ? result.slice(0, limit) : result;
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getFeaturedArticle(): Article {
  return articles.find((article) => article.featured) ?? articles[0]!;
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  const sameDestination = articles.filter(
    (item) => item.slug !== article.slug && item.destinationSlug === article.destinationSlug,
  );
  const rest = articles.filter(
    (item) => item.slug !== article.slug && item.destinationSlug !== article.destinationSlug,
  );
  return [...sameDestination, ...rest].slice(0, limit);
}

export function getDestinations(options?: {
  continent?: string;
  tripType?: string;
  query?: string;
  limit?: number;
}): Destination[] {
  const { continent, tripType, query, limit } = options ?? {};
  const q = query ? normalize(query) : "";

  const result = destinations.filter((destination) => {
    if (continent && continent !== "todos" && destination.continent !== continent) return false;
    if (tripType && tripType !== "todos" && !destination.tripTypes.includes(tripType as never))
      return false;
    if (q) {
      const haystack = normalize(
        [destination.name, destination.country, destination.region, ...destination.cities].join(" "),
      );
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  return typeof limit === "number" ? result.slice(0, limit) : result;
}

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((destination) => destination.slug === slug);
}

export function getFeaturedDestinations(): Destination[] {
  return destinations.filter((destination) => destination.featured || destination.slug !== "espana");
}

export function countArticlesByDestination(slug: string): number {
  return articles.filter((article) => article.destinationSlug === slug).length;
}

export function getGuides(destinationSlug?: string) {
  return destinationSlug ? guides.filter((g) => g.destinationSlug === destinationSlug) : guides;
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function search(query: string, limit = 8): SearchResult[] {
  const q = normalize(query.trim());
  if (q.length < 2) return [];

  const results: SearchResult[] = [];

  for (const destination of destinations) {
    const haystack = normalize(
      [destination.name, destination.country, destination.region, ...destination.cities].join(" "),
    );
    if (haystack.includes(q)) {
      results.push({
        kind: "destino",
        slug: destination.slug,
        title: destination.name,
        subtitle: destination.region,
      });
    }
  }

  for (const guide of guides) {
    if (normalize(guide.title + " " + guide.destination).includes(q)) {
      results.push({
        kind: "guía",
        slug: guide.slug,
        title: guide.title,
        subtitle: `${guide.days} · ${guide.budget}`,
      });
    }
  }

  for (const article of articles) {
    if (normalize([article.title, article.subtitle, article.excerpt].join(" ")).includes(q)) {
      results.push({
        kind: "artículo",
        slug: article.slug,
        title: article.title,
        subtitle: article.categoryLabel,
      });
    }
  }

  for (const category of categories) {
    if (normalize(category.name + " " + category.description).includes(q)) {
      results.push({
        kind: "categoría",
        slug: category.slug,
        title: category.name,
        subtitle: "Tipo de viaje",
      });
    }
  }

  return results.slice(0, limit);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
