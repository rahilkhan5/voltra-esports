---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/tournaments/page.tsx","app/players/page.tsx","app/shop/page.tsx","app/cart/page.tsx"]
---

Scope: the whole Voltra demo site (Home, Tournaments, Tournament Details, Players, Shop, Cart). Visitor mode: Persuade (home), Operate-lite on shop/cart/tournament filters.

Audience and job: freelance clients judging whether Rahil can build a polished esports brand site; in-world, fans checking matches, roster and merch. Action: browse, add to cart, reserve a tournament slot (demo, localStorage). Proof: the interactions themselves feel real. Constraints: static export, fictional content labelled as demo, Unsplash photos only.

Memorable moment: the ALL ACCESS badge hanging from a lanyard that swings with the pointer, its holographic strip shifting colour as it turns.

## Direction contract

THESIS: Voltra's site is a stack of event credentials: every page is a pass, ticket stub or merch hangtag you would hold at a LAN. It refuses the category default of a dark hero photo, one neon accent, angled clip-path buttons and glow.

OWN-WORLD: Arena-black ground with laminate-white badge cards as the bright objects. Exactly four tier inks: signal orange (ALL ACCESS, primary actions), volt (PLAYER), cobalt (PRESS, info), amber (CREW, upcoming). Badges carry a punched lanyard slot, a full-width tier band, mono serials and a barcode; tickets carry perforated tear edges with notches; products hang on hangtags with a string hole. Holographic foil appears once per page on the decisive element. Every photo is a two-ink duotone: event and product photos in black plus one tier ink, ID portraits in black plus laminate (like a badge photo print). Type: Big Shoulders Display for credential names, Archivo for text, Martian Mono for serials and meta. No glow, no gradients except the foil.

STORY: The visitor sees a living pass swing, understands Voltra runs esports events, scrolls past next-match tickets, roster badges and merch tags, scans an item into the cart, and leaves believing the builder can make real brand sites.

FIRST VIEWPORT: Desktop: left 55% holds a three-line Big Shoulders headline (max 6rem), one sentence, an event meta row in mono (season, city, dates) below the sentence, and the primary action "Get your pass" as an orange ticket stub plus a secondary "Next matches" link. Right 45%: a lanyard strap drops from the top edge into a large ALL ACCESS badge (orange tier band, holo strip, event name, dates, barcode, serial) that swings on pointer movement. A perforated tear line closes the viewport. Mobile: headline first, the badge centred below at about 70% width, both visible on a 390x844 screen.

FORM: Event Credential, candidate 5 of 7 on the ordered list, seed key d0cb8fed. Signature interaction: spring-swung lanyard badge with pointer-driven holo foil; motion grammar: things hang, swing, tear and get scanned (laser sweep plus SCANNED mark on add-to-cart and slot reservation). Match state is line form: live solid, upcoming dashed, finished struck.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
