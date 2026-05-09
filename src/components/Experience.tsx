import Section from "./Section";
import { experience } from "../data/resume";

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
              <ul className="flex flex-col gap-1.5 text-cream-2">
                {job.highlights.map((point, i) => (
                  <li key={i} className="relative pl-[18px]">
                    <span className="absolute left-0 top-0 text-[0.85em] text-orange">
                      ▸
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
