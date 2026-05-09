import Section from "./Section";
import { skillGroups } from "../data/resume";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-ink-3 bg-ink-1 px-[18px] py-4 transition hover:-translate-y-px hover:border-ink-4"
          >
            <h3 className="mb-2.5 font-mono text-[0.78rem] uppercase tracking-[0.08em] text-cream-3">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-ink-3 bg-ink-2 px-2.5 py-0.5 font-mono text-[0.8rem] text-cream-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
