import { createFileRoute, Link } from "@tanstack/react-router";

import { ArticleCard } from "@/components/site/ArticleCard";
import { CategoryCard } from "@/components/site/CategoryCard";
import { DestinationCard } from "@/components/site/DestinationCard";
import { FeaturedArticle } from "@/components/site/FeaturedArticle";
import { Hero } from "@/components/site/Hero";
import { Newsletter } from "@/components/site/Newsletter";
import { SectionHeading } from "@/components/site/SectionHeading";
import { categories, getArticles, getFeaturedArticle, getGuides, destinations } from "@/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Creatuviaje — Revista de viajes, destinos y guías" },
      {
        name: "description",
        content:
          "Guías largas, rutas probadas y destinos con criterio. Descubre tu próximo viaje con artículos, itinerarios y consejos prácticos.",
      },
      { property: "og:title", content: "Creatuviaje — Revista de viajes, destinos y guías" },
      {
        property: "og:description",
        content:
          "Historias, destinos y consejos para ayudarte a descubrir tu próximo viaje.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = getFeaturedArticle();
  const latest = getArticles({ limit: 6 });
  const guides = getGuides();
  const [japon, italia, portugal, islandia, tailandia, marruecos] = destinations;

  return (
    <>
      <Hero />

      <section className="container-editorial pt-24 md:pt-32">
        <SectionHeading
          eyebrow="Destinos destacados"
          title="¿A dónde vamos?"
          description="Seis lugares que recomendamos ahora mismo, con guías, rutas y recomendaciones probadas sobre el terreno."
          action={
            <Link
              to="/destinos"
              className="link-underline text-sm font-medium text-accent"
            >
              Ver todos los destinos →
            </Link>
          }
        />

        <div className="mt-12 grid gap-4 md:grid-cols-6 md:gap-5">
          <div className="md:col-span-4">{japon && <DestinationCard destination={japon} size="lg" />}</div>
          <div className="grid gap-4 md:col-span-2 md:gap-5">
            {italia && <DestinationCard destination={italia} size="sm" />}
            {portugal && <DestinationCard destination={portugal} size="sm" />}
          </div>
          <div className="md:col-span-2">{islandia && <DestinationCard destination={islandia} size="sm" />}</div>
          <div className="md:col-span-2">{tailandia && <DestinationCard destination={tailandia} size="sm" />}</div>
          <div className="md:col-span-2">{marruecos && <DestinationCard destination={marruecos} size="sm" />}</div>
        </div>
      </section>

      <section className="container-editorial pt-24 md:pt-36">
        <p className="eyebrow text-accent">Artículo destacado</p>
        <div className="mt-8 border-t border-border pt-12">
          <FeaturedArticle article={featured} />
        </div>
      </section>

      <section className="container-editorial pt-24 md:pt-36">
        <SectionHeading
          eyebrow="Últimos artículos"
          title="Historias para tu próximo viaje"
          description="Rutas, presupuestos y lugares que hemos recorrido de primera mano."
          action={
            <Link to="/blog" className="link-underline text-sm font-medium text-accent">
              Ver el blog →
            </Link>
          }
        />
        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="container-editorial pt-24 md:pt-36">
        <SectionHeading
          eyebrow="Explora por tipo de viaje"
          title="¿Qué te apetece esta vez?"
          description="Elige cómo quieres viajar y te enseñamos los destinos y artículos que encajan."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="container-editorial pt-24 md:pt-36">
        <SectionHeading
          eyebrow="Guías de viaje"
          title="Guías para viajar mejor"
          description="Documentos vivos que actualizamos con cada viaje: itinerarios, épocas, presupuestos y logística."
          action={
            <Link to="/guias" className="link-underline text-sm font-medium text-accent">
              Todas las guías →
            </Link>
          }
        />
        <ul className="mt-12 divide-y divide-border border-y border-border">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <Link
                to="/destinos/$slug"
                params={{ slug: guide.destinationSlug }}
                className="group grid items-center gap-6 py-7 md:grid-cols-[7rem_1.3fr_1fr_auto]"
              >
                <img
                  src={guide.image}
                  alt={guide.destination}
                  loading="lazy"
                  className="hidden aspect-square w-28 rounded-lg object-cover md:block"
                />
                <div>
                  <p className="eyebrow text-muted-foreground">{guide.destination}</p>
                  <h3 className="mt-2 text-xl transition-colors group-hover:text-accent md:text-2xl">
                    {guide.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {guide.summary}
                  </p>
                </div>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs md:grid-cols-2">
                  <div>
                    <dt className="text-muted-foreground">Días</dt>
                    <dd className="mt-0.5">{guide.days}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Mejor época</dt>
                    <dd className="mt-0.5">{guide.bestSeason}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Presupuesto</dt>
                    <dd className="mt-0.5">{guide.budget}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Artículos</dt>
                    <dd className="mt-0.5">{guide.articles}</dd>
                  </div>
                </dl>
                <span
                  aria-hidden="true"
                  className="hidden text-accent transition-transform duration-500 ease-editorial group-hover:translate-x-1 md:block"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="pt-24 md:pt-36">
        <Newsletter />
      </div>
    </>
  );
}
