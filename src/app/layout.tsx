import { Geist } from "next/font/google";
import SideBar from "@/components/Sidebar";
import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist"
})

export const metadata: Metadata = {
  title: "Task Overflow",
  description: "An app made to manage your confusing tasks.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full ${geist.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex justify-center bg-background font-sans theme-colors">
        <ThemeProvider>
          <div className="min-w-full rounded-4xl bg-surface flex justify-between items-center overflow-hidden shadow-2xl shadow-black theme-colors">
            <SideBar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
