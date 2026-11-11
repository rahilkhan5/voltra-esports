"use client";

import Link from "next/link";
import { useState } from "react";
import { Barcode } from "@/components/Barcode";
import { IconArrow, IconMinus, IconPlus } from "@/components/Icons";
import { Photo } from "@/components/Photo";
import { money, productById } from "@/lib/data";
import { useStore } from "@/lib/store";

const SHIPPING_FREE_FROM = 150;

export function CartView() {
  const { ready, lines, subtotal, setQty, remove, clear, count } = useStore();
  const [placed, setPlaced] = useState<string | null>(null);

  if (!ready) {
    return <div className="mt-10 h-64 animate-pulse rounded-2xl bg-arena-2" aria-label="Loading cart" />;
  }

  if (placed) {
    return (
      <div className="laminate relative mx-auto mt-10 max-w-md rounded-2xl p-8 text-center">
        <p className="meta text-ink-soft">Demo order</p>
        <p className="display mt-2 text-5xl">{placed}</p>
        <span className="stamp mt-6 inline-block text-4xl text-orange">Void · demo</span>
        <p className="mt-6 text-sm leading-relaxed text-ink-soft">
          This is where a real checkout would take payment. In this demo nothing is charged and nothing ships.
        </p>
        <Link href="/shop/" className="mt-6 inline-flex rounded-md bg-ink px-5 py-3 text-sm font-semibold text-laminate">
          Back to the shop
        </Link>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="mt-10 rounded-2xl border-2 border-dashed border-arena-3 px-6 py-16 text-center">
        <p className="display text-5xl">Nothing scanned yet</p>
        <p className="mx-auto mt-3 max-w-[40ch] text-laminate-dim">
          Items you add from the shop land here and stay in this browser.
        </p>
        <Link
          href="/shop/"
          className="group mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-orange px-6 font-semibold text-ink"
        >
          Open the shop
          <IconArrow size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    );
  }

  const shipping = subtotal >= SHIPPING_FREE_FROM || lines.every((l) => productById(l.id)?.category === "Passes") ? 0 : 12;
  const total = subtotal + shipping;
  const receiptNo = `RCPT-${String(subtotal).padStart(5, "0")}-${count}`;

  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:items-start">
      <ul className="flex flex-col">
        {lines.map((l) => {
          const p = productById(l.id);
          if (!p) return null;
          return (
            <li key={l.id} className="grid grid-cols-[5.5rem_1fr] gap-4 border-t border-dashed border-arena-3 py-5 sm:grid-cols-[7rem_1fr_auto]">
              <div className="aspect-square overflow-hidden rounded-lg bg-arena-2">
                {p.photo ? (
                  <Photo name={p.photo} ink={p.tier} alt={p.name} />
                ) : (
                  <div className="grid h-full place-items-center bg-orange">
                    <span className="display text-center text-lg text-ink">
                      All
                      <br />
                      access
                    </span>
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <p className="font-display text-2xl leading-none font-black uppercase">{p.name}</p>
                <p className="mt-1 text-sm text-laminate-dim">{p.line}</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="inline-flex items-center rounded-md border border-arena-3">
                    <button
                      type="button"
                      aria-label={`Remove one ${p.name}`}
                      onClick={() => setQty(l.id, l.qty - 1)}
                      className="grid size-10 place-items-center hover:bg-arena-2"
                    >
                      <IconMinus size={16} />
                    </button>
                    <span className="w-8 text-center font-mono text-sm tabular" aria-live="polite">
                      {l.qty}
                    </span>
                    <button
                      type="button"
                      aria-label={`Add one ${p.name}`}
                      onClick={() => setQty(l.id, l.qty + 1)}
                      disabled={l.qty >= 9}
                      className="grid size-10 place-items-center hover:bg-arena-2 disabled:opacity-40"
                    >
                      <IconPlus size={16} />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(l.id)}
                    className="text-sm text-laminate-dim underline decoration-laminate-dim/40 hover:text-laminate"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <p className="col-start-2 font-display text-3xl font-black tabular sm:col-start-auto sm:text-right">
                {money(p.price * l.qty)}
              </p>
            </li>
          );
        })}
        <li className="border-t border-dashed border-arena-3 pt-5">
          <button type="button" onClick={clear} className="text-sm text-laminate-dim underline hover:text-laminate">
            Empty the cart
          </button>
        </li>
      </ul>

      <aside aria-labelledby="receipt-title" className="laminate relative rounded-xl p-6 lg:sticky lg:top-24">
        <h2 id="receipt-title" className="display text-4xl">
          Receipt
        </h2>
        <p className="meta mt-1 text-ink-soft tabular">{receiptNo}</p>
        <dl className="mt-6 flex flex-col gap-3 text-sm">
          <div className="flex justify-between">
            <dt>Items</dt>
            <dd className="tabular">{count}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Subtotal</dt>
            <dd className="tabular">{money(subtotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Shipping</dt>
            <dd className="tabular">{shipping === 0 ? "Free" : money(shipping)}</dd>
          </div>
          {shipping > 0 && (
            <p className="text-xs text-ink-soft">Free shipping from {money(SHIPPING_FREE_FROM)}.</p>
          )}
        </dl>
        <div className="perf-h my-5 h-2 text-ink/30" aria-hidden="true" />
        <div className="flex items-baseline justify-between">
          <span className="font-display text-2xl font-black uppercase">Total</span>
          <span className="font-display text-5xl font-black tabular">{money(total)}</span>
        </div>
        <button
          type="button"
          onClick={() => {
            setPlaced(`VLT-${Math.random().toString(36).slice(2, 7).toUpperCase()}`);
            clear();
          }}
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-orange font-semibold text-ink transition-colors hover:bg-[#ff6a43]"
        >
          Place demo order
        </button>
        <p className="mt-3 text-xs text-ink-soft">No payment is taken. This is a design demo.</p>
        <Barcode value={receiptNo} height={30} className="mt-5 h-8 w-full text-ink" />
      </aside>
    </div>
  );
}
