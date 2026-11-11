import Link from "next/link";
import { IconArrow } from "./Icons";

export function SectionHead({
  title,
  lede,
  href,
  linkLabel,
  id,
}: {
  title: string;
  lede?: string;
  href?: string;
  linkLabel?: string;
  id?: string;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 id={id} className="display text-[clamp(2.75rem,6.5vw,5.5rem)]">
          {title}
        </h2>
        {lede && <p className="mt-3 max-w-[56ch] text-laminate-dim">{lede}</p>}
      </div>
      {href && linkLabel && (
        <Link
          href={href}
          className="group inline-flex shrink-0 items-center gap-2 self-start rounded-md border border-arena-3 px-4 py-2.5 text-sm font-medium transition-colors hover:border-laminate sm:self-auto"
        >
          {linkLabel}
          <IconArrow size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
