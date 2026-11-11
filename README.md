# Voltra · esports demo site

A design-first demo website for **Voltra**, a fictional esports organisation. Built by Rahil Khan as a portfolio piece.

**Live:** https://rahilkhan5.github.io/voltra-esports/

The whole site is designed as a set of event credentials: player ID badges, tournament passes with perforated stubs, match tickets and merch hangtags. The hero pass hangs from a lanyard and swings toward your cursor, with a holographic strip that shifts as it moves.

## Pages

- **Home**: swinging ALL ACCESS pass, next matches, roster rail, tournament passes, merch drop
- **Tournaments**: filter by game and status; slots shown as punch holes
- **Tournament details**: point table, bracket, schedule, prizes, rules, and a "Reserve a slot" stub
- **Players**: player credentials that flip in 3D to show stats
- **Shop** and **Cart**: add to cart with a scan animation, quantities, receipt, demo checkout

## What is real and what is demo

Everything runs in the browser. The cart and slot reservations are saved in `localStorage`. There is no backend, no payment and no accounts. All teams, players, events, prices and stats are fictional.

All content lives in [`lib/data.ts`](lib/data.ts), so a real API or CMS can replace it later without touching the components.

## Stack

- Next.js (App Router, static export)
- Tailwind CSS v4
- Motion (spring physics for the lanyard and the torn ticket stub)
- Fonts: Big Shoulders, Archivo, Martian Mono (self-hosted through `next/font`)
- Deployed to GitHub Pages from the `gh-pages` branch (`npm run deploy`)

## Run it locally

```bash
npm install
npm run dev
```

Build the static site into `out/`:

```bash
npm run build
```

Publish to GitHub Pages (builds with the `/voltra-esports` base path and pushes `out/` to the `gh-pages` branch):

```bash
npm run deploy
```

## Photo credits

All photos are from [Unsplash](https://unsplash.com) under the Unsplash License, printed on the site as two-colour duotones. Source photo IDs:

| File | Unsplash photo |
| --- | --- |
| arena-crowd | photo-1780766382547-a0ffa16bd32d |
| stage-spotlights | photo-1758979141086-1c32a2885d06 |
| festival-field | photo-1533174072545-7a4b6ad7a6c3 |
| lan-dim-room | photo-1758410473735-c76baff30a79 |
| lan-hall | photo-1633545495735-25df17fb9f31 |
| squad-online | photo-1558008258-7ff8888b42b0 |
| studio-purple | photo-1783979384797-7a5d2ad23fc8 |
| fps-player | photo-1534423861386-85a16f5d13fd |
| p-blue-hoodie | photo-1610041321420-a596dd14ebc9 |
| p-glasses-man | photo-1615276884890-2f2ffdab7b43 |
| p-glasses-woman | photo-1613698808499-f772ccb4f527 |
| p-beard-headphones | photo-1777384180011-08726f8c5758 |
| p-eyes-closed | photo-1762289701519-cc1511d4a791 |
| p-gamer-man | photo-1648736958748-a0978b01da0a |
| g-headset | photo-1610041321327-b794c052db27 |
| g-mouse | photo-1615663245857-ac93bb7c39e7 |
| g-keyboard | photo-1595044426077-d36d9236d54a |
| g-keyboard-orange | photo-1626958390898-162d3577f293 |
| g-chair | photo-1770195483917-b3bb444b7a29 |
| g-mic | photo-1590602847861-f357a9332bbc |
| g-controller | photo-1580234811497-9df7fd2f357e |

Each photo can be found at `https://unsplash.com/photos/<id>` or loaded from `https://images.unsplash.com/<photo-id>`.
