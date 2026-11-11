"use client";

import { useEffect, useRef, useState } from "react";
import { IconCheck } from "./Icons";

/**
 * A button that gets "scanned": a laser sweeps across it, then it reads SCANNED for a moment.
 * Used for add-to-cart and slot reservation.
 */
export function ScanButton({
  onScan,
  children,
  scannedLabel = "Scanned",
  disabled,
  className = "",
  variant = "orange",
}: {
  onScan: () => void;
  children: React.ReactNode;
  scannedLabel?: string;
  disabled?: boolean;
  className?: string;
  variant?: "orange" | "ink";
}) {
  const [phase, setPhase] = useState<"idle" | "scanning" | "done">("idle");
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach((t) => window.clearTimeout(t)), []);

  function handle() {
    if (disabled || phase !== "idle") return;
    setPhase("scanning");
    timers.current.push(
      window.setTimeout(() => {
        onScan();
        setPhase("done");
      }, 420),
      window.setTimeout(() => setPhase("idle"), 1700),
    );
  }

  const tone =
    variant === "orange"
      ? "bg-orange text-ink hover:bg-[#ff6a43]"
      : "bg-ink text-laminate hover:bg-arena-3";

  return (
    <button
      type="button"
      onClick={handle}
      disabled={disabled}
      aria-live="polite"
      className={`relative isolate inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden rounded-md px-4 font-sans text-sm font-semibold transition-[background-color,transform] duration-200 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-45 ${tone} ${className}`}
    >
      {phase === "done" ? (
        <span className="inline-flex items-center gap-1.5">
          <IconCheck size={16} />
          {scannedLabel}
        </span>
      ) : (
        children
      )}
      {phase === "scanning" && <span className="laser" aria-hidden="true" />}
    </button>
  );
}
