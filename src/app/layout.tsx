import type { Metadata } from "next";
import { Oswald, Inter, Geist } from "next/font/google";
import "./globals.css";
import Navber from "@/components/shared/Navber";
import Footer from "@/components/shared/Footer";
import PlanSaveContext from "@/contextApi/PlanSaveContext";
import { ToastContainer } from "react-toastify";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const OswaldFont = Oswald({
  variable: "--font-Oswald",
  subsets: ["latin"]
})
const InterFont = Inter({
  variable: "--font-Inter",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "FitLog-A6 Website",
  description: "This is FitLog-A6 Website. A modern and responsive workout library web application built with Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={cn("h-full", "antialiased", OswaldFont.variable, InterFont.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <PlanSaveContext>
          <Navber />
          <main className="flex-1">{children}</main>
          <Footer />
          <ToastContainer  autoClose={1000}/>
        </PlanSaveContext>
      </body>
    </html>
  );
}
