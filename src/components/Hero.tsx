import { profile } from "../data/resume";

export default function Hero() {
  return (
    <section className="pt-[88px] pb-6">
      <h1 className="mb-3 text-[clamp(2.4rem,6vw,3.6rem)] font-bold leading-[1.05] tracking-tight">
        {profile.name}
      </h1>

      <p className="mb-3.5 text-[clamp(1.05rem,2vw,1.25rem)] text-cream-2">
        {profile.title}
        <span className="mx-2 text-cream-4">·</span>
        <span className="text-blue">{profile.subtitle}</span>
      </p>

      <p className="mb-5 flex flex-wrap gap-2">
        {profile.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-ink-3 bg-ink-1 px-2.5 py-0.5 font-mono text-[0.78rem] text-cream-2"
          >
            {tag}
          </span>
        ))}
      </p>

      <p className="mb-6 max-w-[62ch] text-[1.05rem] text-cream-2">
        {profile.lead}
      </p>

      <ul className="mb-7 flex flex-col gap-1.5 text-cream-2">
        <li className="relative pl-[18px]">
          <span className="absolute left-0 top-0 text-orange">▸</span>
          Rapidly delivered ML training infrastructure and operational
          improvements for large-scale research workloads.
        </li>
        <li className="relative pl-[18px]">
          <span className="absolute left-0 top-0 text-orange">▸</span>
          Engineered multi-GPU, multi-cloud inference workloads on Kubernetes
          multi-cluster at Preferred Networks in three months — dynamic
          instance selection optimized cost and throughput.
        </li>
        <li className="relative pl-[18px]">
          <span className="absolute left-0 top-0 text-orange">▸</span>
          Led 200+ enterprise engagements at Google Cloud — earned the 2022
          Japan Award (Most Creative Collateral) for architectural prototypes.
        </li>
      </ul>

      <div className="flex flex-wrap gap-2.5">
        <a
          href="#experience"
          className="inline-flex items-center gap-1.5 rounded-lg border border-blue bg-blue px-4 py-2.5 font-mono text-[0.9rem] font-medium text-ink transition hover:-translate-y-px hover:brightness-110"
        >
          View experience
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-lg border border-ink-3 bg-ink-1 px-4 py-2.5 font-mono text-[0.9rem] font-medium text-cream-1 transition hover:-translate-y-px hover:border-blue hover:bg-ink-2 hover:text-cream"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
