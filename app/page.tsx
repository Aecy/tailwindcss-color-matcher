"use client";

import React, {useState} from "react";
import {findClosestTailwindColor} from "@/lib/colors";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Search} from "lucide-react";

export default function Home() {
  const [hexColor, setHexColor] = useState("");
  const [result, setResult] = useState<{
    colorName: string;
    shade: string;
    hex: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const closest = findClosestTailwindColor(hexColor);
    setResult(closest);
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
            className="underline">here</a> all default color
            palette of tailwindcss
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
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-4">
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-lg shadow-inner"
                style={{backgroundColor: result.hex}}
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
    </div>
  );
}