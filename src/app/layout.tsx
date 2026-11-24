import { Geist } from "next/font/google";
import SideBar from "@/components/Sidebar";
import type { Metadata } from "next";
import "./globals.css";

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
    >
      <body className="min-h-full flex justify-center bg-background font-sans">
        <div className="min-w-11/12 rounded-4xl bg-surface flex justify-between items-center overflow-hidden">
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  );
}
