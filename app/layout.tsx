import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Plane Scape | Home",
  description: "Welcome",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link
          rel="first"
          href="https://api.schiphol.nl/public-flights/flights?app_id=4b3b8aff&app_key=4b11374519c4e7893130cdca97923492"
        />
        <link
          rel="prev"
          href="https://api.schiphol.nl/public-flights/flights?app_id=4b3b8aff&app_key=4b11374519c4e7893130cdca97923492&page=1"
        />
        <link
          rel="next"
          href="https://api.schiphol.nl/public-flights/flights?app_id=4b3b8aff&app_key=4b11374519c4e7893130cdca97923492&page=3"
        />
        <link
          rel="last"
          href="https://api.schiphol.nl/public-flights/flights?app_id=4b3b8aff&app_key=4b11374519c4e7893130cdca97923492&page=155"
        /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary text-tertiary`}
      >
        <Navigation />
        <div className="mx-auto px-6 pb-24 pt-16 md:px-6 md:pt-6">
          {children}
        </div>
      </body>
    </html>
  );
}
