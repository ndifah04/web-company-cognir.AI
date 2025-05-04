import { Inter } from "next/font/google";
import { twMerge } from 'tailwind-merge'
import "./globals.css";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cognir AI | Official Website",
  description: "Cognir Ai official website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "bg-black text-white antialiased")}>
        <div className="w-full">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}