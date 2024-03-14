import "@/styles/globals.css";
import { Manrope as FontSans } from "next/font/google";

import MainHeader from "@/components/layout/header";
import MobileHeader from "@/components/layout/mobile-header";
import PageLoading from "@/components/page-loading";
import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";
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
        <NextTopLoader
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={50}
          zIndex={1600}
          showAtBottom={false}
          color="hsl(25, 100%, 50%)"
        />
        <PageLoading />
        <MainHeader />
        <MobileHeader />
        {children}
      </body>
    </html>
  );
}
