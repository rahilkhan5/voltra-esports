import type { Metadata } from "next";
import { RosterBrowser } from "./RosterBrowser";

export const metadata: Metadata = {
  title: "Players",
  description: "The Voltra roster: player credentials with stats on the back. Demo content.",
};

export default function PlayersPage() {
  return (
    <div className="wrap pt-14 sm:pt-20">
      <header className="max-w-3xl">
        <h1 className="display text-[clamp(3.4rem,9vw,6rem)]">Players</h1>
        <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-laminate/85">
          Every player wears the same credential they get at our events. Tap or click a badge to flip it and read the
          stats on the back.
        </p>
      </header>
      <div className="mt-12">
        <RosterBrowser />
      </div>
    </div>
  );
}
