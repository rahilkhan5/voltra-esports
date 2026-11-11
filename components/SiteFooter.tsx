import Link from "next/link";
import { VoltraMark } from "./Icons";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-arena-3">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5 rounded-md">
            <VoltraMark size={30} className="text-orange" />
            <span className="font-display text-2xl font-black tracking-wide uppercase">Voltra</span>
          </Link>
          <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-laminate-dim">
            Voltra is a fictional esports organisation. Teams, players, events, prices and stats on this site are
            demo content, and nothing here can be bought.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="meta text-laminate-dim">Pages</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/tournaments/" className="hover:underline">
                Tournaments
              </Link>
            </li>
            <li>
              <Link href="/players/" className="hover:underline">
                Players
              </Link>
            </li>
            <li>
              <Link href="/shop/" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/cart/" className="hover:underline">
                Cart
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <p className="meta text-laminate-dim">Credits</p>
          <p className="mt-3 text-sm leading-relaxed text-laminate-dim">
            Design and build by{" "}
            <a href="https://github.com/rahilkhan5" className="text-laminate underline" target="_blank" rel="noreferrer">
              Rahil Khan
            </a>
            . Photos from{" "}
            <a href="https://unsplash.com" className="text-laminate underline" target="_blank" rel="noreferrer">
              Unsplash
            </a>{" "}
            under the Unsplash License.
          </p>
        </div>
      </div>
      <div className="perf-h h-2 text-arena-3" aria-hidden="true" />
      <div className="wrap flex flex-wrap items-center justify-between gap-3 py-5">
        <p className="meta text-laminate-dim">© 2026 Voltra demo</p>
        <p className="meta text-laminate-dim">Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}
