import { Link } from "@tanstack/react-router";

import { countArticlesByDestination } from "@/data";
import type { Destination } from "@/data/types";

interface DestinationCardProps {
  destination: Destination;
  size?: "sm" | "md" | "lg";
}

const ratios: Record<string, string> = {
  sm: "aspect-4/5",
  md: "aspect-3/4 md:aspect-4/5",
  lg: "aspect-4/5 md:aspect-3/4",
};

export function DestinationCard({ destination, size = "md" }: DestinationCardProps) {
  const count = countArticlesByDestination(destination.slug);

  return (
    <Link
      to="/destinos/$slug"
      params={{ slug: destination.slug }}
      className="group relative block h-full overflow-hidden rounded-lg"
    >
      <div className={`h-full w-full overflow-hidden ${ratios[size]}`}>
        <img
          src={destination.image}
          alt={`${destination.name}, ${destination.country}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-editorial group-hover:scale-[1.06]"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <p className="eyebrow text-background/70">{destination.country}</p>
        <h3 className="mt-1.5 text-2xl text-background md:text-[1.75rem]">{destination.name}</h3>
        <div className="mt-2 flex items-center gap-3 overflow-hidden">
          <span className="text-xs text-background/80">
            {count} {count === 1 ? "artículo" : "artículos"}
          </span>
          <span className="h-px flex-1 max-w-0 bg-background/60 transition-[max-width] duration-700 ease-editorial group-hover:max-w-24" />
        </div>
      </div>
    </Link>
  );
}
