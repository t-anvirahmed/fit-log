import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import { PlanProvider } from "@/context/PlanContext";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FITLOG",
  description: "fitlog home",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <PlanProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </PlanProvider>
      </body>
    </html>
  );
}
