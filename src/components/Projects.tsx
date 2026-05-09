import Section from "./Section";
import { projects } from "../data/resume";

export default function Projects() {
  return (
    <Section id="projects" title="Side Projects">
      <p className="mb-5 max-w-[60ch] text-cream-2">
        Selected side projects done alongside my full-time roles.
      </p>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <article
            key={`${project.name}-${project.period}`}
            className="grid gap-3 rounded-xl border border-ink-3 bg-ink-1 p-5 transition hover:-translate-y-0.5 hover:border-blue sm:grid-cols-[200px_1fr] sm:gap-7"
          >
            <div className="flex flex-col gap-0.5">
              <span className="font-mono text-[0.8rem] text-yellow">
                {project.period}
              </span>
              {project.role && (
                <span className="font-mono text-[0.78rem] text-aqua">
                  {project.role}
                </span>
              )}
            </div>

            <div>
              <h3 className="mb-1.5 text-[1.05rem] font-semibold text-cream">
                {project.name}
              </h3>
              <p className="mb-3 text-cream-2">{project.description}</p>
              <ul className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-ink-3 bg-ink-2 px-1.5 py-0.5 font-mono text-[0.75rem] text-cream-1"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
