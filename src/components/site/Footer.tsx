import { Link } from "@tanstack/react-router";

import { categories, destinations } from "@/data";

export function Footer() {
  return (
    <footer className="mt-28 border-t border-border bg-secondary/40">
      <div className="container-editorial grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="max-w-xs">
          <p className="font-display text-xl">Buscatuviaje</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Un medio independiente de viajes. Escribimos guías largas, rutas probadas y
            recomendaciones honestas para ayudarte a decidir tu próximo destino.
          </p>
        </div>

        <div>
          <p className="eyebrow text-muted-foreground">Destinos</p>
          <ul className="mt-5 space-y-3 text-sm">
            {destinations.slice(0, 6).map((destination) => (
              <li key={destination.slug}>
                <Link
                  to="/destinos/$slug"
                  params={{ slug: destination.slug }}
                  className="link-underline text-foreground/80 hover:text-foreground"
                >
                  {destination.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-muted-foreground">Categorías</p>
          <ul className="mt-5 space-y-3 text-sm">
            {categories.slice(0, 6).map((category) => (
              <li key={category.slug}>
                <Link
                  to="/blog"
                  search={{ categoria: category.slug, q: "", orden: "recientes" }}
                  className="link-underline text-foreground/80 hover:text-foreground"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-muted-foreground">Buscatuviaje</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/sobre-nosotros" className="link-underline text-foreground/80">
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="link-underline text-foreground/80">
                Contacto
              </Link>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline text-foreground/80"
              >
                Instagram
              </a>
            </li>
            <li>
              <Link to="/privacidad" className="link-underline text-foreground/80">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="link-underline text-foreground/80">
                Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-editorial flex flex-col gap-2 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Buscatuviaje. Todos los derechos reservados.</p>
        <p>Hecho con curiosidad desde Madrid.</p>
      </div>
    </footer>
  );
}
