// All Voltra content is fictional demo data. Components read only from here,
// so a real API can replace these exports later without touching the UI.

export type Tier = "orange" | "volt" | "cobalt" | "amber";

export type Game = {
  id: string;
  name: string;
  code: string;
  genre: string;
};

export const games: Game[] = [
  { id: "hexfront", name: "Hexfront", code: "HXF", genre: "Tactical shooter" },
  { id: "skyrift", name: "Skyrift Legends", code: "SKY", genre: "MOBA" },
  { id: "ironfist", name: "Ironfist Arena", code: "IRN", genre: "Fighting" },
  { id: "dropzone", name: "Dropzone 9", code: "DZ9", genre: "Battle royale" },
  { id: "pitchkings", name: "Pitch Kings", code: "PTK", genre: "Football" },
];

export function gameName(id: string) {
  return games.find((g) => g.id === id)?.name ?? id;
}

export function gameCode(id: string) {
  return games.find((g) => g.id === id)?.code ?? id.slice(0, 3).toUpperCase();
}

export type TournamentStatus = "open" | "full" | "live" | "finished";

export type Team = {
  id: string;
  name: string;
  short: string;
  shape: "hex" | "shield" | "circle" | "diamond";
  ink: Tier;
};

export const teams: Team[] = [
  { id: "voltra", name: "Voltra", short: "VLT", shape: "hex", ink: "orange" },
  { id: "ghostline", name: "Ghostline", short: "GHL", shape: "shield", ink: "cobalt" },
  { id: "papertigers", name: "Paper Tigers", short: "PTG", shape: "diamond", ink: "amber" },
  { id: "northwind", name: "Northwind", short: "NWD", shape: "circle", ink: "volt" },
  { id: "saltmarsh", name: "Saltmarsh", short: "SLT", shape: "shield", ink: "volt" },
  { id: "kilnhouse", name: "Kilnhouse", short: "KLN", shape: "circle", ink: "orange" },
  { id: "lowtide", name: "Low Tide", short: "LTD", shape: "diamond", ink: "cobalt" },
  { id: "brasshand", name: "Brass Hand", short: "BRS", shape: "hex", ink: "amber" },
];

export function team(id: string): Team {
  const t = teams.find((x) => x.id === id);
  if (!t) throw new Error(`Unknown team ${id}`);
  return t;
}

export type Standing = {
  team: string;
  played: number;
  won: number;
  lost: number;
  roundDiff: number;
  points: number;
};

export type BracketMatch = {
  round: "Quarterfinal" | "Semifinal" | "Grand final";
  a: string | null;
  b: string | null;
  scoreA?: number;
  scoreB?: number;
};

export type Tournament = {
  slug: string;
  name: string;
  game: string;
  status: TournamentStatus;
  format: string;
  startDate: string; // ISO
  endDate: string; // ISO
  dateLabel: string;
  venue: string;
  online: boolean;
  prizePool: number;
  slots: number;
  registered: number;
  entryFee: number;
  tier: Tier;
  photo: string;
  summary: string;
  prizes: { place: string; amount: number }[];
  schedule: { day: string; time: string; label: string }[];
  rules: string[];
  standings?: Standing[];
  bracket?: BracketMatch[];
  winner?: string;
};

