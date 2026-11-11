import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SlotPunches, StatusStamp } from "@/components/EventPass";
import { IconArrow, IconCalendar, IconPin, IconTrophy, IconUsers } from "@/components/Icons";
import { Photo } from "@/components/Photo";
import { TeamEmblem } from "@/components/TeamEmblem";
import { gameName, money, team, tournamentBySlug, tournaments, type BracketMatch } from "@/lib/data";
import { bg, onInk } from "@/lib/ink";
import { ReserveSlot } from "./ReserveSlot";

export function generateStaticParams() {
  return tournaments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = tournamentBySlug(slug);
  return t ? { title: t.name, description: t.summary } : {};
}

const statusWord = { open: "Registration open", full: "Full", live: "Live now", finished: "Finished" } as const;

export default async function TournamentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = tournamentBySlug(slug);
  if (!t) notFound();

  const rounds = t.bracket
    ? (["Quarterfinal", "Semifinal", "Grand final"] as const)
        .map((r) => ({ round: r, games: t.bracket!.filter((m) => m.round === r) }))
        .filter((r) => r.games.length > 0)
    : [];

  return (
    <div className="wrap pt-10 sm:pt-14">
      <Link
        href="/tournaments/"
        className="group inline-flex items-center gap-2 rounded-md text-sm text-laminate-dim hover:text-laminate"
      >
        <IconArrow size={16} className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
        All tournaments
      </Link>

      {/* The pass */}
      <article className="laminate mt-6 grid overflow-hidden rounded-[22px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="relative min-h-72 overflow-hidden bg-arena lg:min-h-[34rem]">
          <Photo name={t.photo} ink={t.tier} alt={`${t.name} venue`} eager />
          <span
            className={`absolute top-4 left-4 rounded-md px-3 py-1.5 font-display text-lg font-black tracking-wide uppercase ${bg[t.tier]}`}
            style={{ color: onInk[t.tier] }}
          >
            {gameName(t.game)}
          </span>
        </div>
        <div className="relative flex flex-col p-6 sm:p-9">
          <div className="slot absolute top-4 left-1/2 hidden -translate-x-1/2 lg:block" />
          <div className="flex items-start justify-between gap-4 lg:mt-4">
            <h1 className="display text-[clamp(2.75rem,6vw,5.25rem)] text-ink">{t.name}</h1>
            <span className="mt-1 shrink-0" title={statusWord[t.status]}>
              <StatusStamp status={t.status} />
            </span>
          </div>
          <p className="meta mt-3 text-ink-soft">{t.format}</p>
          <p className="mt-4 max-w-[52ch] leading-relaxed text-ink-soft">{t.summary}</p>

          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t-2 border-dashed border-ink/20 pt-6 text-sm">
            <div>
              <dt className="meta inline-flex items-center gap-1.5 text-ink-soft">
                <IconCalendar size={14} /> Dates
              </dt>
              <dd className="mt-1 font-semibold">{t.dateLabel}</dd>
            </div>
            <div>
              <dt className="meta inline-flex items-center gap-1.5 text-ink-soft">
                <IconPin size={14} /> Venue
              </dt>
              <dd className="mt-1 font-semibold">{t.venue}</dd>
            </div>
            <div>
              <dt className="meta inline-flex items-center gap-1.5 text-ink-soft">
                <IconTrophy size={14} /> Prize pool
              </dt>
              <dd className="mt-1 font-display text-4xl font-black tabular">{money(t.prizePool)}</dd>
            </div>
            <div>
              <dt className="meta inline-flex items-center gap-1.5 text-ink-soft">
                <IconUsers size={14} /> Slots
              </dt>
              <dd className="mt-2">
                <SlotPunches total={t.slots} taken={t.registered} />
                <span className="meta tabular mt-1.5 block text-ink-soft">
                  {t.registered} of {t.slots} taken
                </span>
              </dd>
            </div>
          </dl>

          <div className="mt-auto pt-8">
            <ReserveSlot t={t} />
          </div>
        </div>
      </article>

      <div className="mt-16 grid gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="flex min-w-0 flex-col gap-16">
          {t.standings && (
            <section aria-labelledby="table-title">
              <h2 id="table-title" className="display text-5xl">
                Point table
              </h2>
              <div className="mt-6 overflow-x-auto rounded-xl border border-arena-3">
                <table className="w-full text-left text-sm tabular">
                  <thead className="bg-arena-2">
                    <tr className="meta text-laminate-dim">
                      <th scope="col" className="px-4 py-3 font-normal">
                        #
                      </th>
                      <th scope="col" className="px-4 py-3 font-normal">
                        Team
                      </th>
                      <th scope="col" className="hidden px-3 py-3 text-right font-normal sm:table-cell">
                        P
                      </th>
                      <th scope="col" className="hidden px-3 py-3 text-right font-normal sm:table-cell">
                        W
                      </th>
                      <th scope="col" className="hidden px-3 py-3 text-right font-normal sm:table-cell">
                        L
                      </th>
                      <th scope="col" className="px-3 py-3 text-right font-normal">
                        Diff
                      </th>
                      <th scope="col" className="px-4 py-3 text-right font-normal">
                        Pts
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.standings.map((s, i) => {
                      const tm = team(s.team);
                      return (
                        <tr key={s.team} className={`border-t border-arena-3 ${i < 2 ? "" : "text-laminate-dim"}`}>
                          <td className="py-3 pr-2 pl-4 font-mono">{i + 1}</td>
                          <td className="px-4 py-3">
                            <span className="inline-flex items-center gap-2.5 font-display text-lg font-black uppercase">
                              <TeamEmblem team={tm} size={26} />
                              {tm.name}
                            </span>
                          </td>
                          <td className="hidden px-3 py-3 text-right sm:table-cell">{s.played}</td>
                          <td className="hidden px-3 py-3 text-right sm:table-cell">{s.won}</td>
                          <td className="hidden px-3 py-3 text-right sm:table-cell">{s.lost}</td>
                          <td className="px-3 py-3 text-right">{s.roundDiff > 0 ? `+${s.roundDiff}` : s.roundDiff}</td>
                          <td className="px-4 py-3 text-right font-display text-xl font-black">{s.points}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="meta mt-3 text-laminate-dim">Top two advance to the bracket.</p>
            </section>
          )}

          {rounds.length > 0 && (
            <section aria-labelledby="bracket-title">
              <h2 id="bracket-title" className="display text-5xl">
                Bracket
              </h2>
              <div className="mt-6 sm:overflow-x-auto sm:pb-2">
                <div className="flex flex-col gap-8 sm:min-w-max sm:flex-row sm:gap-6">
                  {rounds.map((r) => (
                    <div key={r.round} className="flex w-full flex-col sm:w-52">
                      <p className="meta mb-3 text-laminate-dim">{r.round}</p>
                      <div className="flex flex-1 flex-col justify-around gap-4">
                        {r.games.map((g, i) => (
                          <BracketCard key={i} m={g} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section aria-labelledby="rules-title">
            <h2 id="rules-title" className="display text-5xl">
              Rules
            </h2>
            <ol className="mt-6 flex flex-col">
              {t.rules.map((rule, i) => (
                <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-2 border-t border-dashed border-arena-3 py-4">
                  <span className="font-mono text-sm text-laminate-dim tabular">{String(i + 1).padStart(2, "0")}</span>
                  <span className="leading-relaxed">{rule}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <aside className="flex min-w-0 flex-col gap-16">
          <section aria-labelledby="sched-title">
            <h2 id="sched-title" className="display text-5xl">
              Schedule
            </h2>
            <ol className="mt-6 flex flex-col">
              {t.schedule.map((s, i) => (
                <li key={i} className="grid grid-cols-[6.5rem_1fr] gap-4 border-t border-dashed border-arena-3 py-4">
                  <span className="meta tabular pt-0.5 text-laminate-dim">
                    {s.day}
                    <br />
                    {s.time}
                  </span>
                  <span className="font-medium">{s.label}</span>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="prize-title">
            <h2 id="prize-title" className="display text-5xl">
              Prizes
            </h2>
            <ul className="mt-6 flex flex-col gap-2">
              {t.prizes.map((p, i) => (
                <li
                  key={p.place}
                  className={`flex items-baseline justify-between rounded-lg px-4 py-3 ${
                    i === 0 ? "bg-laminate text-ink" : "bg-arena-2"
                  }`}
                >
                  <span className="font-display text-xl font-black uppercase">{p.place}</span>
                  <span className="font-display text-3xl font-black tabular">{money(p.amount)}</span>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}

function BracketCard({ m }: { m: BracketMatch }) {
  const done = typeof m.scoreA === "number" && typeof m.scoreB === "number";
  const row = (id: string | null, score: number | undefined, won: boolean) => {
    const tm = id ? team(id) : null;
    return (
      <div className={`flex items-center justify-between gap-3 px-3 py-2.5 ${done && !won ? "text-laminate-dim line-through decoration-1" : ""}`}>
        <span className="inline-flex min-w-0 items-center gap-2">
          {tm ? <TeamEmblem team={tm} size={22} /> : <span className="size-[22px] rounded-full border border-dashed border-laminate-dim" />}
          <span className="truncate font-display text-base font-black uppercase">{tm ? tm.name : "TBD"}</span>
        </span>
        <span className="font-display text-lg font-black tabular">{typeof score === "number" ? score : ""}</span>
      </div>
    );
  };
  return (
    <div className={`overflow-hidden rounded-lg border-2 bg-arena-2 ${done ? "border-solid border-arena-3" : "border-dashed border-arena-3"}`}>
      {row(m.a, m.scoreA, done && (m.scoreA ?? 0) > (m.scoreB ?? 0))}
      <div className="border-t border-arena-3" />
      {row(m.b, m.scoreB, done && (m.scoreB ?? 0) > (m.scoreA ?? 0))}
    </div>
  );
}
