import Section from "./Section";
import { writing } from "../data/resume";
import type { WritingKind } from "../data/resume";

const kindStyle: Record<WritingKind, string> = {
  Article: "border-blue/35 bg-blue/10 text-blue",
  Blog: "border-aqua/35 bg-aqua/10 text-aqua",
  Patent: "border-purple/35 bg-purple/10 text-purple",
  Paper: "border-orange/35 bg-orange/10 text-orange",
};

export default function Writing() {
  return (
    <Section id="writing" title="Writing">
      <p className="mb-5 max-w-[60ch] text-cream-2">
        Articles, blog posts, papers, and patents.
      </p>
      <ul className="flex flex-col">
        {writing.map((item, idx) => (
          <li
            key={item.url}
            className={`py-3.5 ${idx === 0 ? "" : "border-t border-ink-3"}`}
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-1 sm:grid-cols-[88px_1fr] sm:items-baseline sm:gap-5"
            >
              <span className="font-mono text-[0.78rem] text-yellow">
                {item.date}
              </span>

              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span
                    className={`shrink-0 rounded-md border px-1.5 py-px font-mono text-[0.7rem] uppercase tracking-wider ${kindStyle[item.kind]}`}
                  >
                    {item.kind}
                  </span>
                  {item.lang === "ja" && (
                    <span
                      className="shrink-0 rounded-md border border-cream-4/40 bg-cream-4/10 px-1.5 py-px font-mono text-[0.7rem] uppercase tracking-wider text-cream-3"
                      title="Written in Japanese only"
                    >
                      JA only
                    </span>
                  )}
                  <span className="text-cream-1 transition-colors group-hover:text-blue">
                    {item.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-orange transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </div>
                <span className="font-mono text-[0.78rem] text-cream-4">
                  {item.outlet}
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
