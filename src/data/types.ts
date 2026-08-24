/**
 * Modelo de contenido de Buscatuviaje.
 *
 * Todo el contenido se consume a través de `src/data/index.ts`, que expone
 * funciones tipo repositorio (getArticles, getDestination, search...).
 * Para conectar un CMS o una base de datos basta con reimplementar esas
 * funciones manteniendo estos tipos.
 */

export type TripTypeSlug =
  | "playa"
  | "montana"
  | "ciudades"
  | "road-trips"
  | "aventura"
  | "gastronomia"
  | "escapadas"
  | "familia";

export type ContinentSlug = "europa" | "asia" | "america" | "africa" | "oceania";

export interface Category {
  slug: TripTypeSlug;
  name: string;
  emoji: string;
  description: string;
  image: string;
}

export interface Place {
  name: string;
  description: string;
}

export interface Destination {
  slug: string;
  name: string;
  country: string;
  continent: ContinentSlug;
  region: string;
  cities: string[];
  image: string;
  excerpt: string;
  intro: string[];
  bestSeason: string;
  recommendedDays: string;
  budget: string;
  currency: string;
  language: string;
  tripTypes: TripTypeSlug[];
  highlights: Place[];
  featured?: boolean;
}

export interface ArticleBlock {
  type: "paragraph" | "heading" | "quote" | "list" | "note";
  text?: string;
  items?: string[];
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: TripTypeSlug | "guias" | "consejos" | "inspiracion";
  categoryLabel: string;
  destinationSlug?: string;
  image: string;
  author: string;
  date: string; // ISO
  readingMinutes: number;
  featured?: boolean;
  body: ArticleBlock[];
}

export interface Guide {
  slug: string;
  title: string;
  destinationSlug: string;
  destination: string;
  image: string;
  days: string;
  bestSeason: string;
  budget: string;
  articles: number;
  summary: string;
}

export type SearchResult =
  | { kind: "destino"; slug: string; title: string; subtitle: string }
  | { kind: "artículo"; slug: string; title: string; subtitle: string }
  | { kind: "guía"; slug: string; title: string; subtitle: string }
  | { kind: "categoría"; slug: string; title: string; subtitle: string };
