---
name: Voltra
description: A fictional esports organisation printed as a stack of event credentials.
colors:
  arena: "#0f1012"
  arena-2: "#17181c"
  arena-3: "#23242a"
  laminate: "#f4f1ea"
  laminate-2: "#e6e1d4"
  laminate-dim: "#aaa59a"
  ink: "#0f1012"
  ink-soft: "#4a4740"
  orange: "#ff4b1f"
  volt: "#c8f031"
  cobalt: "#2b6cff"
  amber: "#ffb000"
typography:
  display:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "clamp(3.1rem, 8.4vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "clamp(1.9rem, 3.2vw, 2.75rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "\"ss01\""
  label:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    letterSpacing: "0.06em"
rounded:
  stub: "6px"
  panel: "8px"
  ticket: "12px"
  badge: "14px"
  pass: "16px"
  hero-badge: "22px"
  wristband: "2.5rem"
  punch: "999px"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  container: "88rem"
  section: "7rem"
  section-wide: "9rem"
  stack: "1.25rem"
components:
  button-ticket:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.stub}"
    padding: "12px 20px 12px 24px"
    height: "52px"
  button-ticket-laminate:
    backgroundColor: "{colors.laminate}"
    textColor: "{colors.ink}"
    rounded: "{rounded.stub}"
    height: "52px"
  button-scan:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.stub}"
    padding: "0 16px"
    height: "44px"
  button-scan-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.laminate}"
    rounded: "{rounded.stub}"
    padding: "0 16px"
    height: "44px"
  button-ghost:
    backgroundColor: "{colors.arena}"
    textColor: "{colors.laminate}"
    rounded: "{rounded.stub}"
    padding: "10px 16px"
  chip-punch:
    backgroundColor: "{colors.arena-2}"
    textColor: "{colors.laminate}"
    rounded: "{rounded.stub}"
    padding: "8px 14px 8px 12px"
    height: "40px"
  chip-punch-selected:
    backgroundColor: "{colors.laminate}"
    textColor: "{colors.ink}"
    rounded: "{rounded.stub}"
  card-badge:
    backgroundColor: "{colors.laminate}"
    textColor: "{colors.ink}"
    rounded: "{rounded.badge}"
    padding: "12px"
  card-event-pass:
    backgroundColor: "{colors.laminate}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pass}"
    padding: "24px"
  card-match-ticket:
    backgroundColor: "{colors.laminate-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.ticket}"
    padding: "20px"
  nav-header:
    backgroundColor: "{colors.arena}"
    textColor: "{colors.laminate-dim}"
    height: "64px"
---

# Design System: Voltra

## Overview

**Creative North Star: "The Event Credential"**

Every surface is something you would hold at a LAN: a laminated pass on a lanyard, a perforated match ticket, a merch hangtag on a string. The site is an arena-black ground on which laminate-white objects are the only bright things. Nothing floats as an abstract card; each container is a printed object with the marks of its making: a punched lanyard slot, a full-width tier band, a mono serial and a barcode, a perforated tear with notches cut by the ground, a string hole.

The system is restricted print. Four tier inks, laminate white and arena black make up the whole palette, photos included, because every photo passes through a two-ink duotone filter. Holographic security foil is the single exception to flat ink, and it appears once per view on the decisive element. Motion follows the same physical logic: things hang, swing, flip, tear and get scanned.

The world explicitly rejects the esports category default: a dark hero photo, one neon accent, angled clip-path buttons and glow.

**Key Characteristics:**
- Arena-black ground, laminate-white printed objects, four tier inks and nothing else.
- State is carried by line form (solid, dashed, dotted, struck), never by colour alone.
- One holographic foil per view, always on the decisive element.
- Every photo is a two-ink duotone printed through the shared SVG filters.
- Heavy condensed uppercase display, plain grotesque text, mono for serials and meta.
- Motion is physical: spring swing, card flip, laser scan, tear line.

## Colors

A restricted print run: two paper stocks, one ground, and exactly four tier inks.

### Primary
- **Signal Orange** (orange): The ALL ACCESS ink and the primary action colour. Ticket stub links, scan buttons, the hero lanyard strap and tier band, the active nav underline, the live dot, text selection and the closing wristband. Ink text sits on it.

### Secondary
- **Volt** (volt): The PLAYER tier ink, and the focus ring colour across the site. Ink text sits on it.
- **Cobalt** (cobalt): The PRESS tier ink for information-led events and passes. The only ink that takes laminate text instead of ink text.

### Tertiary
- **Amber** (amber): The staff tier ink (labelled "Staff" in the build; the direction called it Crew). Used for tier bands, game tags and duotones. Ink text sits on it.

