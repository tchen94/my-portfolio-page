import type { Metadata } from "next";
import { Sen, Kode_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const sen = Sen({
  variable: "--font-sen",
  subsets: ["latin"],
});

const kode_mono = Kode_Mono({
  variable: "--font-kode-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tim Chen",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sen.variable} ${kode_mono.variable} antialiased`}
    >
      <body className="flex flex-col min-h-svh justify-between font-[family-name:var(--font-sen)]">
        <NavBar />
        <main className="grow">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
