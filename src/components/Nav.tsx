import { navItems } from "../data/resume";

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-ink-3 bg-ink/80 backdrop-blur-md backdrop-saturate-150">
      <div className="flex items-center justify-between gap-4 px-[clamp(20px,4vw,40px)] py-3.5">
        <a
          href="#top"
          className="inline-flex items-baseline gap-1.5 font-mono text-sm text-cream-1 transition-colors hover:text-blue"
        >
          <span className="text-green">$</span>
          <span>kazu0716</span>
          <span
            className="text-green"
            style={{ animation: "var(--animate-blink)" }}
          >
            _
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-1.5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-1.5 font-mono text-[0.85rem] text-cream-3 transition-colors hover:bg-ink-2 hover:text-cream"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile / tablet nav: horizontal scroll chips */}
      <nav
        aria-label="Section navigation"
        className="flex gap-1.5 overflow-x-auto whitespace-nowrap border-t border-ink-3 px-[clamp(20px,4vw,40px)] py-2 lg:hidden [scrollbar-width:thin]"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-md border border-ink-3 bg-ink-1 px-2.5 py-1 font-mono text-[0.78rem] text-cream-2 transition-colors hover:border-blue hover:text-cream"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
