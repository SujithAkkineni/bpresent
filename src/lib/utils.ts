import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Deterministic 0–1 float (same on server and client). */
export function seeded(index: number, channel = 0): number {
  const x = Math.sin((index + 1) * 12.9898 + channel * 78.233) * 43758.5453
  return x - Math.floor(x)
}

export function seededRange(
  index: number,
  channel: number,
  min: number,
  max: number
): number {
  return min + seeded(index, channel) * (max - min)
}
