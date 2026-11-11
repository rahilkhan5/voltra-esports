// SVG filters that print every photo in arena black plus one tier ink.
const black = [0.059, 0.063, 0.071];
const inks: Record<string, number[]> = {
  orange: [1, 0.294, 0.122],
  volt: [0.784, 0.941, 0.192],
  cobalt: [0.169, 0.424, 1],
  amber: [1, 0.69, 0],
  laminate: [0.957, 0.945, 0.918],
};

export function DuotoneDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
      <defs>
        {Object.entries(inks).map(([name, ink]) => (
          <filter key={name} id={`duo-${name}`} colorInterpolationFilters="sRGB">
            {/* Even channel weights so blue and magenta stage light do not collapse to black. */}
            <feColorMatrix
              type="matrix"
              values="0.36 0.44 0.2 0 0  0.36 0.44 0.2 0 0  0.36 0.44 0.2 0 0  0 0 0 1 0"
            />
            {name === "laminate" ? (
              // Portraits: lift the shadows so dark, coloured studio light still reads as a face.
              <feComponentTransfer>
                <feFuncR type="gamma" amplitude="1.08" exponent="0.55" offset="0.02" />
                <feFuncG type="gamma" amplitude="1.08" exponent="0.55" offset="0.02" />
                <feFuncB type="gamma" amplitude="1.08" exponent="0.55" offset="0.02" />
              </feComponentTransfer>
            ) : (
              <feComponentTransfer>
                <feFuncR type="gamma" amplitude="1.15" exponent="0.8" offset="-0.02" />
                <feFuncG type="gamma" amplitude="1.15" exponent="0.8" offset="-0.02" />
                <feFuncB type="gamma" amplitude="1.15" exponent="0.8" offset="-0.02" />
              </feComponentTransfer>
            )}
            <feComponentTransfer>
              <feFuncR type="table" tableValues={`${black[0]} ${ink[0]}`} />
              <feFuncG type="table" tableValues={`${black[1]} ${ink[1]}`} />
              <feFuncB type="table" tableValues={`${black[2]} ${ink[2]}`} />
            </feComponentTransfer>
          </filter>
        ))}
      </defs>
    </svg>
  );
}
