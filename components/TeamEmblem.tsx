import type { Team } from "@/lib/data";
import { inkHex } from "@/lib/ink";

const shapes: Record<Team["shape"], string> = {
  hex: "M24 2 44 13.5v21L24 46 4 34.5v-21L24 2Z",
  shield: "M24 3 42 9v14c0 11-8 19-18 22C14 42 6 34 6 23V9l18-6Z",
  circle: "M24 3a21 21 0 1 1 0 42 21 21 0 0 1 0-42Z",
  diamond: "M24 2 46 24 24 46 2 24 24 2Z",
};

/** Original geometric team crest: shape plus three-letter code, printed in the team's ink. */
export function TeamEmblem({ team, size = 48 }: { team: Team; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" role="img" aria-label={`${team.name} crest`}>
      <path d={shapes[team.shape]} fill={inkHex[team.ink]} />
      <path d={shapes[team.shape]} fill="none" stroke="#0f1012" strokeWidth="2.5" transform="translate(4.8 4.8) scale(0.8)" />
      <text
        x="24"
        y="29"
        textAnchor="middle"
        fontFamily="var(--font-big-shoulders), sans-serif"
        fontWeight="900"
        fontSize="14"
        fill="#0f1012"
      >
        {team.short}
      </text>
    </svg>
  );
}
