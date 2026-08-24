import type { Guide } from "./types";

import japon from "@/assets/dest-japon.jpg";
import italia from "@/assets/dest-italia.jpg";
import portugal from "@/assets/dest-portugal.jpg";
import islandia from "@/assets/dest-islandia.jpg";

export const guides: Guide[] = [
  {
    slug: "guia-japon",
    title: "Guía completa de Japón",
    destinationSlug: "japon",
    destination: "Japón",
    image: japon,
    days: "12–16 días",
    bestSeason: "Primavera y otoño",
    budget: "110–150 € / día",
    articles: 12,
    summary:
      "Rutas, transporte, etiqueta y presupuesto para organizar un primer viaje sin depender de tours.",
  },
  {
    slug: "guia-italia",
    title: "Guía de Italia",
    destinationSlug: "italia",
    destination: "Italia",
    image: italia,
    days: "8–12 días",
    bestSeason: "Abril–junio y septiembre",
    budget: "90–130 € / día",
    articles: 9,
    summary:
      "Cómo combinar norte y sur, cuándo evitar cada ciudad y dónde comer sin caer en trampas.",
  },
  {
    slug: "guia-portugal",
    title: "Guía de Portugal",
    destinationSlug: "portugal",
    destination: "Portugal",
    image: portugal,
    days: "5–9 días",
    bestSeason: "Mayo–junio y septiembre",
    budget: "70–100 € / día",
    articles: 8,
    summary:
      "Lisboa, Oporto, Alentejo y la costa atlántica en un país que se recorre entero en coche.",
  },
  {
    slug: "guia-islandia",
    title: "Guía de Islandia",
    destinationSlug: "islandia",
    destination: "Islandia",
    image: islandia,
    days: "8–12 días",
    bestSeason: "Junio–agosto y febrero–marzo",
    budget: "150–200 € / día",
    articles: 7,
    summary:
      "Ring Road, camper, auroras y clima: todo lo que hay que decidir antes de reservar.",
  },
];
