import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "BRLANT | Events, Exhibitions & Experiences",
  description:
    "BRLANT is a Saudi events and experiences company specializing in event management, exhibitions, conferences, production, operations, staffing, and guest experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
