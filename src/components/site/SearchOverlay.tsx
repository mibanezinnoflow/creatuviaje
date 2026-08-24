import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

import { search } from "@/data";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const results = useMemo(() => search(query), [query]);

  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => inputRef.current?.focus(), 60);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const go = (kind: string, slug: string) => {
    onClose();
    setQuery("");
    if (kind === "destino") navigate({ to: "/destinos/$slug", params: { slug } });
    else if (kind === "artículo") navigate({ to: "/blog/$slug", params: { slug } });
    else if (kind === "guía") navigate({ to: "/guias" });
    else navigate({ to: "/blog", search: { categoria: slug, q: "", orden: "recientes" } });
  };

  return (
    <div className="fixed inset-0 z-100">
      <button
        aria-label="Cerrar búsqueda"
        onClick={onClose}
        className="absolute inset-0 bg-foreground/25 backdrop-blur-sm"
      />
      <div className="relative mx-auto mt-[12vh] w-[min(44rem,92vw)] animate-fade-up overflow-hidden rounded-xl border border-border bg-card shadow-[0_30px_80px_-40px_oklch(0.2_0.01_60/0.45)]">
        <div className="flex items-center gap-3 border-b border-border px-5 py-4">
          <SearchIcon className="size-4 text-muted-foreground" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Busca un destino, una ciudad o un artículo"
            className="w-full bg-transparent text-base outline-none placeholder:text-muted-foreground"
          />
          <kbd className="hidden rounded border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground sm:block">
            ESC
          </kbd>
        </div>
        <div className="max-h-[55vh] overflow-y-auto">
          {query.trim().length < 2 ? (
            <p className="px-5 py-6 text-sm text-muted-foreground">
              Escribe al menos dos letras. Por ejemplo: Japón, Lisboa, camper o gastronomía.
            </p>
          ) : results.length === 0 ? (
            <p className="px-5 py-6 text-sm text-muted-foreground">
              Nada por aquí todavía. Prueba con otro destino.
            </p>
          ) : (
            <ul className="divide-y divide-border">
              {results.map((result) => (
                <li key={`${result.kind}-${result.slug}`}>
                  <button
                    onClick={() => go(result.kind, result.slug)}
                    className="flex w-full items-baseline justify-between gap-4 px-5 py-3.5 text-left transition-colors hover:bg-secondary"
                  >
                    <span>
                      <span className="block text-sm font-medium">{result.title}</span>
                      <span className="block text-xs text-muted-foreground">{result.subtitle}</span>
                    </span>
                    <span className="eyebrow shrink-0 text-accent">{result.kind}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}
