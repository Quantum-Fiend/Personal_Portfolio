import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/Components/layouts/header";
import SocialBar from "@/Components/ui/SocialBar";
import SplashCursor from "@/Components/ui/SplashCursor";
import Footer from "@/Components/layouts/footer";
import ShootingStarsBackground from "@/Components/ui/ShootingStarEffect";
import ScrollToTop from "@/Components/ui/ScrollTop";

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PortFolio | Tushar Singh",
  description: "PortFolio App 🤗",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${funnelSans.variable} h-full antialiased`}>
      <body className="font-sans">
        {/* BACKGROUND LAYER (ALWAYS FIRST) */}
        <ShootingStarsBackground />

        {/* APP LAYER */}
        <div id="app-root">
          <Header />
          <SplashCursor />
          <SocialBar />

          <main>{children}</main>

          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
