"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { event } from "@/lib/data";
import { Barcode } from "./Barcode";
import { VoltraMark } from "./Icons";

/**
 * The hero credential: an ALL ACCESS pass hanging from a lanyard.
 * It swings toward the pointer on a spring, and its holographic foil shifts with the swing.
 * Touch devices get a gentle idle sway and can flick it with a tap.
 */
export function LanyardBadge() {
  const reduce = useReducedMotion();
  const target = useMotionValue(0);
  const angle = useSpring(target, { stiffness: 90, damping: 7, mass: 1.1 });
  const hx = useTransform(angle, [-14, 14], ["12%", "88%"]);
  const ha = useTransform(angle, [-14, 14], ["-70deg", "70deg"]);
  const lastX = useRef<number | null>(null);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(pointer: fine)").matches;

    if (fine) {
      const onMove = (e: PointerEvent) => {
        const el = root.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const rel = Math.max(-1, Math.min(1, (e.clientX - cx) / (window.innerWidth / 2)));
        const v = lastX.current === null ? 0 : e.clientX - lastX.current;
        lastX.current = e.clientX;
        // Lean toward the pointer, plus a kick from how fast it moved.
        target.set(rel * 9 + Math.max(-6, Math.min(6, v * 0.35)));
      };
      const onLeave = () => target.set(0);
      window.addEventListener("pointermove", onMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
      return () => {
        window.removeEventListener("pointermove", onMove);
        document.documentElement.removeEventListener("pointerleave", onLeave);
      };
    }

    // Touch: idle sway
    let t = 0;
    let raf = 0;
    const tick = () => {
      t += 0.016;
      target.set(Math.sin(t * 1.1) * 3.2);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce, target]);

  function flick() {
    if (reduce) return;
    angle.jump(angle.get());
    angle.set(angle.get() + (Math.random() > 0.5 ? 16 : -16));
  }

  return (
    <div ref={root} className="relative flex w-full justify-center">
      <motion.div
        className="relative flex origin-top flex-col items-center will-change-transform"
        style={{ rotate: angle }}
      >
        {/* Lanyard strap */}
        <div
          aria-hidden="true"
          className="relative h-12 w-8 overflow-hidden bg-orange sm:h-[clamp(5rem,12vh,7rem)] lg:h-[clamp(6rem,18vh,11rem)] lg:w-10"
          style={{ boxShadow: "inset 6px 0 8px -6px rgb(0 0 0 / 0.5), inset -6px 0 8px -6px rgb(0 0 0 / 0.5)" }}
        >
          <div className="absolute inset-x-0 top-0 flex flex-col items-center gap-3 pt-2 [writing-mode:vertical-rl]">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="font-display text-sm font-black tracking-[0.2em] text-ink uppercase">
                Voltra
              </span>
            ))}
          </div>
        </div>
        {/* Clip */}
        <svg aria-hidden="true" width="44" height="40" viewBox="0 0 44 40" className="-mt-1 drop-shadow-[0_2px_2px_rgb(0_0_0/0.5)]">
          <rect x="8" y="0" width="28" height="12" rx="3" fill="#aaa59a" />
          <rect x="12" y="3" width="20" height="5" rx="2" fill="#0f1012" opacity="0.55" />
          <path d="M22 12v10" stroke="#aaa59a" strokeWidth="5" strokeLinecap="round" />
          <circle cx="22" cy="29" r="8.5" fill="none" stroke="#aaa59a" strokeWidth="4" />
        </svg>

        {/* Badge */}
        <button
          type="button"
          onClick={flick}
          aria-label={`${event.name} ${event.season} all access pass`}
          className="laminate relative -mt-3 w-[min(78vw,23.5rem)] cursor-grab rounded-[18px] p-4 text-left active:cursor-grabbing sm:p-5 lg:w-[min(36vw,31rem)] lg:rounded-[22px] lg:p-7"
        >
          <div className="slot mx-auto mb-3 sm:mb-4 lg:!h-3 lg:!w-16" />
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2">
              <VoltraMark size={24} className="text-ink lg:size-8" />
              <span className="font-display text-xl font-black tracking-wide text-ink uppercase lg:text-2xl">Voltra</span>
            </span>
            <span className="meta text-ink-soft lg:text-xs">{event.season}</span>
          </div>

          <p className="display mt-3 text-[clamp(2.3rem,4.2vw,3.4rem)] text-ink sm:mt-5 lg:text-[clamp(3rem,4.9vw,4.6rem)]">
            Invitational
          </p>
          <p className="mt-2 text-sm text-ink-soft lg:text-base">
            {event.city} · {event.dates}
          </p>

          {/* Holographic security strip, the one foil on this page */}
          <motion.div
            className="holo relative mt-3 h-7 overflow-hidden rounded-md sm:mt-4 sm:h-9 lg:h-11"
            style={{ ["--hx" as string]: hx, ["--ha" as string]: ha }}
            aria-hidden="true"
          >
            <motion.div className="holo-sheen" style={{ ["--hx" as string]: hx }} />
            <div className="meta absolute inset-0 flex items-center gap-4 overflow-hidden px-3 whitespace-nowrap text-ink/60">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i}>Genuine · Voltra · S04</span>
              ))}
            </div>
          </motion.div>

          <div className="mt-3 rounded-lg bg-orange px-4 py-3 text-ink sm:mt-4 lg:px-5 lg:py-4">
            <p className="display text-[clamp(2.4rem,4.6vw,3.6rem)] lg:text-[clamp(3.2rem,5.2vw,5rem)]">All access</p>
          </div>

          <div className="mt-4 flex items-end justify-between gap-4 lg:mt-5">
            <div>
              <p className="meta text-ink-soft">Admit one · Hall 3</p>
              <p className="meta tabular mt-1 text-ink">{event.serial}</p>
            </div>
            <Barcode value={event.serial} height={30} className="h-8 w-28 text-ink lg:h-10 lg:w-36" />
          </div>
        </button>
      </motion.div>
    </div>
  );
}
