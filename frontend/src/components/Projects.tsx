import SectionHeading from "./SectionHeading";
import TrafficLights from "./TrafficLights";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-[100px] px-[6vw] max-w-[1100px] mx-auto border-t border-[#ffffff10]"
    >
      <SectionHeading title="Projects" />
      <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
        {projects.map((proj, i) => (
          <div
            key={proj.file}
            className={`bg-panel border border-border-subtle rounded-lg overflow-hidden flex flex-col${
              i === projects.length - 1 && projects.length % 2 !== 0
                ? " sm:col-span-2"
                : ""
            }`}
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-panel-dark border-b border-border-subtle">
              <TrafficLights size={10} />
              <span className="font-mono text-xs text-text-faint ml-1.5">
                {proj.file}
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h4 className="font-mono text-lg text-text-primary mb-2.5">
                {proj.title}
              </h4>
              <p className="text-[14.5px] text-text-muted leading-[1.65] mb-[18px] flex-1">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-[7px] mb-[18px]">
                {proj.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-accent bg-accent-tint px-[9px] py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-[18px] font-mono text-[13px]">
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    className="text-accent hover:text-accent-hover transition-colors"
                  >
                    GitHub ↗
                  </a>
                )}
                {proj.demoUrl && (
                  <a
                    href={proj.demoUrl}
                    className="text-accent hover:text-accent-hover transition-colors"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
