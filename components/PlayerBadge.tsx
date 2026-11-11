"use client";

import { useState } from "react";
import { gameCode, gameName, type Player } from "@/lib/data";
import { bg, onInk, tierLabel } from "@/lib/ink";
import { Barcode } from "./Barcode";
import { IconFlip, VoltraMark } from "./Icons";
import { Photo } from "./Photo";

/** A player credential. Click to flip it and read the stats printed on the back. */
export function PlayerBadge({
  player,
  holo = false,
  className = "",
}: {
  player: Player;
  holo?: boolean;
  className?: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const serial = `VLT-${player.number}-${player.id.toUpperCase().slice(0, 4)}`;

  return (
    <div className={`[perspective:1400px] ${className}`}>
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
        aria-label={`${player.handle}, ${player.role}. ${flipped ? "Show front of badge" : "Show stats on back of badge"}`}
        className="group relative block w-full text-left transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] focus-visible:outline-offset-4"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div className="laminate relative flex flex-col rounded-[14px] p-3 [backface-visibility:hidden]">
          <div className="slot mx-auto mt-0.5 mb-3" />
          <div className="mb-2.5 flex items-center justify-between px-0.5">
            <span className="inline-flex items-center gap-1.5 text-ink">
              <VoltraMark size={18} className="text-ink" />
              <span className="font-display text-sm font-extrabold tracking-wide uppercase">Voltra</span>
            </span>
            <span className="meta whitespace-nowrap text-ink-soft" title={gameName(player.game)}>
              S04 · {gameCode(player.game)}
            </span>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg bg-arena">
            <Photo
              name={player.photo}
              ink="laminate"
              alt={`${player.handle}, ${player.role}`}
              focus={player.focus}
              className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            />
            {holo && (
              <div className="holo absolute top-0 right-0 bottom-0 w-6 opacity-90 mix-blend-hard-light" aria-hidden="true" />
            )}
          </div>
          <div className="px-0.5 pt-3">
            <p className="display text-[clamp(2.25rem,4.2vw,3.25rem)] text-ink">{player.handle}</p>
            <p className="mt-1.5 text-sm text-ink-soft">
              {player.name} · {player.role}
              {player.captain && player.role !== "Captain" ? " · Captain" : ""}
            </p>
          </div>
          <div
            className={`mt-3 flex items-center justify-between rounded-md px-3 py-2 ${bg[player.tier]}`}
            style={{ color: onInk[player.tier] }}
          >
            <span className="font-display text-lg font-black tracking-wide uppercase">{tierLabel[player.tier]}</span>
            <span className="font-display text-2xl font-black tabular">#{player.number}</span>
          </div>
          <div className="mt-2.5 flex items-end justify-between gap-3 px-0.5">
            <Barcode value={serial} height={26} className="h-6 w-24 min-w-0 shrink text-ink" />
            <span className="meta tabular shrink-0 whitespace-nowrap text-ink-soft">{serial}</span>
          </div>
          <span className="meta absolute right-3.5 bottom-[4.6rem] inline-flex items-center gap-1 rounded-full bg-ink px-2 py-1 text-laminate opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
            <IconFlip size={12} /> Stats
          </span>
        </div>

        {/* Back */}
        <div
          className="laminate absolute inset-0 flex flex-col rounded-[14px] bg-laminate-2 p-4 [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="slot mx-auto mb-4" />
          <p className="meta text-ink-soft">Back of badge · {gameName(player.game)}</p>
          <p className="display mt-2 text-4xl text-ink">{player.handle}</p>
          <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-ink/15 bg-ink/15">
            {player.stats.map((s) => (
              <div key={s.label} className="bg-laminate-2 p-3">
                <dt className="meta text-ink-soft">{s.label}</dt>
                <dd className="font-display text-3xl font-black text-ink tabular">{s.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm leading-relaxed text-ink">{player.bio}</p>
          <div className="mt-auto flex items-end justify-between pt-4">
            <span className="meta text-ink-soft">Signed {player.joined}</span>
            <span className="meta inline-flex items-center gap-1 text-ink-soft">
              <IconFlip size={12} /> Tap to flip
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}