export const tournaments: Tournament[] = [
  {
    slug: "voltra-invitational-s04",
    name: "Voltra Invitational S04",
    game: "hexfront",
    status: "open",
    format: "16 teams · groups then single elimination",
    startDate: "2026-12-12",
    endDate: "2026-12-14",
    dateLabel: "12 to 14 Dec 2026",
    venue: "Hall 3, Lahore",
    online: false,
    prizePool: 25000,
    slots: 16,
    registered: 13,
    entryFee: 40,
    tier: "orange",
    photo: "arena-crowd",
    summary:
      "Three days, one hall, sixteen teams. Groups on Friday, bracket on Saturday, the grand final on a full stage Sunday night.",
    prizes: [
      { place: "1st", amount: 12000 },
      { place: "2nd", amount: 6500 },
      { place: "3rd to 4th", amount: 2500 },
      { place: "5th to 8th", amount: 375 },
    ],
    schedule: [
      { day: "Fri 12 Dec", time: "10:00", label: "Check-in and badge pickup" },
      { day: "Fri 12 Dec", time: "12:00", label: "Group stage, rounds 1 to 3" },
      { day: "Sat 13 Dec", time: "11:00", label: "Quarterfinals" },
      { day: "Sat 13 Dec", time: "17:00", label: "Semifinals" },
      { day: "Sun 14 Dec", time: "19:30", label: "Grand final, main stage" },
    ],
    rules: [
      "Rosters lock 48 hours before check-in. One substitute allowed.",
      "All matches are best of three; the grand final is best of five.",
      "Players bring their own peripherals. Stations run tournament builds.",
      "Teams more than 15 minutes late forfeit the first map.",
    ],
    standings: [
      { team: "voltra", played: 3, won: 3, lost: 0, roundDiff: 21, points: 9 },
      { team: "ghostline", played: 3, won: 2, lost: 1, roundDiff: 8, points: 6 },
      { team: "northwind", played: 3, won: 1, lost: 2, roundDiff: -6, points: 3 },
      { team: "saltmarsh", played: 3, won: 0, lost: 3, roundDiff: -23, points: 0 },
    ],
    bracket: [
      { round: "Quarterfinal", a: "voltra", b: "lowtide" },
      { round: "Quarterfinal", a: "ghostline", b: "kilnhouse" },
      { round: "Quarterfinal", a: "papertigers", b: "northwind" },
      { round: "Quarterfinal", a: "brasshand", b: "saltmarsh" },
      { round: "Semifinal", a: null, b: null },
      { round: "Semifinal", a: null, b: null },
      { round: "Grand final", a: null, b: null },
    ],
  },
  {
    slug: "skyrift-campus-clash",
    name: "Skyrift Campus Clash",
    game: "skyrift",
    status: "live",
    format: "12 university teams · double elimination",
    startDate: "2026-11-09",
    endDate: "2026-11-16",
    dateLabel: "9 to 16 Nov 2026",
    venue: "Campus stage, Karachi",
    online: false,
    prizePool: 8000,
    slots: 12,
    registered: 12,
    entryFee: 0,
    tier: "cobalt",
    photo: "lan-hall",
    summary:
      "University teams, one week, a stage built in the student centre. Upper bracket finals are being played tonight.",
    prizes: [
      { place: "1st", amount: 4000 },
      { place: "2nd", amount: 2500 },
      { place: "3rd", amount: 1500 },
    ],
    schedule: [
      { day: "Mon 9 Nov", time: "16:00", label: "Opening round" },
      { day: "Wed 11 Nov", time: "18:00", label: "Upper bracket final" },
      { day: "Sat 14 Nov", time: "17:00", label: "Lower bracket final" },
      { day: "Mon 16 Nov", time: "19:00", label: "Grand final" },
    ],
    rules: [
      "Every player must hold a current student card.",
      "Draft uses tournament mode with global bans.",
      "Pauses are limited to five minutes per team per game.",
    ],
    standings: [
      { team: "ghostline", played: 4, won: 4, lost: 0, roundDiff: 7, points: 12 },
      { team: "papertigers", played: 4, won: 3, lost: 1, roundDiff: 4, points: 9 },
      { team: "kilnhouse", played: 4, won: 1, lost: 3, roundDiff: -3, points: 3 },
      { team: "lowtide", played: 4, won: 0, lost: 4, roundDiff: -8, points: 0 },
    ],
    bracket: [
      { round: "Semifinal", a: "ghostline", b: "kilnhouse", scoreA: 2, scoreB: 0 },
      { round: "Semifinal", a: "papertigers", b: "lowtide", scoreA: 2, scoreB: 1 },
      { round: "Grand final", a: "ghostline", b: "papertigers" },
    ],
  },
  {
    slug: "ironfist-night-cup-18",
    name: "Ironfist Night Cup #18",
    game: "ironfist",
    status: "open",
    format: "64 players · double elimination, online",
    startDate: "2026-11-22",
    endDate: "2026-11-22",
    dateLabel: "22 Nov 2026",
    venue: "Online, Asia servers",
    online: true,
    prizePool: 1500,
    slots: 64,
    registered: 41,
    entryFee: 5,
    tier: "amber",
    photo: "fps-player",
    summary:
      "The monthly fight night. Sign up, warm up, and play until you lose twice. Top eight are streamed on the Voltra channel.",
    prizes: [
      { place: "1st", amount: 750 },
      { place: "2nd", amount: 450 },
      { place: "3rd", amount: 300 },
    ],
    schedule: [
      { day: "Sun 22 Nov", time: "18:00", label: "Check-in closes" },
      { day: "Sun 22 Nov", time: "18:30", label: "Pools" },
      { day: "Sun 22 Nov", time: "22:00", label: "Top 8 on stream" },
    ],
    rules: [
      "First to two games, top 8 first to three.",
      "Stage select follows the loser picks rule.",
      "Report your score in the match room within five minutes.",
    ],
  },
  {
    slug: "dropzone-sunday-scrims",
    name: "Dropzone Sunday Scrims",
    game: "dropzone",
    status: "open",
    format: "25 squads · 5 matches, points race",
    startDate: "2026-11-15",
    endDate: "2026-11-15",
    dateLabel: "Every Sunday",
    venue: "Online, private lobbies",
    online: true,
    prizePool: 600,
    slots: 25,
    registered: 19,
    entryFee: 0,
    tier: "volt",
    photo: "squad-online",
    summary:
      "Free weekly scrims for squads that want real lobby practice. Placement and finishes both score.",
    prizes: [
      { place: "1st", amount: 300 },
      { place: "2nd", amount: 200 },
      { place: "3rd", amount: 100 },
    ],
    schedule: [
      { day: "Sun", time: "20:00", label: "Lobby opens" },
      { day: "Sun", time: "20:15", label: "Matches 1 to 5" },
    ],
    rules: [
      "Four players per squad, one substitute.",
      "Teaming with other squads gets you removed from the series.",
    ],
  },
  {
    slug: "pitch-kings-1v1-open",
    name: "Pitch Kings 1v1 Open",
    game: "pitchkings",
    status: "full",
    format: "128 players · single elimination, online",
    startDate: "2026-12-06",
    endDate: "2026-12-06",
    dateLabel: "6 Dec 2026",
    venue: "Online, cross-platform",
    online: true,
    prizePool: 2000,
    slots: 128,
    registered: 128,
    entryFee: 3,
    tier: "volt",
    photo: "lan-dim-room",
    summary: "One day, 128 players, no second chances. Registration is full; join the waitlist on match day.",
    prizes: [
      { place: "1st", amount: 1000 },
      { place: "2nd", amount: 600 },
      { place: "3rd to 4th", amount: 200 },
    ],
    schedule: [
      { day: "Sun 6 Dec", time: "15:00", label: "Round of 128" },
      { day: "Sun 6 Dec", time: "21:00", label: "Final" },
    ],
    rules: ["Two legs per round, aggregate score.", "Default squads only, no custom tactics files."],
  },
  {
    slug: "hexfront-womens-series",
    name: "Hexfront Women's Series",
    game: "hexfront",
    status: "open",
    format: "8 teams · round robin then final",
    startDate: "2027-01-17",
    endDate: "2027-01-18",
    dateLabel: "17 to 18 Jan 2027",
    venue: "Studio B, Islamabad",
    online: false,
    prizePool: 6000,
    slots: 8,
    registered: 5,
    entryFee: 20,
    tier: "cobalt",
    photo: "studio-purple",
    summary: "A two-day studio event with a broadcast desk, analyst segments, and a final played in front of a live audience.",
    prizes: [
      { place: "1st", amount: 3000 },
      { place: "2nd", amount: 2000 },
      { place: "3rd", amount: 1000 },
    ],
    schedule: [
      { day: "Sun 17 Jan", time: "12:00", label: "Round robin" },
      { day: "Mon 18 Jan", time: "18:00", label: "Final" },
    ],
    rules: ["Rosters of five plus one substitute.", "All matches best of one until the best of three final."],
  },
  {
    slug: "voltra-winter-gauntlet",
    name: "Voltra Winter Gauntlet",
    game: "skyrift",
    status: "finished",
    format: "8 teams · single elimination",
    startDate: "2026-11-01",
    endDate: "2026-11-02",
    dateLabel: "1 to 2 Nov 2026",
    venue: "Hall 1, Lahore",
    online: false,
    prizePool: 10000,
    slots: 8,
    registered: 8,
    entryFee: 30,
    tier: "orange",
    photo: "stage-spotlights",
    summary: "Voltra's own Skyrift squad took the title on home ground, 3 to 1 in the final.",
    winner: "voltra",
    prizes: [
      { place: "1st", amount: 5000 },
      { place: "2nd", amount: 3000 },
      { place: "3rd to 4th", amount: 1000 },
    ],
    schedule: [
      { day: "Sat 1 Nov", time: "13:00", label: "Quarterfinals" },
      { day: "Sun 2 Nov", time: "19:00", label: "Final" },
    ],
    rules: ["Best of three until the best of five final."],
    bracket: [
      { round: "Semifinal", a: "voltra", b: "brasshand", scoreA: 2, scoreB: 0 },
      { round: "Semifinal", a: "northwind", b: "ghostline", scoreA: 2, scoreB: 1 },
      { round: "Grand final", a: "voltra", b: "northwind", scoreA: 3, scoreB: 1 },
    ],
  },
  {
    slug: "ironfist-arena-masters",
    name: "Ironfist Arena Masters",
    game: "ironfist",
    status: "finished",
    format: "32 invited players · double elimination",
    startDate: "2026-10-18",
    endDate: "2026-10-18",
    dateLabel: "18 Oct 2026",
    venue: "Festival grounds, Lahore",
    online: false,
    prizePool: 4000,
    slots: 32,
    registered: 32,
    entryFee: 0,
    tier: "amber",
    photo: "festival-field",
    summary: "An open-air fighting game stage at a music festival. Ricochet won it from the losers bracket.",
    winner: "voltra",
    prizes: [
      { place: "1st", amount: 2000 },
      { place: "2nd", amount: 1200 },
      { place: "3rd", amount: 800 },
    ],
    schedule: [{ day: "Sun 18 Oct", time: "16:00", label: "Pools to final" }],
    rules: ["Invited players only."],
  },
];

