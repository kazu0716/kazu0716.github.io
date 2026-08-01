import { useState } from "react";
import Section from "./Section";
import { writing } from "../data/resume";
import type { WritingItem, WritingKind } from "../data/resume";

const kindStyle: Record<WritingKind, string> = {
  Article: "border-blue/35 bg-blue/10 text-blue",
  Blog: "border-aqua/35 bg-aqua/10 text-aqua",
  Patent: "border-purple/35 bg-purple/10 text-purple",
  Paper: "border-orange/35 bg-orange/10 text-orange",
  Talk: "border-green/35 bg-green/10 text-green",
};

const PAGE_SIZE = 5;

function WritingRow({ item, first }: { item: WritingItem; first: boolean }) {
  return (
    <li className={`py-3.5 ${first ? "" : "border-t border-ink-3"}`}>
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
  );
}

/** 5 items per page with numbered pagination. All pages are in the static
 *  HTML (inactive ones hidden), so crawlers still see every entry. */
export default function Writing() {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(writing.length / PAGE_SIZE);
  const pages = Array.from({ length: pageCount }, (_, p) =>
    writing.slice(p * PAGE_SIZE, (p + 1) * PAGE_SIZE),
  );

  return (
    <Section id="writing" title="Writing & Talks">
      <p className="mb-5 max-w-[60ch] text-cream-2">
        Conference talks, articles, blog posts, customer stories, papers, and
        patents.
      </p>

      {pages.map((pageItems, p) => (
        <ul
          key={pageItems[0].url}
          className={`flex-col ${p === page ? "flex" : "hidden"}`}
        >
          {pageItems.map((item, idx) => (
            <WritingRow key={item.url} item={item} first={idx === 0} />
          ))}
        </ul>
      ))}

      <nav
        aria-label="Writing & Talks pages"
        className="mt-1 flex items-center gap-2 border-t border-ink-3 pt-4 font-mono text-[0.85rem]"
      >
        <span aria-hidden="true" className="text-green">
          $
        </span>
        <span className="mr-1 text-cream-4">page</span>
        {pages.map((pageItems, p) => (
          <button
            key={pageItems[0].url}
            type="button"
            onClick={() => setPage(p)}
            aria-current={p === page ? "page" : undefined}
            className={`rounded-md border px-2.5 py-1 transition-colors ${
              p === page
                ? "border-green/50 bg-green/10 text-green"
                : "cursor-pointer border-ink-3 text-cream-3 hover:border-ink-4 hover:text-cream"
            }`}
          >
            {p + 1}
          </button>
        ))}
        <span className="ml-1 text-cream-4">
          of {pageCount}
        </span>
      </nav>
    </Section>
  );
}
