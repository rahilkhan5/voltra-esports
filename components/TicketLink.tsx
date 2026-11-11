import Link from "next/link";
import { IconArrow } from "./Icons";

/** Primary action printed as a ticket stub: notched ends, a perforation before the arrow. */
export function TicketLink({
  href,
  children,
  tone = "orange",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "orange" | "laminate";
  className?: string;
}) {
  const colors = tone === "orange" ? "bg-orange text-ink hover:bg-[#ff6a43]" : "bg-laminate text-ink hover:bg-white";
  return (
    <Link
      href={href}
      className={`group relative inline-flex min-h-13 items-stretch overflow-hidden rounded-md font-semibold transition-[background-color,transform] duration-200 active:scale-[0.98] ${colors} ${className}`}
    >
      <span aria-hidden="true" className="absolute top-1/2 -left-2 size-4 -translate-y-1/2 rounded-full bg-arena" />
      <span aria-hidden="true" className="absolute top-1/2 -right-2 size-4 -translate-y-1/2 rounded-full bg-arena" />
      <span className="flex items-center py-3 pr-4 pl-6 text-base">{children}</span>
      <span aria-hidden="true" className="my-2 w-px border-l-2 border-dashed border-ink/40" />
      <span className="flex items-center pr-5 pl-3.5">
        <IconArrow size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
