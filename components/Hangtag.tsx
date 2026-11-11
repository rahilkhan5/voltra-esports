"use client";

import { money, type Product } from "@/lib/data";
import { useStore } from "@/lib/store";
import { inkHex } from "@/lib/ink";
import { Barcode } from "./Barcode";
import { VoltraMark } from "./Icons";
import { Photo } from "./Photo";
import { ScanButton } from "./ScanButton";

/** A product hung on a hangtag. The string runs up to the rail above the grid. */
export function Hangtag({ product, holo = false, string = true }: { product: Product; holo?: boolean; string?: boolean }) {
  const { add } = useStore();
  const soldOut = product.stock <= 0;

  return (
    <div className="relative flex flex-col items-center">
      {string && (
        <span
          aria-hidden="true"
          className="block h-10 w-px"
          style={{ background: `linear-gradient(${inkHex[product.tier]}, ${inkHex[product.tier]})` }}
        />
      )}
      <article className="laminate relative flex w-full flex-col rounded-[14px] p-3 pt-2">
        <span aria-hidden="true" className="mx-auto mb-2 block size-3.5 rounded-full bg-arena shadow-[inset_0_1px_2px_rgb(0_0_0/0.7)]" />
        <div className="relative aspect-square overflow-hidden rounded-lg bg-arena">
          {product.photo ? (
            <Photo name={product.photo} ink={product.tier} alt={product.name} />
          ) : (
            <PassArtwork holo={holo} />
          )}
          {soldOut && (
            <span className="stamp absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-laminate/90 text-3xl text-orange">
              Sold out
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col px-1 pt-3">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-display text-2xl leading-none font-black uppercase">{product.name}</h3>
              <p className="mt-1 text-sm text-ink-soft">{product.line}</p>
            </div>
            <p className="font-display text-3xl leading-none font-black tabular">{money(product.price)}</p>
          </div>
          <div className="mt-3 flex items-center justify-between gap-3">
            <Barcode value={product.id} height={20} className="h-5 w-20 text-ink/70" />
            <span className="meta text-ink-soft">{soldOut ? "Restocking" : `${product.stock} left`}</span>
          </div>
          <ScanButton
            onScan={() => add(product.id)}
            disabled={soldOut}
            className="mt-3 w-full"
            scannedLabel="Added to cart"
          >
            {soldOut ? "Sold out" : "Add to cart"}
          </ScanButton>
        </div>
      </article>
    </div>
  );
}

/** Artwork for the season pass product: a small ALL ACCESS badge. */
function PassArtwork({ holo }: { holo: boolean }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-arena-2 p-6">
      <div className="laminate w-[62%] rotate-[-6deg] rounded-xl p-3">
        <div className="slot mx-auto mb-2 !h-1.5 !w-8" />
        <div className="flex items-center gap-1.5">
          <VoltraMark size={14} className="text-ink" />
          <span className="font-display text-xs font-black text-ink uppercase">Voltra S04</span>
        </div>
        {holo ? <div className="holo mt-2 h-4 rounded-sm" aria-hidden="true" /> : <div className="mt-2 h-4 rounded-sm bg-laminate-2" />}
        <div className="mt-2 rounded-md bg-orange px-2 py-1.5">
          <p className="display text-xl text-ink">All access</p>
        </div>
      </div>
    </div>
  );
}
