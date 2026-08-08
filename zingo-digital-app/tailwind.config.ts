import type { Config } from 'tailwindcss';

// Extends Tailwind with the ported design tokens (see globals.css).
// Component library in src/components/ui should consume these instead of
// raw hex values so the identity stays centralized.
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#101109',
        paper: '#FBFBF6',
        lime: { DEFAULT: '#D7FF3A', dim: '#AEDA1E', deep: '#8FB800' },
        charcoal: { DEFAULT: '#1B1C15', soft: '#24261C' },
        grey: '#6E7062',
        line: '#DEE0D0',
        mint: '#F4FFDE',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        // Arabic-supporting pairing (ARCHITECTURE.md §10)
        'display-ar': ['"IBM Plex Sans Arabic"', 'sans-serif'],
        'body-ar': ['"IBM Plex Sans Arabic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
