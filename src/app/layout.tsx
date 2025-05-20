import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Header } from "@layout";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Progress",
  description: "Progress party site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-montserrat`}>
        <Header />
        <div className="page-content">{children}</div>
      </body>
    </html>
  );
}
