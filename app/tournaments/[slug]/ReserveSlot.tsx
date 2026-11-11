"use client";

import { motion, useReducedMotion } from "motion/react";
import { Barcode } from "@/components/Barcode";
import { HoloStrip } from "@/components/HoloStrip";
import { ScanButton } from "@/components/ScanButton";
import { gameCode, money, type Tournament } from "@/lib/data";
import { useStore } from "@/lib/store";

/** Reserve a slot (stored in this browser only). The reserved stub tears off the pass. */
export function ReserveSlot({ t }: { t: Tournament }) {
  const { ready, reserve, reservationFor, cancelReservation } = useStore();
  const reduce = useReducedMotion();
  const existing = ready ? reservationFor(t.slug) : undefined;

  if (t.status === "finished") {
    return <p className="rounded-md bg-ink/8 px-4 py-3 text-sm font-medium">This event is finished. Results are below.</p>;
  }
  if (t.status === "live") {
    return (
      <p className="rounded-md bg-ink/8 px-4 py-3 text-sm font-medium">
        Matches are being played now. The point table and bracket below update as results come in.
      </p>
    );
  }

  const waitlist = t.status === "full";

  if (existing) {
    return (
      <motion.div
        initial={reduce ? false : { opacity: 0, x: -24, rotate: -7 }}
        animate={{ opacity: 1, x: 0, rotate: -1.5 }}
        transition={{ type: "spring", stiffness: 160, damping: 14 }}
        className="relative overflow-hidden rounded-lg border-2 border-dashed border-ink bg-laminate-2 p-4"
      >
        <HoloStrip code={gameCode(t.game)} className="mb-3" />
        <p className="meta text-ink-soft">{waitlist ? "Waitlist stub" : "Slot reserved"} · this browser only</p>
        <p className="mt-1 font-display text-3xl font-black tabular">{existing.code}</p>
        <div className="mt-3 flex items-end justify-between gap-4">
          <Barcode value={existing.code} height={24} className="h-6 w-32 text-ink" />
          <button
            type="button"
            onClick={() => cancelReservation(t.slug)}
            className="rounded-sm text-sm font-medium underline decoration-ink/40 hover:decoration-ink"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col gap-2 rounded-lg border-2 border-dashed border-ink/30 p-3">
      <HoloStrip code={gameCode(t.game)} />
      <ScanButton
        onScan={() => reserve(t.slug)}
        className="w-full !min-h-12 text-base"
        scannedLabel={waitlist ? "On the waitlist" : "Slot reserved"}
      >
        {waitlist ? "Join the waitlist" : `Reserve a slot · ${t.entryFee ? money(t.entryFee) : "Free"}`}
      </ScanButton>
      <p className="text-xs text-ink-soft">Demo only: nothing is charged and the reservation lives in your browser.</p>
    </div>
  );
}
