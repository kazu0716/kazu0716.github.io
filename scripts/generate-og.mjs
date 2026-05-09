import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "..", "public", "og.png");

const W = 1200;
const H = 630;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="rgba(171, 178, 191, 0.08)" />
    </pattern>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#282c34" stop-opacity="0" />
      <stop offset="1" stop-color="#1c1f24" stop-opacity="1" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="#282c34" />
  <rect width="${W}" height="${H}" fill="url(#dots)" />
  <rect width="${W}" height="${H}" fill="url(#fade)" />

  <!-- Window chrome (terminal-style) -->
  <g transform="translate(80, 80)">
    <circle cx="0" cy="0" r="8" fill="#e06c75" />
    <circle cx="24" cy="0" r="8" fill="#e5c07b" />
    <circle cx="48" cy="0" r="8" fill="#98c379" />
  </g>

  <!-- Brand -->
  <g transform="translate(80, 150)" font-family="JetBrains Mono, ui-monospace, Menlo, monospace" font-size="20">
    <text fill="#98c379">$</text>
    <text x="20" fill="#abb2bf">kazu0716</text>
    <text x="118" fill="#98c379">_</text>
  </g>

  <!-- Name -->
  <text x="80" y="290" font-family="IBM Plex Sans, -apple-system, system-ui, sans-serif"
        font-size="92" font-weight="700" fill="#d7dae0" letter-spacing="-2">
    Kazuki Odo
  </text>

  <!-- Title -->
  <g transform="translate(80, 350)" font-family="IBM Plex Sans, -apple-system, system-ui, sans-serif" font-size="32">
    <text fill="#9da5b4">Staff Software Engineer</text>
    <text x="370" fill="#5c6370">·</text>
    <text x="395" fill="#61afef">MLOps / Infrastructure</text>
  </g>

  <!-- Tags -->
  <g transform="translate(80, 425)" font-family="JetBrains Mono, ui-monospace, monospace" font-size="20">
    <g>
      <rect x="0" y="0" width="160" height="36" rx="18" fill="#2c313a" stroke="#3e4451"/>
      <text x="80" y="23" fill="#9da5b4" text-anchor="middle">Turing, Inc.</text>
    </g>
    <g transform="translate(176, 0)">
      <rect x="0" y="0" width="170" height="36" rx="18" fill="#2c313a" stroke="#3e4451"/>
      <text x="85" y="23" fill="#9da5b4" text-anchor="middle">Tokyo Area, Japan</text>
    </g>
    <g transform="translate(362, 0)">
      <rect x="0" y="0" width="130" height="36" rx="18" fill="#2c313a" stroke="#3e4451"/>
      <text x="65" y="23" fill="#9da5b4" text-anchor="middle">13+ years</text>
    </g>
  </g>

  <!-- Bottom URL -->
  <text x="80" y="555" font-family="JetBrains Mono, ui-monospace, monospace" font-size="22" fill="#5c6370">
    kazu0716.github.io
  </text>

  <!-- Right-side accent block -->
  <g transform="translate(${W - 240}, ${H - 240})">
    <rect width="160" height="160" rx="28" fill="#1c1f24" stroke="#3e4451" />
    <text x="80" y="115" font-family="JetBrains Mono, ui-monospace, monospace"
          font-size="100" font-weight="700" fill="#61afef" text-anchor="middle">K</text>
  </g>
</svg>
`;

await sharp(Buffer.from(svg)).png().toFile(outPath);
console.log("Generated:", outPath);
