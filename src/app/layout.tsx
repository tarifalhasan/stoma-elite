import "@/styles/globals.css";
import { Manrope as FontSans } from "next/font/google";

import Footer from "@/components/layout/Footer";
import MainHeader from "@/components/layout/header";
import MobileHeader from "@/components/layout/mobile-header";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Stoma Elite",
    template: `%s | Stoma Elite`,
  },
  description:
    "Am creat o clinică stomatologică pe baza unui singur principiu: înțelegerea sănătății orale din perspectiva pacientului. Am construit o echipă talentată, am echipat fiecare cabinet și am pus bazele modului de funcționare astfel încât serviciile noastre răspund întocmai nevoilor pacienților – pe termen atât scurt, cât și lung.",
  verification: {
    google:
      "google-site-verification=gfhLH8SIZqE4f0eVC8AX_IrSG2uL4UNK6YroEVIQ5rk",
  },
  icons: "/fevicon.svg",
  openGraph: {
    images: "/images/og.png",
  },
};

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

        <MainHeader />
        <MobileHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
