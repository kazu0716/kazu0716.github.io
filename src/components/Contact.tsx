import Section from "./Section";
import { profile } from "../data/resume";

export default function Contact() {
  const links = [
    profile.links.linkedin,
    profile.links.github,
    profile.links.x,
  ];

  return (
    <Section id="contact" title="Contact" className="pb-20">
      <p className="mb-2 max-w-[60ch] text-cream-2">
        Open to conversations about ML platforms, Infrastructure, SRE and
        Software development.
      </p>
      <p className="mb-5 max-w-[60ch] font-mono text-[0.85rem] text-cream-4">
        LinkedIn preferred for first contact.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-[auto_1fr_auto] items-center gap-3.5 rounded-xl border border-ink-3 bg-ink-1 px-[18px] py-3.5 text-cream-1 transition hover:-translate-y-px hover:border-blue hover:bg-ink-2 hover:text-cream"
          >
            <span className="font-mono text-[0.78rem] uppercase tracking-[0.08em] text-cream-3">
              {link.label}
            </span>
            <span className="font-mono text-[0.92rem] text-cream-1">
              {link.handle}
            </span>
            <span
              aria-hidden="true"
              className="font-mono text-orange transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
