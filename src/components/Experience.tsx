import Section from "./Section";
import { experience } from "../data/resume";

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-1.5 text-cream-2">
      {items.map((point, i) => (
        <li key={i} className="relative pl-[18px]">
          <span className="absolute left-0 top-0 text-[0.85em] text-orange">
            ▸
          </span>
          {point}
        </li>
      ))}
    </ul>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="flex flex-col">
        {experience.map((job, idx) => (
          <li
            key={`${job.org}-${job.period}`}
            className={`grid gap-7 py-5 sm:grid-cols-[200px_1fr] ${idx === 0 ? "" : "border-t border-ink-3"}`}
          >
            <div className="flex flex-row gap-2.5 pt-0.5 sm:flex-col sm:gap-0.5">
              <span className="font-mono text-[0.8rem] text-yellow">
                {job.period}
              </span>
              <span className="font-mono text-[0.75rem] text-cream-4">
                {job.location}
              </span>
            </div>

            <div>
              <h3 className="text-[1.05rem] font-semibold text-cream">
                {job.role}
              </h3>
              <p className="mt-0.5 mb-2.5 font-mono text-[0.85rem] text-aqua">
                {job.orgUrl ? (
                  <a
                    href={job.orgUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-dotted border-aqua/40 transition-colors hover:border-blue hover:text-blue"
                  >
                    {job.org}
                  </a>
                ) : (
                  job.org
                )}
              </p>
              {job.teams ? (
                // Internal moves within the same org: one timeline, newest first.
                <ol className="mt-3.5 flex flex-col gap-5 border-l border-ink-3 pl-5">
                  {job.teams.map((team, i) => (
                    <li key={team.name} className="relative">
                      <span
                        aria-hidden="true"
                        className={`absolute -left-[25px] top-[0.55em] h-2 w-2 rounded-full ring-4 ring-ink ${i === 0 ? "bg-blue" : "bg-ink-4"}`}
                      />
                      <p className="mb-2 flex flex-wrap items-baseline gap-x-2.5">
                        <span className="font-semibold text-cream-1">
                          {team.name}
                        </span>
                        <span className="font-mono text-[0.78rem] text-yellow">
                          {team.period}
                        </span>
                      </p>
                      <Highlights items={team.highlights} />
                    </li>
                  ))}
                </ol>
              ) : (
                <Highlights items={job.highlights} />
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
