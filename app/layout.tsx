import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "Odar Confirmation Studio",
  description: "Generate multilingual order confirmation call scripts across Indian state languages."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} min-h-screen`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
