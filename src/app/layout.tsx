import "@/styles/globals.css";
import { Manrope as FontSans } from "next/font/google";

import MainHeader from "@/components/layout/header";
import MobileHeader from "@/components/layout/mobile-header";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <MainHeader />
        <MobileHeader />
        {children}
      </body>
    </html>
  );
}
