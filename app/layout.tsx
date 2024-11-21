import './globals.css';
import type {Metadata} from 'next';
import {Space_Grotesk, Bricolage_Grotesque} from 'next/font/google';
import Footer from "@/components/footer";
import {cn} from "@/lib/utils";
import React from "react";

const spaceGrotesk = Space_Grotesk({subsets: ['latin']});
const bricolageGrotesque = Bricolage_Grotesque({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'TailwindCSS Color Matcher',
  description: 'Get easily the tailwindcss color from hexadecimal color',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={cn(`${bricolageGrotesque.className}`, 'min-h-screen flex flex-col bg-gradient-to-br from-slate-100 to-slate-200')}>
    <div className="flex-grow">
      {children}
    </div>
    <Footer/>
    </body>
    </html>
  );
}