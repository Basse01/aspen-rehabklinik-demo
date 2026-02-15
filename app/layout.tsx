import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stockholm Rehab | AI Journalassistent",
  description: "Effektivisera din journalföring med AI - Stockholms Kiropraktor & Rehabklinik",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
