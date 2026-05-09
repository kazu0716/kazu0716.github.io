import Section from "./Section";
import { oss } from "../data/resume";

export default function OpenSource() {
  return (
    <Section id="open-source" title="Open Source">
      <p className="mb-5 max-w-[60ch] text-cream-2">
        Selected OSS contributions.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
        {oss.map((repo) => (
          <a
            key={repo.url}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-xl border border-ink-3 bg-ink-1 p-5 text-cream-1 transition hover:-translate-y-0.5 hover:border-blue"
          >
            <header className="mb-2 flex items-start justify-between gap-3">
              <h3 className="font-mono text-[0.95rem] font-semibold text-cream group-hover:text-blue">
                {repo.name}
              </h3>
              <span
                aria-hidden="true"
                className="font-mono text-orange transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </header>
            <p className="mb-3 text-cream-2">{repo.description}</p>
            <ul className="mt-auto flex flex-wrap gap-1.5">
              {repo.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-ink-3 bg-ink-2 px-1.5 py-0.5 font-mono text-[0.75rem] text-cream-1"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </Section>
  );
}
