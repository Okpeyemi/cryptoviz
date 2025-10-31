import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { LoaderProvider } from "@/contexts/LoaderContext";
import DashboardSidebar from "@/components/DashboardSidebar";
import MainContent from "@/components/MainContent";
import { ThemeProvider } from "@/components/ThemeProvider";
import BottomNav from "@/components/BottomNav";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CryptoViz - Dashboard Crypto",
  description: "Dashboard d'analyse de cryptomonnaies et actualités",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${workSans.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoaderProvider>
            <SidebarProvider>
              <DashboardSidebar />
              <MainContent>{children}</MainContent>
              <BottomNav />
            </SidebarProvider>
          </LoaderProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
