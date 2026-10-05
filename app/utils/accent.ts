export type Accent = "emerald" | "sky";

// Full class names are required so Tailwind can detect them at build time.
export const accentClasses: Record<Accent, { text: string; link: string }> = {
  emerald: {
    text: "text-emerald-300",
    link: "text-emerald-300 hover:text-emerald-200",
  },
  sky: {
    text: "text-sky-300",
    link: "text-sky-300 hover:text-sky-200",
  },
};
