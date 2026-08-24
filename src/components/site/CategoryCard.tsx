import { Link } from "@tanstack/react-router";

import type { Category } from "@/data/types";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to="/blog"
      search={{ categoria: category.slug, q: "", orden: "recientes" }}
      className="group relative block overflow-hidden rounded-lg"
    >
      <img
        src={category.image}
        alt={category.name}
        loading="lazy"
        className="aspect-4/3 w-full object-cover transition-transform duration-[1.2s] ease-editorial group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-foreground/35 transition-colors duration-500 group-hover:bg-foreground/45" />
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <span aria-hidden="true" className="text-lg">
          {category.emoji}
        </span>
        <h3 className="mt-1 text-xl text-background">{category.name}</h3>
        <p className="mt-1 max-h-0 overflow-hidden text-xs leading-relaxed text-background/85 transition-all duration-500 ease-editorial group-hover:max-h-20">
          {category.description}
        </p>
      </div>
    </Link>
  );
}
