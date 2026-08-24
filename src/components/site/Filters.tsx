import { SearchIcon } from "./SearchOverlay";

interface FilterOption {
  value: string;
  label: string;
}

interface FiltersProps {
  query: string;
  onQueryChange: (value: string) => void;
  placeholder?: string;
  groups: {
    id: string;
    label: string;
    value: string;
    options: FilterOption[];
    onChange: (value: string) => void;
  }[];
  resultCount?: number;
}

export function Filters({
  query,
  onQueryChange,
  placeholder = "Buscar",
  groups,
  resultCount,
}: FiltersProps) {
  return (
    <div className="border-y border-border py-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex w-full max-w-sm items-center gap-3 rounded-full border border-input bg-card px-4 py-2.5">
          <SearchIcon className="size-4 shrink-0 text-muted-foreground" />
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder={placeholder}
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        <div className="flex flex-wrap items-center gap-6">
          {groups.map((group) => (
            <div key={group.id} className="flex items-center gap-2">
              <label htmlFor={group.id} className="eyebrow text-muted-foreground">
                {group.label}
              </label>
              <select
                id={group.id}
                value={group.value}
                onChange={(event) => group.onChange(event.target.value)}
                className="rounded-full border border-input bg-card px-3.5 py-2 text-sm outline-none transition-colors focus:border-accent"
              >
                {group.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      {typeof resultCount === "number" && (
        <p className="mt-5 text-xs text-muted-foreground">
          {resultCount} {resultCount === 1 ? "resultado" : "resultados"}
        </p>
      )}
    </div>
  );
}
