import type { Metadata } from "next";
import { TournamentBrowser } from "./TournamentBrowser";

export const metadata: Metadata = {
  title: "Tournaments",
  description: "Voltra LAN and online tournaments across five games. Demo content.",
};

export default function TournamentsPage() {
  return (
    <div className="wrap pt-14 sm:pt-20">
      <header className="max-w-3xl">
        <h1 className="display text-[clamp(3.4rem,9vw,6rem)]">Tournaments</h1>
        <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-laminate/85">
          Every event Voltra runs or hosts, printed as a pass. Dashed passes are open for sign-up, solid ones are live,
          and struck ones are done.
        </p>
      </header>
      <div className="mt-12">
        <TournamentBrowser />
      </div>
    </div>
  );
}
