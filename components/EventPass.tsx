import Link from "next/link";
import { gameName, money, team, type Tournament } from "@/lib/data";
import { bg, onInk } from "@/lib/ink";
import { IconArrow, IconCalendar, IconPin } from "./Icons";
import { Photo } from "./Photo";

export const statusLabel = {
  open: "Open",
  full: "Waitlist",
  live: "Live",
  finished: "Finished",
} as const;

/** Slots printed as punch holes: filled for taken, open for free. */
export function SlotPunches({ total, taken, max = 32 }: { total: number; taken: number; max?: number }) {
  if (total > max) {
    return (
      <p className="meta tabular text-ink-soft">
        {taken} of {total} slots taken
      </p>
    );
  }
  return (
    <div className="flex flex-wrap gap-1" role="img" aria-label={`${taken} of ${total} slots taken`}>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`size-2.5 rounded-full border border-ink ${i < taken ? "bg-ink" : "bg-transparent"}`}
        />
      ))}
    </div>
  );
}

/** Status printed on the stub, the way a gate stamps a pass. */
export function StatusStamp({ status }: { status: Tournament["status"] }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border-2 border-ink px-2 py-0.5 font-display text-lg font-black tracking-wide uppercase">
      {status === "live" && <span className="live-dot inline-block size-2 rounded-full bg-orange" aria-hidden="true" />}
      {statusLabel[status]}
    </span>
  );
}

/**
 * A tournament printed as an event pass. Status is line form:
 * live = solid rule, open = dashed rule, full = dotted, finished = name struck through.
 */
export function EventPass({ t, holo = false, priority = false }: { t: Tournament; holo?: boolean; priority?: boolean }) {
  const rule =
    t.status === "live"
      ? "border-solid"
      : t.status === "open"
        ? "border-dashed"
        : t.status === "full"
          ? "border-dotted"
          : "border-solid opacity-50";

  return (
    <article className="group relative grid overflow-hidden rounded-2xl bg-laminate text-ink shadow-[0_18px_40px_-20px_rgb(0_0_0/0.85)] sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)_auto]">
      <div className="relative aspect-[16/10] overflow-hidden bg-arena sm:aspect-auto">
        <Photo
          name={t.photo}
          ink={t.tier}
          alt={`${t.name} venue`}
          eager={priority}
          className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
        <span
          className={`absolute top-3 left-3 rounded-md px-2.5 py-1 font-display text-sm font-black tracking-wide uppercase ${bg[t.tier]}`}
          style={{ color: onInk[t.tier] }}
        >
          {gameName(t.game)}
        </span>
        {holo && <div className="holo absolute inset-x-0 bottom-0 h-3 opacity-95" aria-hidden="true" />}
      </div>

      <div className="relative p-5 sm:p-6">
        <div className={`pointer-events-none absolute inset-2.5 rounded-lg border-2 border-ink/70 ${rule}`} aria-hidden="true" />
        <div className="relative">
          <h3
            className={`display text-[clamp(1.9rem,3.2vw,2.75rem)] ${
              t.status === "finished" ? "line-through decoration-[3px]" : ""
            }`}
          >
            <Link href={`/tournaments/${t.slug}/`} className="after:absolute after:inset-0 focus-visible:outline-none">
              {t.name}
            </Link>
          </h3>
          <p className="meta mt-2 text-ink-soft">{t.format}</p>
          <p className="mt-3 max-w-[48ch] text-sm leading-relaxed text-ink-soft">{t.summary}</p>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-sm">
            <li className="inline-flex items-center gap-1.5">
              <IconCalendar size={16} /> {t.dateLabel}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <IconPin size={16} /> {t.venue}
            </li>
          </ul>
          <div className="mt-4">
            {t.status === "finished" && t.winner ? (
              <p className="meta">Winner · {team(t.winner).name}</p>
            ) : (
              <SlotPunches total={t.slots} taken={t.registered} />
            )}
          </div>
        </div>
      </div>

      <div className="relative flex flex-wrap items-center justify-between gap-4 border-t-2 border-dashed border-ink/25 p-5 sm:w-40 sm:flex-col sm:flex-nowrap sm:items-start sm:justify-center sm:border-t-0">
        <div className="perf-v absolute inset-y-0 -left-1.5 hidden w-3 sm:block" aria-hidden="true" />
        <StatusStamp status={t.status} />
        <div>
          <p className="meta text-ink-soft">Prize pool</p>
          <p className="font-display text-4xl font-black tabular">{money(t.prizePool)}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold">
          {t.status === "finished" ? "Results" : t.status === "full" ? "Waitlist" : "Details"}
          <IconArrow size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
