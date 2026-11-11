import Link from "next/link";
import { Barcode } from "@/components/Barcode";

export default function NotFound() {
  return (
    <div className="wrap grid min-h-[70dvh] place-items-center py-20">
      <div className="laminate relative w-full max-w-sm rounded-[18px] p-6 text-center">
        <div className="slot mx-auto mb-5" />
        <p className="meta text-ink-soft">Error 404</p>
        <p className="display mt-2 text-6xl">Pass not found</p>
        <span className="stamp mt-5 inline-block text-5xl text-orange">Void</span>
        <p className="mt-5 text-sm leading-relaxed text-ink-soft">
          This page does not exist, or the pass has expired. Head back and pick another door.
        </p>
        <Barcode value="VOID-404" height={28} className="mx-auto mt-5 h-7 w-40 text-ink" />
        <Link href="/" className="mt-6 inline-flex rounded-md bg-ink px-5 py-3 text-sm font-semibold text-laminate">
          Back to the start
        </Link>
      </div>
    </div>
  );
}
