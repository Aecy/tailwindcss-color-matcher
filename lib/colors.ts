interface TailwindColor {
  name: string;
  shades: { [key: string]: string };
}

export const tailwindColors: TailwindColor[] = [
  {
    name: "slate",
    shades: {
      "50": "#f8fafc",
      "100": "#f1f5f9",
      "200": "#e2e8f0",
      "300": "#cbd5e1",
      "400": "#94a3b8",
      "500": "#64748b",
      "600": "#475569",
      "700": "#334155",
      "800": "#1e293b",
      "900": "#0f172a",
      "950": "#020617"
    }
  },
  {
    name: "gray",
    shades: {
      "50": "#f9fafb",
      "100": "#f3f4f6",
      "200": "#e5e7eb",
      "300": "#d1d5db",
      "400": "#9ca3af",
      "500": "#6b7280",
      "600": "#4b5563",
      "700": "#374151",
      "800": "#1f2937",
      "900": "#111827",
      "950": "#030712"
    }
  },
  {
    name: "zinc",
    shades: {
      "50": "#fafafa",
      "100": "#f4f4f5",
      "200": "#e4e4e7",
      "300": "#d4d4d8",
      "400": "#a1a1aa",
      "500": "#71717a",
      "600": "#52525b",
      "700": "#3f3f46",
      "800": "#27272a",
      "900": "#18181b",
      "950": "#09090b",
    },
  },
  {
    name: "red",
    shades: {
      "50": "#fef2f2",
      "100": "#fee2e2",
      "200": "#fecaca",
      "300": "#fca5a5",
      "400": "#f87171",
      "500": "#ef4444",
      "600": "#dc2626",
      "700": "#b91c1c",
      "800": "#991b1b",
      "900": "#7f1d1d",
      "950": "#450a0a"
    }
  },
  {
    name: "blue",
    shades: {
      "50": "#eff6ff",
      "100": "#dbeafe",
      "200": "#bfdbfe",
      "300": "#93c5fd",
      "400": "#60a5fa",
      "500": "#3b82f6",
      "600": "#2563eb",
      "700": "#1d4ed8",
      "800": "#1e40af",
      "900": "#1e3a8a",
      "950": "#172554"
    }
  }
];

export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function findClosestTailwindColor(hex: string): { colorName: string; shade: string; hex: string } | null {
  const inputRgb = hexToRgb(hex);
  if (!inputRgb) return null;

  let closestColor = {
    colorName: "",
    shade: "",
    hex: "",
    distance: Infinity
  };

  tailwindColors.forEach((color) => {
    Object.entries(color.shades).forEach(([shade, shadeHex]) => {
      const shadeRgb = hexToRgb(shadeHex);
      if (!shadeRgb) return;

      const distance = Math.sqrt(
        Math.pow(inputRgb.r - shadeRgb.r, 2) +
        Math.pow(inputRgb.g - shadeRgb.g, 2) +
        Math.pow(inputRgb.b - shadeRgb.b, 2)
      );

      if (distance < closestColor.distance) {
        closestColor = {
          colorName: color.name,
          shade,
          hex: shadeHex,
          distance
        };
      }
    });
  });

  return {
    colorName: closestColor.colorName,
    shade: closestColor.shade,
    hex: closestColor.hex
  };
}