### Neutral
- **Arena Black** (arena): The page ground, the colour of punched holes, ticket notches and the empty space behind every photo.
- **Arena Raised** (arena-2): Unselected filter chips, the cart pill and the season pass artwork backdrop.
- **Arena Rule** (arena-3): Hairline borders on the dark ground, the header rule, the perforated tear line closing the hero, and the rails that badges and tags hang from.
- **Laminate White** (laminate): Badge and pass stock, and primary text on the arena ground.
- **Laminate Back** (laminate-2): The back of a flipped badge and the match ticket stock, one shade duller than the front.
- **Laminate Dim** (laminate-dim): Secondary text and meta on the arena ground, unselected punch rings, the lanyard clip metal.
- **Print Ink** (ink): All text and marks printed on laminate. Same value as the arena, by design: the ink is the ground.
- **Print Ink Soft** (ink-soft): Secondary text, meta and serials printed on laminate.

### Named Rules
**The Four Inks Rule.** The site prints in orange, volt, cobalt and amber plus laminate and arena. No fifth hue, no tints of a tier ink used as a new colour. Each ink keeps its fixed text partner: ink on orange, volt and amber; laminate on cobalt.

**The Duotone Rule.** Every photo is printed through the shared duotone filters: event, venue and product photos in arena black plus the item's tier ink, ID portraits in arena black plus laminate. A raw full-colour photo never ships, and no photo shows a real brand mark, team logo or sponsor.

**The One Foil Rule.** The holographic foil is the only gradient in the system and appears once per view, on the decisive element: the hero ALL ACCESS badge, the flagship event pass, the captain's badge, the season pass product, or the reservation stub.

## Typography

**Display Font:** Big Shoulders (with Arial Narrow, sans-serif), weights 700 to 900
**Body Font:** Archivo (with system-ui, sans-serif), stylistic set 1 on
**Label/Mono Font:** Martian Mono (with ui-monospace, monospace), weights 400 and 500

**Character:** A tall, condensed, black-weight poster face does the shouting the way a credential prints a name; a plain grotesque carries the sentences; a wide mono prints the serials, dates and fine print like a ticket machine would.

### Hierarchy
- **Display** (900, clamp(3.1rem, 8.4vw, 6rem), 0.86): Page titles and the hero headline. Uppercase, balanced wrap, slight negative tracking.
- **Headline** (900, clamp(2.75rem, 6.5vw, 5.5rem), 0.86): Section heads and the tournament detail title.
- **Title** (900, clamp(1.9rem, 3.2vw, 2.75rem), 0.86): Event pass names, player handles, product names, prices and prize pools. Numbers use tabular figures.
- **Body** (400, 1rem to 1.125rem, about 1.6): Ledes and summaries, capped between 40ch and 56ch.
- **Label** (400, 0.6875rem, 0.06em tracking, uppercase): Meta rows, serials, dates, formats, counts and table headers, set in mono.

### Named Rules
**The Stamp Not Eyebrow Rule.** Status is printed as a stamp beside or below the name it belongs to, the way a gate stamps a pass. Nothing sits above a heading as a small label introducing it.

**The Serial Rule.** Anything a machine would print (serials, dates, counts, formats, receipt numbers) is set in the mono label style with tabular figures.

## Layout

A single centred container (88rem max) with a fluid side gutter (clamp(1rem, 4vw, 3rem)). Sections are separated by generous vertical space (7rem, rising to 9rem from the small breakpoint) rather than by rules or background bands. The hero splits into two equal columns on large screens, headline left and the hanging badge right, and stacks headline first on mobile with the badge centred below. A row of perforation dots closes the hero.

Collections hang from rails: the roster is a horizontal snap-scrolling strip of badges, each on a short string of alternating length from a rounded rail, fading out at the right edge; the merch grid hangs tags from the same rail (one column, two from 480px, four on large screens). Event passes stack in a single column and become a three-part grid (photo, body, stub) from the small breakpoint. Match tickets stack in a column beside a sticky section head on large screens.

## Elevation & Depth

Depth comes from physical objects lying on a dark surface, never from glow. Laminate items carry a soft, long, low drop shadow with a faint inner top highlight that reads as a gloss edge. Holes are the inverse: punched slots and string holes are arena-coloured with an inset shadow, so they read as cut through the stock.

### Shadow Vocabulary
- **Laminate lift** (`0 1px 0 rgb(255 255 255 / 0.6) inset, 0 18px 40px -18px rgb(0 0 0 / 0.7), 0 2px 6px rgb(0 0 0 / 0.35)`): Every badge, hangtag and the detail pass.
- **Ticket lift** (`0 18px 40px -20px rgb(0 0 0 / 0.85)` on event passes, `0 14px 30px -16px rgb(0 0 0 / 0.8)` on match tickets): Perforated tickets lying on the ground.
- **Punch** (`inset 0 2px 3px rgb(0 0 0 / 0.6)`): Lanyard slots, string holes, selected punch chips and the wristband hole.

### Named Rules
**The No Glow Rule.** No coloured glow on text, buttons or cards. The one lit thing is the scanner laser, a two-pixel orange line that sweeps across a scan button for 0.6s, because a scanner beam is a native device of this world.

