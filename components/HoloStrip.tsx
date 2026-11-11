/**
 * Static holographic security strip with microprint, for stubs that do not track the pointer.
 * The conic centre sits below the strip so the colours sweep across it as one rainbow, never a hard split.
 */
export function HoloStrip({ code, className = "" }: { code: string; className?: string }) {
  return (
    <div
      className={`holo relative h-7 overflow-hidden rounded-md ${className}`}
      style={{ ["--hx" as string]: "50%", ["--hy" as string]: "150%", ["--ha" as string]: "30deg" }}
      aria-hidden="true"
    >
      <div className="holo-sheen" style={{ ["--hx" as string]: "38%" }} />
      <div className="meta absolute inset-0 flex items-center gap-4 overflow-hidden px-3 whitespace-nowrap text-ink/60">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i}>Genuine · Voltra · {code}</span>
        ))}
      </div>
    </div>
  );
}
