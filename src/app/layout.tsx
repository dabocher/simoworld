import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Racing_Sans_One } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const racing = Racing_Sans_One({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "SimoWorld",
  description: "El planificador para SimRacers",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
