import type { Tier } from "./data";

export const inkHex: Record<Tier, string> = {
  orange: "#ff4b1f",
  volt: "#c8f031",
  cobalt: "#2b6cff",
  amber: "#ffb000",
};

/** Text colour that stays legible on top of each ink band. */
export const onInk: Record<Tier, string> = {
  orange: "#0f1012",
  volt: "#0f1012",
  cobalt: "#f4f1ea",
  amber: "#0f1012",
};

export const tierLabel: Record<Tier, string> = {
  orange: "All access",
  volt: "Player",
  cobalt: "Press",
  amber: "Staff",
};

export const bg: Record<Tier, string> = {
  orange: "bg-orange",
  volt: "bg-volt",
  cobalt: "bg-cobalt",
  amber: "bg-amber",
};

export const text: Record<Tier, string> = {
  orange: "text-orange",
  volt: "text-volt",
  cobalt: "text-cobalt",
  amber: "text-amber",
};
