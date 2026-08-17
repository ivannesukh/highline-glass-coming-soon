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
  title: "Highline Glass Group — Coming Soon",
  description:
    "Highline Glass Group is a new architectural glass and glazing company. Storefronts, curtain walls, railings, and custom glazing — launching soon at highlineglassgroup.com.",
  metadataBase: new URL("https://highlineglassgroup.com"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Highline Glass Group — Coming Soon",
    description:
      "Architectural glass and glazing, set to the line. Launching soon.",
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
