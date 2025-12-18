import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Garuda Sukses Raya Property | Tanah Kavling Eksklusif",
  description:
    "Investasi aset abadi. Tanah kavling premium dengan lokasi strategis dan legalitas terjamin. Hubungi Abi untuk konsultasi privat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${outfit.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
