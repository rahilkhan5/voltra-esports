"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { productById } from "./data";

type CartLine = { id: string; qty: number };
type Reservation = { slug: string; code: string; at: string };

type Store = {
  ready: boolean;
  lines: CartLine[];
  count: number;
  subtotal: number;
  add: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  reservations: Reservation[];
  reserve: (slug: string) => Reservation;
  reservationFor: (slug: string) => Reservation | undefined;
  cancelReservation: (slug: string) => void;
};

const StoreContext = createContext<Store | null>(null);

const CART_KEY = "voltra.cart.v1";
const RES_KEY = "voltra.reservations.v1";

function read<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage can be blocked (private mode). The demo keeps working in memory.
  }
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [lines, setLines] = useState<CartLine[]>([]);
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    setLines(read<CartLine[]>(CART_KEY, []).filter((l) => productById(l.id)));
    setReservations(read<Reservation[]>(RES_KEY, []));
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) write(CART_KEY, lines);
  }, [lines, ready]);

  useEffect(() => {
    if (ready) write(RES_KEY, reservations);
  }, [reservations, ready]);

  const add = useCallback((id: string) => {
    setLines((prev) => {
      const found = prev.find((l) => l.id === id);
      if (found) return prev.map((l) => (l.id === id ? { ...l, qty: Math.min(l.qty + 1, 9) } : l));
      return [...prev, { id, qty: 1 }];
    });
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setLines((prev) =>
      qty <= 0 ? prev.filter((l) => l.id !== id) : prev.map((l) => (l.id === id ? { ...l, qty: Math.min(qty, 9) } : l)),
    );
  }, []);

  const remove = useCallback((id: string) => setLines((prev) => prev.filter((l) => l.id !== id)), []);
  const clear = useCallback(() => setLines([]), []);

  const reserve = useCallback((slug: string) => {
    const code = `VLT-${Math.random().toString(36).slice(2, 6).toUpperCase()}-${String(Date.now()).slice(-4)}`;
    const r = { slug, code, at: new Date().toISOString() };
    setReservations((prev) => [...prev.filter((x) => x.slug !== slug), r]);
    return r;
  }, []);

  const reservationFor = useCallback((slug: string) => reservations.find((r) => r.slug === slug), [reservations]);

  const cancelReservation = useCallback(
    (slug: string) => setReservations((prev) => prev.filter((r) => r.slug !== slug)),
    [],
  );

  const value = useMemo<Store>(() => {
    const count = lines.reduce((n, l) => n + l.qty, 0);
    const subtotal = lines.reduce((n, l) => n + (productById(l.id)?.price ?? 0) * l.qty, 0);
    return {
      ready,
      lines,
      count,
      subtotal,
      add,
      setQty,
      remove,
      clear,
      reservations,
      reserve,
      reservationFor,
      cancelReservation,
    };
  }, [ready, lines, reservations, add, setQty, remove, clear, reserve, reservationFor, cancelReservation]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
