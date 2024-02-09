import type { Metadata } from "next";
import { Aldrich } from "next/font/google";

import "./globals.css";
import { Footer } from "@/components";

const inter = Aldrich({ subsets: ["latin"], weight: "400" })


export const metadata: Metadata = {
  title: "Pendekin - URL Shortener",
  description: "Pendekin is a one stop tool to help you shorten a long link also track traffics of your shorten link",
  icons: `./favicon.ico`
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-slate-50 flex flex-col min-h-screen">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
