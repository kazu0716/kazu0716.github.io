import type { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = "" }: Props) {
  return (
    <section
      id={id}
      className={`mt-12 border-t border-dashed border-ink-3 pt-14 pb-4 first:mt-0 first:border-t-0 ${className}`}
    >
      <h2 className="mb-7 font-mono text-[1.25rem] font-bold text-cream">
        {title}
      </h2>
      {children}
    </section>
  );
}
