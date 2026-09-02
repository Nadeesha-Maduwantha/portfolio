import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-[100px] px-[6vw] max-w-[1100px] mx-auto border-t border-[#ffffff10]"
    >
      <SectionHeading title="Experience" />
      <div className="flex flex-col gap-6 max-w-[720px]">
        {experience.map((job) => (
          <div
            key={job.company}
            className="bg-panel border border-border-subtle border-l-[3px] border-l-accent rounded-lg p-8"
          >
            <p className="font-mono text-accent text-[13px] mb-1.5">
              {job.dateRange}
            </p>
            <h4 className="text-[19px] font-semibold text-text-primary mb-1.5">
              {job.role} — {job.company}
            </h4>
            <ul className="list-disc pl-5 flex flex-col gap-1.5 mt-3">
              {job.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="text-text-muted text-[14.5px] leading-[1.65]"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
