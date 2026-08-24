import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";

import heroImage from "@/assets/hero.jpg";
import { SearchIcon } from "./SearchOverlay";

const quickLinks = [
  { label: "Europa", to: "/destinos" as const, search: { continente: "europa", tipo: "todos", q: "" } },
  { label: "Asia", to: "/destinos" as const, search: { continente: "asia", tipo: "todos", q: "" } },
  { label: "América", to: "/destinos" as const, search: { continente: "america", tipo: "todos", q: "" } },
  { label: "Playas", to: "/destinos" as const, search: { continente: "todos", tipo: "playa", q: "" } },
  { label: "Escapadas", to: "/destinos" as const, search: { continente: "todos", tipo: "escapadas", q: "" } },
  { label: "Naturaleza", to: "/destinos" as const, search: { continente: "todos", tipo: "montana", q: "" } },
];

export function Hero() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  return (
    <section className="relative">
      <div className="relative h-[86vh] min-h-[34rem] w-full overflow-hidden md:h-[92vh]">
        <img
          src={heroImage}
          alt="Carretera de montaña al amanecer entre valles con niebla"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/25 to-foreground/65" />

        <div className="absolute inset-0 flex items-end pb-14 md:items-center md:pb-0">
          <div className="container-editorial">
            <div className="max-w-2xl animate-fade-up">
              <p className="eyebrow text-background/75">Buscatuviaje · Revista de viajes</p>
              <h1 className="mt-5 text-[2.75rem] leading-[0.98] text-background md:text-[4.5rem]">
                Viaja más.
                <br />
                Descubre más.
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-background/85 md:text-lg">
                Historias, destinos y consejos para ayudarte a descubrir tu próximo viaje.
              </p>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  navigate({
                    to: "/destinos",
                    search: { continente: "todos", tipo: "todos", q: query },
                  });
                }}
                className="mt-9 flex w-full max-w-lg items-center gap-2 rounded-full border border-background/25 bg-background/95 p-1.5 pl-5 backdrop-blur"
              >
                <SearchIcon className="size-4 shrink-0 text-muted-foreground" />
                <label className="sr-only" htmlFor="hero-search">
                  ¿Dónde quieres viajar?
                </label>
                <input
                  id="hero-search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="¿Dónde quieres viajar?"
                  className="w-full bg-transparent py-2.5 text-sm outline-none placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Buscar
                </button>
              </form>

              <ul className="mt-6 flex flex-wrap gap-2">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      search={item.search}
                      className="inline-flex rounded-full border border-background/30 px-4 py-2 text-xs text-background/90 transition-colors duration-300 hover:border-background hover:bg-background/10"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
