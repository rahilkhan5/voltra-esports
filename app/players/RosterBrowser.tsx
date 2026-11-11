"use client";

import { useMemo, useState } from "react";
import { PlayerBadge } from "@/components/PlayerBadge";
import { PunchFilter } from "@/components/PunchFilter";
import { games, players } from "@/lib/data";

export function RosterBrowser() {
  const [game, setGame] = useState("all");
  const fielded = games.filter((g) => players.some((p) => p.game === g.id));
  const list = useMemo(() => players.filter((p) => game === "all" || p.game === game), [game]);

  return (
    <div>
      <div className="border-y border-arena-3 py-5">
        <PunchFilter
          label="Filter by game"
          value={game}
          onChange={setGame}
          options={[
            { value: "all", label: "Whole roster", count: players.length },
            ...fielded.map((g) => ({ value: g.id, label: g.name, count: players.filter((p) => p.game === g.id).length })),
          ]}
        />
      </div>
      <div aria-hidden="true" className="mt-10 h-1.5 rounded-full bg-arena-3" />
      <ul className="grid grid-cols-1 gap-x-6 gap-y-4 min-[520px]:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <li key={p.id} className="flex flex-col items-center">
            <span aria-hidden="true" className={`block w-px bg-laminate-dim ${i % 3 === 1 ? "h-12" : "h-7"}`} />
            <PlayerBadge player={p} holo={!!p.captain} className="w-full max-w-[22rem]" />
          </li>
        ))}
      </ul>
    </div>
  );
}
