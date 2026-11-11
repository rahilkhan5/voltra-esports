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
