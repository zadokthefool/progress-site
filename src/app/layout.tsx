import type { Metadata } from "next";
import "./globals.css";
import { ThemeRegistry } from "./theme/theme-registry";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "PROGRESS",
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
        <div className="layout-container">
          <ThemeRegistry>{children}</ThemeRegistry>
        </div>
      </body>
    </html>
  );
}
