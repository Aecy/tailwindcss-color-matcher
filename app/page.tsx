"use client";

import React, {useState} from "react";
import {findClosestTailwindColor, generateShades, hexToHsl, hslToHex} from "@/lib/colors";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {CheckCheckIcon, ClipboardPlus, Search} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [hexColor, setHexColor] = useState("");
  const [result, setResult] = useState<{
    colorName: string;
    shade: string;
    hex: string;
  } | null>(null);
  const [newPalette, setNewPalette] = useState<any | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const closest = findClosestTailwindColor(hexColor);

    if (closest) {
      const hsl = hexToHsl(hexColor);
      const newShades = generateShades(hsl);

      const newPalette = {
        name: 'custom',
        shades: JSON.stringify(newShades)
      };

      setNewPalette(newPalette);
    }

    setResult(closest);
  };

  const copyPalette = () => {
    setCopied(true);

    const formattedPalette = `
      custom: {
        ${Object.entries(JSON.parse(newPalette.shades))
          .map(([key, value]) => `"${key}": "${value}"`)
          .join(",\n  ")}
      }`.trim() + ',';

    if (newPalette) {
      navigator.clipboard.writeText(formattedPalette);

      setTimeout(() => {
        setCopied(false);
      }, 2500);
    }
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-md mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-6xl font-bold text-slate-900 dark:text-slate-100">
            Tailwind Color Matcher
          </h1>
          <p className="text-2xl text-slate-600 dark:text-slate-400">
            Enter a hex color to find the closest Tailwind CSS color, you can find <a
            href="https://tailwindcss.com/docs/customizing-colors#default-color-palette"
            className="underline">here</a> all default color palette of tailwindcss
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="hexColor">Hex Color</Label>
            <div className="relative">
              <Input
                id="hexColor"
                type="text"
                placeholder="#000000"
                value={hexColor}
                onChange={(e) => setHexColor(e.target.value)}
                className="pl-8"
                pattern="^#?([a-fA-F0-9]{6})$"
                title="Please enter a valid hex color (e.g., #FF0000)"
                required
              />
              <Search className="absolute left-2 top-2.5 h-5 w-5 text-slate-400"/>
            </div>
          </div>
        </form>

        {result && (
          <div
            className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-4 transform transition-all duration-300 ease-in-out opacity-0 scale-95"
            style={{ animation: "fadeIn 0.3s forwards" }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-lg shadow-inner"
                style={{ backgroundColor: result.hex }}
              />
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Closest Match
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  {result.colorName}-{result.shade}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500">
                  {result.hex}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="max-w-3xl mx-auto">
      {newPalette && (
          <div
            className="mt-8 bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-4 transform transition-all duration-300 ease-in-out opacity-0 scale-95"
            style={{ animation: "fadeIn 0.3s forwards" }}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Add new Color palette in Tailwind Config?
              </h2>
              <Button size="sm" disabled={copied} className="transition-all duration-75" onClick={copyPalette}>
                {copied ? (
                  <>
                    Copied to clipboard
                    <CheckCheckIcon size={18} />
                  </>
                ) : (
                  <>
                    Copy
                    <ClipboardPlus size={18} />
                  </>
                )}
              </Button>
            </div>
            <div className="grid grid-cols-8 gap-x-2">
              {Object.entries(JSON.parse(newPalette.shades)).map(([key, value]) => (
                <div key={key} className="relative flex">
                  <div className="flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                    <div
                      className="h-16 w-auto rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                      style={{ backgroundColor: value as string }}
                    >
                    </div>
                    <div className="px-0.5">
                      <div className="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
                        {key}
                      </div>
                      <div className="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                        {hslToHex(value as string)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}