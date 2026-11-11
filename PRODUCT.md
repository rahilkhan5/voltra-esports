# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) + Tailwind CSS, static export (`output: "export"`), deployed to GitHub Pages from the `rahilkhan5` GitHub account through a GitHub Actions workflow. Chosen by the owner after a recommendation; Vercel was offered and declined for now because it needs a separate login.

## Users

Primary: prospective freelance clients (esports teams, gaming communities, tournament organisers, gaming-gear shops) who open this site from Rahil Khan's portfolio to judge whether he can build a polished, modern React website for them. They usually look on a phone first, skim for a few minutes, and decide whether to message him.

Secondary: the fictional esports organisation "Voltra" is the in-world audience the site pretends to serve (players and fans checking tournaments, rosters and merch).

## Product Purpose

A design-first demo website for a fictional esports organisation, built as a portfolio piece. Success means a client lands on it, believes it is a real, finished esports brand site, and wants the same quality for their own project. Backend features (payments, accounts, admin) are deliberately out of scope until a real client asks for them.

## Positioning

An original brand and design, inspired by the general look of esports WordPress themes but not a copy of any one theme. Built in React/Next.js rather than WordPress, so it shows custom front-end skill rather than template setup.

## Operating Context

Visitors arrive from a portfolio link, LinkedIn, Fiverr or Upwork. Many are non-technical. They judge by first impression, mobile quality, speed and whether interactions feel real.

## Capabilities and Constraints

- Pages: Home, Tournaments, Tournament Details, Players, Shop, Cart.
- All content comes from local JSON/TS data files so a real API can replace it later without touching components.
- Frontend-only interactivity: cart stored in `localStorage`, filters on games/tournaments/players, point table rendered from data.
- No real payments, accounts, admin panel or CMS.
- Static export only (GitHub Pages): no server routes, no runtime API.
- Imagery: free Unsplash photos only (Unsplash License), credited in the footer/README. No images, logos or text from the ThemeForest theme that inspired the brief.

## Brand Commitments

- Name: **Voltra** (fictional esports organisation). Chosen by the owner.
- All teams, players, tournaments, prices and stats are fictional and must read as fictional demo content. Do not use real esports teams, real player names or real sponsor logos.
- Built by Rahil Khan as a portfolio piece; a small, tasteful "Demo by Rahil Khan" credit is allowed.

## Evidence on Hand

- No real testimonials, clients, partners, sponsors or metrics exist. Do not invent sponsor logos or claim real partnerships.
- Photo sources: Unsplash photo IDs collected on 2026-11-11 (esports arenas, gaming setups, gamer portraits, gaming gear).

## Product Principles

1. Feels real: every visible control does something believable, even without a backend.
2. Mobile first impression: the phone view must be as strong as desktop.
3. Swap-ready data: content lives in data files, components stay dumb.
4. Original, not copied: inspiration is fine, imitation is not.
