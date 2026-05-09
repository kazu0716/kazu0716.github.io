import Section from "./Section";
import { about } from "../data/resume";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-3.5">
        {about.map((paragraph, idx) => (
          <p key={idx} className="max-w-[70ch] text-cream-2">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