export function tournamentBySlug(slug: string) {
  return tournaments.find((t) => t.slug === slug);
}

export type MatchState = "live" | "upcoming" | "finished";

export type Match = {
  id: string;
  tournament: string; // slug
  game: string;
  home: string;
  away: string;
  state: MatchState;
  when: string;
  stage: string;
  scoreHome?: number;
  scoreAway?: number;
};

export const matches: Match[] = [
  {
    id: "m1",
    tournament: "skyrift-campus-clash",
    game: "skyrift",
    home: "ghostline",
    away: "papertigers",
    state: "live",
    when: "Tonight, 18:00",
    stage: "Upper bracket final",
    scoreHome: 1,
    scoreAway: 1,
  },
  {
    id: "m2",
    tournament: "voltra-invitational-s04",
    game: "hexfront",
    home: "voltra",
    away: "lowtide",
    state: "upcoming",
    when: "Sat 13 Dec, 11:00",
    stage: "Quarterfinal",
  },
  {
    id: "m3",
    tournament: "voltra-winter-gauntlet",
    game: "skyrift",
    home: "voltra",
    away: "northwind",
    state: "finished",
    when: "Sun 2 Nov",
    stage: "Grand final",
    scoreHome: 3,
    scoreAway: 1,
  },
];

export type Player = {
  id: string;
  handle: string;
  name: string;
  role: "Entry" | "Support" | "Captain" | "Flex" | "Solo" | "Coach";
  game: string;
  tier: Tier;
  number: string;
  photo: string;
  focus: string; // CSS object-position for the ID crop
  joined: string;
  bio: string;
  stats: { label: string; value: string }[];
  captain?: boolean;
};

