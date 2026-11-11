"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useStore } from "@/lib/store";
import { IconCart, IconClose, IconMenu, VoltraMark } from "./Icons";

const links = [
  { href: "/tournaments/", label: "Tournaments" },
  { href: "/players/", label: "Players" },
  { href: "/shop/", label: "Shop" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { count, ready } = useStore();
  const [open, setOpen] = useState(false);
  const [bump, setBump] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!ready || count === 0) return;
    setBump(true);
    const t = window.setTimeout(() => setBump(false), 450);
    return () => window.clearTimeout(t);
  }, [count, ready]);

  const isActive = (href: string) => pathname?.startsWith(href.replace(/\/$/, ""));

  return (
    <header className="sticky top-0 z-40 border-b border-arena-3 bg-arena/92 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <Link href="/" className="inline-flex items-center gap-2.5 rounded-md" aria-label="Voltra home">
          <VoltraMark size={30} className="text-orange" />
          <span className="font-display text-2xl font-black tracking-wide uppercase">Voltra</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`relative rounded-md px-3.5 py-2 text-[0.95rem] font-medium transition-colors duration-200 ${
                isActive(l.href) ? "text-laminate" : "text-laminate-dim hover:text-laminate"
              }`}
            >
              {l.label}
              {isActive(l.href) && (
                <span aria-hidden="true" className="absolute inset-x-3.5 -bottom-[13px] h-[3px] rounded-t-sm bg-orange" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/cart/"
            aria-label={`Cart, ${count} ${count === 1 ? "item" : "items"}`}
            className={`inline-flex h-10 items-center gap-2 rounded-full border border-arena-3 bg-arena-2 pr-1.5 pl-3.5 text-sm font-medium transition-transform duration-300 hover:border-laminate-dim ${
              bump ? "scale-110" : "scale-100"
            }`}
          >
            <IconCart size={18} />
            <span className="hidden sm:inline">Cart</span>
            <span
              className={`grid h-7 min-w-7 place-items-center rounded-full px-1.5 font-mono text-xs tabular ${
                count > 0 ? "bg-orange text-ink" : "bg-arena-3 text-laminate-dim"
              }`}
            >
              {ready ? count : 0}
            </span>
          </Link>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-md border border-arena-3 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Main mobile"
        className={`overflow-hidden border-t border-arena-3 transition-[max-height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          open ? "max-h-80" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="wrap flex flex-col py-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className="flex items-center justify-between py-3 font-display text-3xl font-black uppercase"
              >
                {l.label}
                {isActive(l.href) && <span className="size-2.5 rounded-full bg-orange" aria-hidden="true" />}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
