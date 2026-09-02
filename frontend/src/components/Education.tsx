import SectionHeading from "./SectionHeading";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section
      id="education"
      className="py-[100px] px-[6vw] max-w-[1100px] mx-auto border-t border-[#ffffff10]"
    >
      <SectionHeading title="Education" />
      <div className="bg-panel border border-border-subtle border-l-[3px] border-l-accent rounded-lg p-8 max-w-[720px]">
        <p className="font-mono text-accent text-[13px] mb-1.5">
          {education.dateRange}
        </p>
        <h4 className="text-[19px] font-semibold text-text-primary mb-1.5">
          {education.degree}
        </h4>
        <p className="text-text-muted text-[15px] mb-[18px]">
          {education.university}
        </p>
        <p className="font-mono text-text-faint text-[13px] mb-2.5">
          relevant_coursework:
        </p>
        <div className="flex flex-wrap gap-2">
          {education.coursework.map((course) => (
            <span
              key={course}
              className="font-mono text-[13px] text-text-secondary bg-white/[.05] border border-white/[.09] px-[11px] py-[5px] rounded"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
