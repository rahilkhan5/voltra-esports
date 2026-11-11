"use client";

import { useMemo, useState } from "react";
import { EventPass } from "@/components/EventPass";
import { PunchFilter } from "@/components/PunchFilter";
import { games, tournaments, type TournamentStatus } from "@/lib/data";

type StatusFilter = "all" | TournamentStatus;

export function TournamentBrowser() {
  const [game, setGame] = useState<string>("all");
  const [status, setStatus] = useState<StatusFilter>("all");

  const list = useMemo(
    () =>
      tournaments.filter((t) => (game === "all" || t.game === game) && (status === "all" || t.status === status)),
    [game, status],
  );

  const gameOptions = [
    { value: "all", label: "All games", count: tournaments.length },
    ...games.map((g) => ({ value: g.id, label: g.name, count: tournaments.filter((t) => t.game === g.id).length })),
  ];

  const statusOptions: { value: StatusFilter; label: string }[] = [
    { value: "all", label: "Any status" },
    { value: "open", label: "Open" },
    { value: "live", label: "Live" },
    { value: "full", label: "Full" },
    { value: "finished", label: "Finished" },
  ];

  return (
    <div>
      <div className="flex flex-col gap-3 border-y border-arena-3 py-5">
        <PunchFilter label="Filter by game" options={gameOptions} value={game} onChange={setGame} />
        <PunchFilter label="Filter by status" options={statusOptions} value={status} onChange={setStatus} />
      </div>
      <p className="meta mt-6 text-laminate-dim" aria-live="polite">
        {list.length} {list.length === 1 ? "event" : "events"}
      </p>
      {list.length > 0 ? (
        <div className="mt-4 flex flex-col gap-6">
          {list.map((t, i) => (
            <EventPass key={t.slug} t={t} holo={t.slug === "voltra-invitational-s04"} priority={i === 0} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border-2 border-dashed border-arena-3 p-10 text-center">
          <p className="display text-4xl">No passes printed</p>
          <p className="mt-3 text-laminate-dim">Nothing matches that game and status. Try another combination.</p>
          <button
            type="button"
            onClick={() => {
              setGame("all");
              setStatus("all");
            }}
            className="mt-6 rounded-md bg-laminate px-4 py-2.5 text-sm font-semibold text-ink"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
