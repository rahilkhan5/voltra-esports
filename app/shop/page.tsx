import type { Metadata } from "next";
import { ShopBrowser } from "./ShopBrowser";

export const metadata: Metadata = {
  title: "Shop",
  description: "Voltra gear and season passes. Demo shop, nothing is charged.",
};

export default function ShopPage() {
  return (
    <div className="wrap pt-14 sm:pt-20">
      <header className="max-w-3xl">
        <h1 className="display text-[clamp(3.4rem,9vw,6rem)]">Shop</h1>
        <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-laminate/85">
          Gear from our stage and the Season 04 pass. Scan anything into your cart; checkout is a demo and nothing is
          charged.
        </p>
      </header>
      <div className="mt-12">
        <ShopBrowser />
      </div>
    </div>
  );
}
