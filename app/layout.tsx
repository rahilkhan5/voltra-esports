import type { Metadata, Viewport } from "next";
import { Archivo, Big_Shoulders, Martian_Mono } from "next/font/google";
import { DuotoneDefs } from "@/components/DuotoneDefs";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StoreProvider } from "@/lib/store";
import "./globals.css";

const display = Big_Shoulders({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-big-shoulders",
  display: "swap",
});

const sans = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const mono = Martian_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-martian",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Voltra · Esports organisation (demo)",
    template: "%s · Voltra",
  },
  description:
    "Voltra is a fictional esports organisation: tournaments, roster and merch. A design demo built with Next.js by Rahil Khan.",
  metadataBase: new URL("https://rahilkhan5.github.io/voltra-esports/"),
  openGraph: {
    type: "website",
    siteName: "Voltra",
    title: "Voltra · Esports organisation (demo)",
    description: "Every screen is a printed event pass. Tournaments, brackets, a flippable roster and a merch shop. A design demo by Rahil Khan.",
    url: "https://rahilkhan5.github.io/voltra-esports/",
    images: [
      {
        url: "https://rahilkhan5.github.io/voltra-esports/og.jpg",
        width: 1200,
        height: 630,
        alt: "Voltra home page: headline Your pass to the next round beside an all access lanyard badge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voltra · Esports organisation (demo)",
    description: "Every screen is a printed event pass. A design demo by Rahil Khan.",
    images: ["https://rahilkhan5.github.io/voltra-esports/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1012",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="min-h-dvh bg-arena text-laminate antialiased">
        <DuotoneDefs />
        <StoreProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-volt focus:px-4 focus:py-2 focus:text-ink"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </StoreProvider>
      </body>
    </html>
  );
}