export const players: Player[] = [
  {
    id: "kestrel",
    handle: "Kestrel",
    name: "Hamza Rauf",
    role: "Captain",
    game: "hexfront",
    tier: "volt",
    number: "07",
    photo: "p-blue-hoodie",
    focus: "50% 22%",
    joined: "2023",
    bio: "Calls the plays and the timeouts. Has never lost a pistol round on LAN, and will tell you about it.",
    stats: [
      { label: "Rating", value: "1.21" },
      { label: "K/D", value: "1.34" },
      { label: "Headshot", value: "58%" },
      { label: "Maps", value: "212" },
    ],
    captain: true,
  },
  {
    id: "nyx",
    handle: "Nyx",
    name: "Sana Mir",
    role: "Entry",
    game: "hexfront",
    tier: "volt",
    number: "11",
    photo: "p-glasses-woman",
    focus: "55% 30%",
    joined: "2024",
    bio: "First through the door on every site. Plays fast, reads faster.",
    stats: [
      { label: "Rating", value: "1.17" },
      { label: "First kills", value: "0.19/r" },
      { label: "K/D", value: "1.22" },
      { label: "Maps", value: "164" },
    ],
  },
  {
    id: "tarmac",
    handle: "Tarmac",
    name: "Ayaan Shah",
    role: "Support",
    game: "hexfront",
    tier: "volt",
    number: "23",
    photo: "p-glasses-man",
    focus: "50% 22%",
    joined: "2023",
    bio: "Utility, trades and patience. The reason everyone else's numbers look good.",
    stats: [
      { label: "Rating", value: "1.04" },
      { label: "Assists", value: "6.1/m" },
      { label: "Flash hits", value: "1.9/r" },
      { label: "Maps", value: "209" },
    ],
  },
  {
    id: "halo",
    handle: "Halo",
    name: "Daniyal Ahmed",
    role: "Flex",
    game: "skyrift",
    tier: "volt",
    number: "04",
    photo: "p-beard-headphones",
    focus: "50% 32%",
    joined: "2025",
    bio: "Plays whatever the draft leaves open, and usually plays it best in the lobby.",
    stats: [
      { label: "KDA", value: "4.8" },
      { label: "Champions", value: "31" },
      { label: "Win rate", value: "64%" },
      { label: "Games", value: "388" },
    ],
  },
  {
    id: "ricochet",
    handle: "Ricochet",
    name: "Ali Zafar",
    role: "Solo",
    game: "ironfist",
    tier: "volt",
    number: "19",
    photo: "p-gamer-man",
    focus: "38% 24%",
    joined: "2022",
    bio: "Ironfist Arena Masters champion, won from the losers bracket without dropping a set.",
    stats: [
      { label: "Sets won", value: "142" },
      { label: "Win rate", value: "71%" },
      { label: "Titles", value: "6" },
      { label: "Main", value: "Kaida" },
    ],
  },
  {
    id: "vanta",
    handle: "Vanta",
    name: "Omar Farooq",
    role: "Coach",
    game: "hexfront",
    tier: "amber",
    number: "00",
    photo: "p-eyes-closed",
    focus: "50% 30%",
    joined: "2022",
    bio: "Fifteen years of competitive play, now behind the bench. Writes the playbook, burns it, writes it again.",
    stats: [
      { label: "Titles", value: "9" },
      { label: "Series", value: "120" },
      { label: "Map win", value: "61%" },
      { label: "Since", value: "2022" },
    ],
  },
];

