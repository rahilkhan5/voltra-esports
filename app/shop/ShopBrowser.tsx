"use client";

import { useMemo, useState } from "react";
import { Hangtag } from "@/components/Hangtag";
import { PunchFilter } from "@/components/PunchFilter";
import { products, type ProductCategory } from "@/lib/data";

type Cat = "all" | ProductCategory;
type Sort = "featured" | "low" | "high";

export function ShopBrowser() {
  const [cat, setCat] = useState<Cat>("all");
  const [sort, setSort] = useState<Sort>("featured");
  const cats: ProductCategory[] = ["Passes", "Audio", "Input", "Seating"];

  const list = useMemo(() => {
    const filtered = products.filter((p) => cat === "all" || p.category === cat);
    if (sort === "low") return [...filtered].sort((a, b) => a.price - b.price);
    if (sort === "high") return [...filtered].sort((a, b) => b.price - a.price);
    return filtered;
  }, [cat, sort]);

  return (
    <div>
      <div className="flex flex-col gap-4 border-y border-arena-3 py-5 lg:flex-row lg:items-center lg:justify-between">
        <PunchFilter
          label="Filter by category"
          value={cat}
          onChange={setCat}
          options={[
            { value: "all", label: "Everything", count: products.length },
            ...cats.map((c) => ({ value: c, label: c, count: products.filter((p) => p.category === c).length })),
          ]}
        />
        <label className="inline-flex items-center gap-3 text-sm">
          <span className="meta text-laminate-dim">Sort</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="min-h-10 rounded-md border border-arena-3 bg-arena-2 px-3 text-laminate"
          >
            <option value="featured">Featured</option>
            <option value="low">Price, low to high</option>
            <option value="high">Price, high to low</option>
          </select>
        </label>
      </div>
      <div aria-hidden="true" className="mt-10 h-1.5 rounded-full bg-arena-3" />
      <div className="grid grid-cols-1 gap-x-5 gap-y-2 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((p) => (
          <Hangtag key={p.id} product={p} holo={p.id === "season-pass"} />
        ))}
      </div>
    </div>
  );
}
