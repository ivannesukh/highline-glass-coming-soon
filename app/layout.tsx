import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Highline Glass Group | Residential & Commercial Glass, Windows & Storefronts",
  description:
    "Highline Glass Group (HGG) designs, fabricates, and installs residential windows, shower enclosures, commercial glass paneling, partitions, and storefront systems. Free on-site estimates.",
  metadataBase: new URL("https://highlineglassgroup.com"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Highline Glass Group | Windows, Glass & Storefronts",
    description:
      "Residential windows, glass showers, commercial paneling, partitions, and storefront systems — precision glazing from HGG.",
    url: "https://highlineglassgroup.com",
    siteName: "Highline Glass Group",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
