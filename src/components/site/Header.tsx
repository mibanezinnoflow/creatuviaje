import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

import { SearchOverlay, SearchIcon } from "./SearchOverlay";

const navigation = [
  { label: "Destinos", to: "/destinos" as const },
  { label: "Inspiración", to: "/inspiracion" as const },
  { label: "Guías", to: "/guias" as const },
  { label: "Consejos", to: "/consejos" as const },
  { label: "Sobre nosotros", to: "/sobre-nosotros" as const },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-500 ${
          scrolled
            ? "border-border bg-background/90 backdrop-blur-md"
            : "border-transparent bg-background"
        }`}
      >
        <div className="container-editorial flex h-18 items-center justify-between gap-6">
          <Link to="/" className="font-display text-xl tracking-tight md:text-[1.4rem]">
            Buscatuviaje
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="link-underline text-sm text-foreground/75 transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Buscar"
              className="grid size-10 place-items-center rounded-full transition-colors hover:bg-secondary"
            >
              <SearchIcon className="size-4.5" />
            </button>
            <Link
              to="/destinos"
              className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
            >
              Explorar destinos
            </Link>
            <button
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              className="grid size-10 place-items-center rounded-full transition-colors hover:bg-secondary lg:hidden"
            >
              <span className="flex w-4.5 flex-col gap-1">
                <span
                  className={`h-px bg-foreground transition-transform duration-300 ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`}
                />
                <span
                  className={`h-px bg-foreground transition-transform duration-300 ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="container-editorial flex flex-col py-2" aria-label="Móvil">
              {navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="border-b border-border/60 py-4 font-display text-lg last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/destinos"
                className="my-4 rounded-full bg-accent px-5 py-3 text-center text-sm font-medium text-accent-foreground"
              >
                Explorar destinos
              </Link>
            </nav>
          </div>
        )}
      </header>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
