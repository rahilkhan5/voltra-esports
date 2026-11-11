import Link from "next/link";
import { EventPass } from "@/components/EventPass";
import { Hangtag } from "@/components/Hangtag";
import { IconArrow } from "@/components/Icons";
import { LanyardBadge } from "@/components/LanyardBadge";
import { MatchTicket } from "@/components/MatchTicket";
import { PlayerBadge } from "@/components/PlayerBadge";
import { SectionHead } from "@/components/SectionHead";
import { TicketLink } from "@/components/TicketLink";
import { event, matches, players, products, tournaments } from "@/lib/data";

export default function Home() {
  const upcoming = tournaments.filter((t) => t.status === "open" || t.status === "live").slice(0, 3);
  const drop = products.filter((p) => p.photo && p.stock > 0).slice(0, 4);

  return (
    <>
      {/* First viewport: the pass */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden">
        <div className="wrap grid items-start gap-10 pt-10 pb-14 lg:min-h-[min(calc(100dvh-4rem),50rem)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-6 lg:pt-0 lg:pb-16">
          <div className="order-1 max-w-[40rem] min-w-0">
            <h1 id="hero-title" className="display text-[clamp(3.6rem,8.4vw,6rem)]">
              Your pass
              <br />
              to the <span className="text-orange">next</span>
              <br />
              round.
            </h1>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-laminate/85">
              Voltra runs LAN tournaments, fields a roster across five games, and kits out the players who come to beat
              them.
            </p>
            <p className="meta mt-5 flex flex-wrap gap-x-3 gap-y-1 text-laminate-dim">
              <span>
                {event.name} {event.season}
              </span>
              <span aria-hidden="true">/</span>
              <span>Hall 3, {event.city}</span>
              <span aria-hidden="true">/</span>
              <span>{event.dates}</span>
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <TicketLink href="/tournaments/voltra-invitational-s04/">Get your pass</TicketLink>
              <Link
                href="#next"
                className="group inline-flex items-center gap-2 rounded-md py-2 font-medium text-laminate underline decoration-laminate/30 underline-offset-4 hover:decoration-laminate"
              >
                Next matches
                <IconArrow size={16} className="rotate-90 transition-transform duration-300 group-hover:translate-y-0.5" />
              </Link>
            </div>
          </div>
          <div className="order-2 -mt-4 min-w-0 lg:mt-0 lg:self-start">
            <LanyardBadge />
          </div>
        </div>
        <div className="perf-h h-2 text-arena-3" aria-hidden="true" />
      </section>

      {/* Next up */}
      <section id="next" aria-labelledby="next-title" className="wrap scroll-mt-20 pt-20 sm:pt-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 [&>*]:min-w-0">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHead id="next-title" title="Next up" />
            <p className="mt-4 max-w-[40ch] text-laminate-dim">
              A solid rule means the match is live. Dashed means it is still coming. Struck through means it is in the
              books.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {matches.map((m) => (
              <MatchTicket key={m.id} match={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Roster */}
      <section aria-labelledby="roster-title" className="pt-28 sm:pt-36">
        <div className="wrap">
          <SectionHead
            id="roster-title"
            title="The roster"
            lede="Six credentials, four games. Tap a badge to read the back."
            href="/players/"
            linkLabel="All players"
          />
        </div>
        <div className="relative mt-10">
          <div className="wrap">
            <div aria-hidden="true" className="h-1.5 rounded-full bg-arena-3" />
          </div>
          <ul className="wrap flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 [scrollbar-width:thin]">
            {players.map((p, i) => (
              <li key={p.id} className="flex w-[15.5rem] shrink-0 snap-start flex-col items-center">
                <span aria-hidden="true" className={`block w-px bg-laminate-dim ${i % 2 ? "h-10" : "h-6"}`} />
                <PlayerBadge player={p} className="w-full" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Calendar */}
      <section aria-labelledby="cal-title" className="wrap pt-28 sm:pt-36">
        <SectionHead
          id="cal-title"
          title="On the calendar"
          lede="Open events take sign-ups straight from the pass. Slots fill left to right."
          href="/tournaments/"
          linkLabel="All tournaments"
        />
        <div className="mt-10 flex flex-col gap-6">
          {upcoming.map((t) => (
            <EventPass key={t.slug} t={t} />
          ))}
        </div>
      </section>

      {/* Merch */}
      <section aria-labelledby="merch-title" className="wrap pt-28 sm:pt-36">
        <SectionHead
          id="merch-title"
          title="Merch drop"
          lede="The gear our players use on stage, hung on the same rail."
          href="/shop/"
          linkLabel="Open the shop"
        />
        <div className="mt-10">
          <div aria-hidden="true" className="h-1.5 rounded-full bg-arena-3" />
          <div className="grid grid-cols-1 gap-x-5 gap-y-2 min-[480px]:grid-cols-2 lg:grid-cols-4">
            {drop.map((p) => (
              <Hangtag key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Close: the wristband */}
      <section aria-labelledby="close-title" className="wrap pt-28 sm:pt-36">
        <div className="relative flex flex-col gap-8 overflow-hidden rounded-[2.5rem] bg-orange px-7 py-10 text-ink sm:px-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between">
          <span aria-hidden="true" className="absolute top-1/2 left-5 hidden size-7 -translate-y-1/2 rounded-full bg-ink/85 shadow-[inset_0_2px_3px_rgb(0_0_0/0.6)] sm:block" />
          <div className="sm:pl-8">
            <h2 id="close-title" className="display text-[clamp(2.8rem,6vw,5.25rem)]">
              Doors open 12 Dec.
            </h2>
            <p className="mt-3 max-w-[44ch] text-lg text-ink/80">
              Sixteen teams, three days, one hall in {event.city}. Three slots are still open.
            </p>
          </div>
          <Link
            href="/tournaments/voltra-invitational-s04/"
            className="group inline-flex min-h-13 shrink-0 items-center gap-3 self-start rounded-md bg-ink px-6 font-semibold text-laminate transition-transform duration-200 active:scale-[0.98] lg:self-auto"
          >
            Reserve a slot
            <IconArrow size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
