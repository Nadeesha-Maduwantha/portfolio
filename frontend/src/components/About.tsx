import SectionHeading from "./SectionHeading";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="py-[100px] px-[6vw] max-w-[1100px] mx-auto border-t border-[#ffffff10]"
    >
      <SectionHeading title="About" />
      <div className="bg-panel border border-border-subtle rounded-lg p-9 max-w-[720px]">
        <p className="text-base leading-[1.8] text-text-secondary m-0">
          {about.bio.map((part, i) =>
            typeof part === "string" ? (
              <span key={i}>{part}</span>
            ) : (
              <strong key={i} className="text-text-primary">
                {part.bold}
              </strong>
            )
          )}
        </p>
      </div>
    </section>
  );
}
