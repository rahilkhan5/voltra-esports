import { photo } from "@/lib/asset";
import type { Tier } from "@/lib/data";

/** A photo printed as a two-ink duotone. */
export function Photo({
  name,
  ink,
  alt,
  className = "",
  focus = "50% 50%",
  eager = false,
}: {
  name: string;
  ink: Tier | "laminate";
  alt: string;
  className?: string;
  focus?: string;
  eager?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photo(name)}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`duo-${ink} h-full w-full object-cover ${className}`}
      style={{ objectPosition: focus }}
    />
  );
}
