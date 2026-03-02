import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Animalink — Tales of Furrapest",
  description: "AI companions with real personalities, persistent memory, and an evolving universe. Meet the residents of Furrapest.",
  icons: {
    icon: "/favicon.ico",           // Navegador
    shortcut: "/icon.png",          // Atajos
    apple: "/apple-icon.png",       // iOS/Safari
  },
  openGraph: {
    title: "Animalink — Tales of Furrapest",
    description: "Where living characters remember you, grow with you, and carry their own secrets.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
