/** Deterministic barcode drawn from a serial string, so every badge and ticket has its own. */
export function Barcode({
  value,
  height = 36,
  className,
}: {
  value: string;
  height?: number;
  className?: string;
}) {
  const bars: { x: number; w: number }[] = [];
  let x = 0;
  // Guard bars
  const push = (w: number, gap: number) => {
    bars.push({ x, w });
    x += w + gap;
  };
  push(1, 1);
  push(1, 2);
  for (let i = 0; i < value.length; i++) {
    const c = value.charCodeAt(i);
    push(1 + (c % 3), 1 + ((c >> 2) % 2));
    push(1 + ((c >> 1) % 2), 1 + ((c >> 3) % 3));
    push(1 + ((c >> 4) % 3), 1);
  }
  push(1, 1);
  push(1, 0);
  const width = x;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={className}
      role="img"
      aria-label={`Barcode ${value}`}
    >
      {bars.map((b, i) => (
        <rect key={i} x={b.x} y={0} width={b.w} height={height} fill="currentColor" />
      ))}
    </svg>
  );
}
