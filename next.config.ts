import type { NextConfig } from "next";

// GitHub Pages serves the site from /voltra-esports. The deploy workflow sets PAGES=1.
const basePath = process.env.PAGES === "1" ? "/voltra-esports" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
