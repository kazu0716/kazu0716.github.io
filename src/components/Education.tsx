import Section from "./Section";
import { education, certifications } from "../data/resume";

export default function Education() {
  return (
    <Section id="education" title="Education & Certifications">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <h3 className="mb-2.5 font-mono text-[0.78rem] uppercase tracking-[0.08em] text-cream-3">
            Education
          </h3>
          <div className="flex flex-col gap-0.5">
            {education.schoolUrl ? (
              <a
                href={education.schoolUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cream border-b border-dotted border-cream/40 self-start transition-colors hover:border-blue hover:text-blue"
              >
                {education.school}
              </a>
            ) : (
              <span className="font-semibold text-cream">
                {education.school}
              </span>
            )}
            <span className="text-cream-4">{education.degree}</span>
            <span className="text-cream-4">{education.period}</span>
            {education.thesis && (
              <>
                <span className="mt-2 text-cream-1">
                  {education.thesis.title}
                </span>
                <span className="text-cream-4">{education.thesis.note}</span>
              </>
            )}
          </div>
        </div>
        <div>
          <h3 className="mb-2.5 font-mono text-[0.78rem] uppercase tracking-[0.08em] text-cream-3">
            Certifications
          </h3>
          <ul className="flex flex-col gap-1 text-cream-2">
            {certifications.map((cert) => (
              <li key={cert.name} className="relative pl-[18px]">
                <span className="absolute left-1.5 top-[-2px] text-[1.2em] text-purple">
                  ·
                </span>
                {cert.name}
                {cert.note && (
                  <span className="text-cream-4"> ({cert.note})</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