## Shapes

Printed stock with soft die-cut corners. Small controls use a 6px corner, panels and photo windows 8px, match tickets 12px, badges and hangtags 14px, event passes 16px, the hero badge 18px to 22px, and the closing wristband a full 2.5rem pill. Recurring cut-outs define the silhouette: a pill-shaped lanyard slot at the top of every badge, a round string hole on hangtags, half-circle notches where a perforation meets a ticket edge, and round punches on ticket stub links. Perforations are dotted radial patterns, vertical between ticket body and stub, horizontal to close a viewport.

## Components

### Buttons
Tactile, printed, pressed under a thumb.
- **Shape:** Small die-cut corner (6px), minimum 44px tall; ticket links 52px.
- **Ticket stub link (primary):** Signal orange with ink text, two arena-coloured half-punches on the ends, and a dashed vertical tear before the arrow. A laminate variant exists for dark contexts.
- **Scan button:** Signal orange (or ink) with semibold text. On press a laser line sweeps through it, then it reads "Scanned" or "Added to cart" with a check for about 1.3s before resetting. Disabled at 45% opacity.
- **Hover / Focus:** Orange lifts slightly lighter, arrows nudge 4px right, press scales to 0.97 to 0.98. Focus is a 2px volt ring offset 3px.
- **Ghost link:** Arena with an arena-rule border that turns laminate on hover, used for "All players" style section links.

### Chips
- **Style:** Punch filters. Arena-raised with an arena-rule border and an empty ring.
- **State:** Selected turns laminate with ink text and the ring becomes a punched hole (arena fill, inset shadow). Counts sit in mono.

### Cards / Containers
- **Corner Style:** 12px to 22px by object, see Shapes.
- **Background:** Laminate front, laminate-2 back and match tickets.
- **Shadow Strategy:** Laminate lift or ticket lift, see Elevation & Depth.
- **Border:** None on the stock itself; state rules are drawn as an inset 2px ink frame.
- **Internal Padding:** 12px on badges and tags, 20px to 24px on tickets and passes, up to 36px on the detail pass.

### Navigation
Sticky arena header (64px) with a hairline arena-rule bottom border and light blur. Logo mark in orange with the wordmark in display type. Links are Archivo medium in laminate-dim, laminate when current, with a 3px orange underline sitting on the header rule. The cart is a rounded pill with a mono count that turns orange when filled and bumps on add. On mobile the menu drops open with display-size links and an orange dot marking the current page.

### Player Badge
A laminate credential with lanyard slot, wordmark and game code, a laminate duotone portrait, the handle in display type, a full-width tier band with the tier name and shirt number, and a barcode with serial. Clicking flips it in 3D (0.7s, expo out) to a laminate-2 back carrying the stats grid and bio.

### Event Pass and Match Ticket
A three-part ticket: duotone venue photo with a tier-ink game tag, a body framed by an inset 2px rule whose line form shows the state, and a stub behind a vertical perforation holding the status stamp, prize pool and action. Slots are printed as punch holes, filled for taken. Match tickets are the compact form: two team rows, mono time, and a stub behind a notched perforation.

### Hangtag
A product on a laminate tag hung by a tier-ink string from the rail, with a round string hole, a duotone product photo, display name and price, barcode, mono stock count and a scan button. Sold out is a tilted orange stamp over the photo.

### Lanyard Badge
The hero ALL ACCESS pass. An orange strap printed with the wordmark drops from the header into a metal clip and a large laminate badge that swings toward the pointer on a spring and shifts its foil with the angle. Touch screens get a slow idle sway and a tap flick. Reduced motion holds it still.

## Do's and Don'ts

### Do:
- **Do** show state by line form: solid for live, dashed for open or upcoming, dotted for full or waitlist, struck through and dimmed for finished.
- **Do** print status as a stamp (2px ink border, display type) beside or below the name it belongs to.
- **Do** run every photo through the duotone filters: tier ink for events and products, laminate for portraits.
- **Do** give each laminate object its physical marks: lanyard slot, tier band, mono serial, barcode, perforation or string hole.
- **Do** keep the holographic foil to one element per view, the decisive one.
- **Do** pair each tier ink with its fixed text colour: ink on orange, volt and amber, laminate on cobalt.
- **Do** honour reduced motion: the badge stops swinging and animations collapse to an instant change.

### Don't:
- **Don't** use colour alone to signal match or event state.
- **Don't** put a small label above a heading as an eyebrow or kicker.
- **Don't** add a fifth hue, a tint of a tier ink as a new colour, or any gradient other than the foil.
- **Don't** use coloured glow, neon, angled clip-path buttons or a dark full-bleed hero photo.
- **Don't** show a photo in full colour or one containing a real brand mark, team logo or sponsor.
- **Don't** place more than one foil in a single view.
