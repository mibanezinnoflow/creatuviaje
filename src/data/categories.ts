import type { Category } from "./types";

import playa from "@/assets/cat-playa.jpg";
import montana from "@/assets/cat-montana.jpg";
import ciudades from "@/assets/cat-ciudades.jpg";
import roadtrip from "@/assets/cat-roadtrip.jpg";
import aventura from "@/assets/cat-aventura.jpg";
import gastronomia from "@/assets/cat-gastronomia.jpg";
import italia from "@/assets/dest-italia.jpg";
import tailandia from "@/assets/dest-tailandia.jpg";

export const categories: Category[] = [
  {
    slug: "playa",
    name: "Playa",
    emoji: "🌊",
    description: "Costas tranquilas, islas y calas donde el plan es no tener plan.",
    image: playa,
  },
  {
    slug: "montana",
    name: "Montaña",
    emoji: "🏔️",
    description: "Valles, refugios y rutas de altura para respirar despacio.",
    image: montana,
  },
  {
    slug: "ciudades",
    name: "Ciudades",
    emoji: "🏙️",
    description: "Barrios, cafés y museos en las ciudades que merecen volver.",
    image: ciudades,
  },
  {
    slug: "road-trips",
    name: "Road trips",
    emoji: "🚐",
    description: "Carreteras largas, paradas improvisadas y mapas en la guantera.",
    image: roadtrip,
  },
  {
    slug: "aventura",
    name: "Aventura",
    emoji: "🥾",
    description: "Trekkings, volcanes y días que empiezan antes del amanecer.",
    image: aventura,
  },
  {
    slug: "gastronomia",
    name: "Gastronomía",
    emoji: "🍷",
    description: "Mercados, vinos y mesas locales como excusa para viajar.",
    image: gastronomia,
  },
  {
    slug: "escapadas",
    name: "Escapadas",
    emoji: "💑",
    description: "Tres días bien elegidos valen más que dos semanas mal planeadas.",
    image: italia,
  },
  {
    slug: "familia",
    name: "Viajes en familia",
    emoji: "👨‍👩‍👧",
    description: "Destinos cómodos, distancias cortas y planes para todas las edades.",
    image: tailandia,
  },
];
