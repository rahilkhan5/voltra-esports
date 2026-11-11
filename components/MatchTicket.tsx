import Link from "next/link";
import { gameName, team, type Match, type Team } from "@/lib/data";
import { TeamEmblem } from "./TeamEmblem";

const stateLabel = { live: "Live", upcoming: "Next", finished: "Result" } as const;

/**
 * A match ticket. State is carried by line form, never colour:
 * live = solid rule, upcoming = dashed rule, finished = struck through.
 */
export function MatchTicket({ match }: { match: Match }) {
  const home = team(match.home);
  const away = team(match.away);
  const line =
    match.state === "live" ? "border-solid" : match.state === "upcoming" ? "border-dashed" : "border-solid opacity-60";
  const scored = typeof match.scoreHome === "number" && typeof match.scoreAway === "number";
  const homeWon = scored && match.state === "finished" && match.scoreHome! > match.scoreAway!;
  const awayWon = scored && match.state === "finished" && match.scoreAway! > match.scoreHome!;

  return (
    <article className="relative flex min-w-0 rounded-xl bg-laminate-2 text-ink shadow-[0_14px_30px_-16px_rgb(0_0_0/0.8)]">
      <div className="relative min-w-0 flex-1 p-4 sm:p-5">
        <div className={`pointer-events-none absolute inset-2 rounded-lg border-2 border-ink/80 ${line}`} aria-hidden="true" />
        <div className="relative">
          <p className="meta truncate text-ink-soft">
            {gameName(match.game)} · {match.stage}
          </p>
          <div className="mt-3 flex flex-col gap-1.5">
            <TeamRow t={home} score={match.scoreHome} dim={awayWon} />
            <TeamRow t={away} score={match.scoreAway} dim={homeWon} />
          </div>
          <p className={`meta mt-3 tabular ${match.state === "finished" ? "line-through decoration-2" : ""}`}>{match.when}</p>
        </div>
      </div>

      <div className="perf-v relative w-3 shrink-0" aria-hidden="true">
        <span className="notch-top" />
        <span className="notch-bottom" />
      </div>

      <div className="flex w-[5.5rem] shrink-0 flex-col items-center justify-center gap-2 p-3 text-center sm:w-28">
        <span className="inline-flex items-center gap-1.5 font-display text-2xl font-black uppercase">
          {match.state === "live" && <span className="live-dot inline-block size-2.5 rounded-full bg-orange" aria-hidden="true" />}
          {stateLabel[match.state]}
        </span>
        <Link
          href={`/tournaments/${match.tournament}/`}
          className="meta rounded-sm underline decoration-ink/40 hover:decoration-ink"
          aria-label={`Open ${gameName(match.game)} event details`}
        >
          Details
        </Link>
      </div>
    </article>
  );
}

function TeamRow({ t, score, dim }: { t: Team; score?: number; dim: boolean }) {
  return (
    <div className={`flex items-center justify-between gap-3 ${dim ? "opacity-55" : ""}`}>
      <span className="flex min-w-0 items-center gap-2.5">
        <TeamEmblem team={t} size={30} />
        <span className="truncate font-display text-[1.6rem] leading-none font-black uppercase">{t.name}</span>
      </span>
      <span className="font-display text-3xl leading-none font-black tabular">{typeof score === "number" ? score : ""}</span>
    </div>
  );
}
