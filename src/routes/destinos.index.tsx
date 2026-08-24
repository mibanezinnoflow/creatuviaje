import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { DestinationCard } from "@/components/site/DestinationCard";
import { Filters } from "@/components/site/Filters";
import { Newsletter } from "@/components/site/Newsletter";
import { categories, destinations, getDestinations } from "@/data";

interface DestinosSearch {
  q: string;
  continente: string;
  tipo: string;
}

export const Route = createFileRoute("/destinos/")({
  validateSearch: (search: Record<string, unknown>): DestinosSearch => ({
    q: typeof search.q === "string" ? search.q : "",
    continente: typeof search.continente === "string" ? search.continente : "todos",
    tipo: typeof search.tipo === "string" ? search.tipo : "todos",
  }),
  head: () => ({
    meta: [
      { title: "Destinos de viaje por países, ciudades y regiones | Creatuviaje" },
      {
        name: "description",
        content:
          "Explora destinos por país, ciudad, región o tipo de viaje. Mejor época, presupuesto orientativo y artículos para cada lugar.",
      },
      { property: "og:title", content: "Destinos de viaje | Creatuviaje" },
      {
        property: "og:description",
        content: "Explora destinos por país, ciudad, región o tipo de viaje.",
      },
    ],
  }),
  component: DestinosPage,
});

const continents = [
  { value: "todos", label: "Todos" },
  { value: "europa", label: "Europa" },
  { value: "asia", label: "Asia" },
  { value: "america", label: "América" },
  { value: "africa", label: "África" },
  { value: "oceania", label: "Oceanía" },
];

function DestinosPage() {
  const { q, continente, tipo } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const results = getDestinations({ query: q, continent: continente, tripType: tipo });
  const regions = [...new Set(destinations.map((d) => d.region))];

  const update = (patch: Partial<DestinosSearch>) =>
    navigate({ search: (prev) => ({ ...prev, ...patch }) });

  return (
    <>
      <header className="container-editorial pt-16 pb-10 md:pt-24">
        <p className="eyebrow text-accent">Destinos</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.02] md:text-[3.5rem]">
          Todos los lugares que estamos recorriendo
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Países, ciudades y regiones con información práctica: cuándo ir, cuánto cuesta y qué
          merece la pena. {destinations.length} destinos y creciendo.
        </p>
      </header>

      <div className="container-editorial">
        <Filters
          query={q}
          onQueryChange={(value) => update({ q: value })}
          placeholder="Busca un país o una ciudad"
          resultCount={results.length}
          groups={[
            {
              id: "continente",
              label: "Continente",
              value: continente,
              options: continents,
              onChange: (value) => update({ continente: value }),
            },
            {
              id: "tipo",
              label: "Tipo de viaje",
              value: tipo,
              options: [
                { value: "todos", label: "Todos" },
                ...categories.map((category) => ({
                  value: category.slug,
                  label: category.name,
                })),
              ],
              onChange: (value) => update({ tipo: value }),
            },
          ]}
        />

        {results.length === 0 ? (
          <p className="py-20 text-center text-sm text-muted-foreground">
            No encontramos destinos con esos filtros. Prueba a ampliar la búsqueda.
          </p>
        ) : (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} size="sm" />
            ))}
          </div>
        )}

        <section className="mt-24 border-t border-border pt-12">
          <h2 className="text-2xl md:text-3xl">Regiones</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {regions.map((region) => (
              <li
                key={region}
                className="rounded-full border border-border px-4 py-2 text-xs text-muted-foreground"
              >
                {region}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 border-t border-border pt-12">
          <h2 className="text-2xl md:text-3xl">Ciudades</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {destinations.flatMap((destination) =>
              destination.cities.map((city) => (
                <li
                  key={`${destination.slug}-${city}`}
                  className="rounded-full border border-border px-4 py-2 text-xs text-muted-foreground"
                >
                  {city}
                </li>
              )),
            )}
          </ul>
        </section>
      </div>

      <div className="pt-24">
        <Newsletter />
      </div>
    </>
  );
}
