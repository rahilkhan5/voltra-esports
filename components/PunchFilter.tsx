"use client";

/** Filter row styled as punch tickets: the selected option gets a punched hole. */
export function PunchFilter<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: T; label: string; count?: number }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => {
        const on = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={on}
            onClick={() => onChange(o.value)}
            className={`group relative inline-flex min-h-10 items-center gap-2.5 rounded-md border py-2 pr-3.5 pl-3 text-sm font-medium transition-colors duration-200 ${
              on
                ? "border-laminate bg-laminate text-ink"
                : "border-arena-3 bg-arena-2 text-laminate hover:border-laminate-dim"
            }`}
          >
            <span
              aria-hidden="true"
              className={`size-2.5 rounded-full border transition-all duration-200 ${
                on ? "border-ink bg-arena shadow-[inset_0_1px_2px_rgb(0_0_0/0.7)]" : "border-laminate-dim"
              }`}
            />
            {o.label}
            {typeof o.count === "number" && (
              <span className={`meta tabular ${on ? "text-ink-soft" : "text-laminate-dim"}`}>{o.count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
