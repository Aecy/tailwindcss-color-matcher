import React from "react";
import type {Metadata} from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'About - TailwindCSS Color Matcher',
  description: 'TailwindCSS Color Matcher is a simple web application that lets you easily find a tailwindcss colour class with a given hexadecimal.',
  openGraph: {
    title: 'About - TailwindCSS Color Matcher',
    description: 'TailwindCSS Color Matcher is a simple web application that lets you easily find a tailwindcss colour class with a given hexadecimal.',
  }
};

export default function Page() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold text-slate-900 dark:text-slate-100">
            About
          </h1>
          <p className="text-2xl text-slate-600 dark:text-slate-400">
            TailwindCSS Color Matcher is a simple web application that lets you easily find a tailwindcss colour class
            with a given hexadecimal.
          </p>
        </div>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Why did I make this?
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            As a software engineer, I'm regularly asked to come up with ideas for my clients. To do this, I draw on a
            multitude of online resources.<br/><br/>
            However, I often ran into a problem during my research: when I was looking for inspiration on the internet,
            I systematically came across hexadecimal codes (for example, #FF0000), which made it difficult to find the
            corresponding colour in Tailwind for my client. This meant that I had to manually extract the HEX codes via
            the CSS inspector, a time-consuming and impractical method. <br/><br/>
            It was to solve this problem that I decided to create this site! <br/><br/>
            For this project, I used <span
            className="bg-blue-600 text-white px-2 py-0.5 inline-block -skew-y-3">TypeScript</span>
            , <span className="bg-zinc-950 text-white px-2 py-0.5 inline-block -skew-y-3">Next.js</span> and <span className="bg-tailwind text-white px-2 py-0.5 inline-block -skew-y-3">TailwindCSS</span>, which allowed me to simplify development and
            deploy quickly thanks to <Link href="https://vercel.com/" className="underline" target="_blank">Vercel</Link>.
          </p>
        </div>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Open source
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            This project is open-source on <Link href="https://github.com/Aecy/tailwindcss-color-matcher" className="underline" target="_blank">GitHub</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}