export type ProductCategory = "Audio" | "Input" | "Seating" | "Passes";

export type Product = {
  id: string;
  name: string;
  line: string;
  category: ProductCategory;
  price: number;
  photo?: string;
  tier: Tier;
  stock: number;
  details: string;
};

export const products: Product[] = [
  {
    id: "season-pass",
    name: "Season 04 Pass",
    line: "All Voltra events, Dec to Mar",
    category: "Passes",
    price: 25,
    tier: "orange",
    stock: 500,
    details: "Priority check-in at every Voltra LAN this season, plus the physical lanyard and badge.",
  },
  {
    id: "signal-headset",
    name: "Signal Headset",
    line: "Closed-back, detachable mic",
    category: "Audio",
    price: 129,
    photo: "g-headset",
    tier: "cobalt",
    stock: 24,
    details: "50mm drivers, memory foam cups, a mic that snaps off for travel.",
  },
  {
    id: "talon-mouse",
    name: "Talon Mouse",
    line: "58g, wireless",
    category: "Input",
    price: 59,
    photo: "g-mouse",
    tier: "volt",
    stock: 40,
    details: "Light shell, quiet switches, 90 hours per charge.",
  },
  {
    id: "volt-75",
    name: "Volt 75 Keyboard",
    line: "75%, hot-swap switches",
    category: "Input",
    price: 149,
    photo: "g-keyboard",
    tier: "volt",
    stock: 12,
    details: "Gasket mount, PBT caps, ships with linear switches.",
  },
  {
    id: "throne-chair",
    name: "Throne Chair",
    line: "Steel frame, 4D arms",
    category: "Seating",
    price: 329,
    photo: "g-chair",
    tier: "orange",
    stock: 0,
    details: "The same chair on our stage. Restocks with the next drop.",
  },
  {
    id: "caster-mic",
    name: "Caster Mic",
    line: "Dynamic, boom arm included",
    category: "Audio",
    price: 99,
    photo: "g-mic",
    tier: "amber",
    stock: 18,
    details: "Built for loud rooms. Rejects keyboard noise, keeps your voice.",
  },
  {
    id: "ember-tkl",
    name: "Ember TKL",
    line: "Tenkeyless, tactile switches",
    category: "Input",
    price: 119,
    photo: "g-keyboard-orange",
    tier: "amber",
    stock: 9,
    details: "Compact frame, braided cable, tactile bump you can feel at 2am.",
  },
  {
    id: "pad-controller",
    name: "Pad Controller",
    line: "Wireless, remappable back paddles",
    category: "Input",
    price: 69,
    photo: "g-controller",
    tier: "cobalt",
    stock: 22,
    details: "For the fighting and football crowd. Back paddles remap without software.",
  },
];

export function productById(id: string) {
  return products.find((p) => p.id === id);
}

export const event = {
  name: "Voltra Invitational",
  season: "S04",
  city: "Lahore",
  dates: "12 to 14 Dec 2026",
  serial: "VLT-S04-AA-0001",
};

export const money = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
