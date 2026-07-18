import type { Metadata } from "next";
import { Anton, Space_Mono, Rubik_Dirt } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const rubikDirt = Rubik_Dirt({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rubik-dirt",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "KHAJE'STUDIO | Solusi Digital & Akademik Terbaikmu",
  description: "Built Not Designed.",
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${spaceMono.variable} ${rubikDirt.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col font-body-md bg-background text-on-surface pt-[88px] md:pt-[96px]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
