"use client";

import { Poppins, Inter } from "next/font/google";
import "../globals.css"; 
import Header from "@/components/layout/header";
import SideBar from "@/components/layout/sidebar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${poppins.variable} ${inter.variable} antialiased`}>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <SideBar />
        <main style={{ padding: "40px" }} className="w-full md:w-10/12 !pt-44 z-10 bg-[#e5e7eb]">
          {children} {/* 👈 This is where each page inside (dashboard) will be rendered */}
        </main>
      </div>
    </div>
  );
}
