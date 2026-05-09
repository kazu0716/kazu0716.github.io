import { profile } from "../data/resume";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-dashed border-ink-3 px-[clamp(20px,4vw,40px)] pb-10 pt-6 text-center">
      <p className="m-0 inline-flex flex-wrap justify-center gap-2.5 font-mono text-[0.78rem] text-cream-4">
        <span>
          © {year} {profile.name}
        </span>
        <span>·</span>
        <span>Built with Astro, React &amp; Tailwind</span>
      </p>
    </footer>
  );
}
