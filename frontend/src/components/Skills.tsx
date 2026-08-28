import SectionHeading from "./SectionHeading";
import TrafficLights from "./TrafficLights";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-[100px] px-[6vw] max-w-[1100px] border-t border-[#ffffff10]"
    >
      <SectionHeading number="02" title="Skills" />
      <div className="bg-panel-dark border border-border-subtle rounded-lg overflow-hidden">
        <div className="flex items-center gap-2 px-[18px] py-3 bg-panel border-b border-border-subtle">
          <TrafficLights />
          <span className="font-mono text-[13px] text-text-faint ml-2">
            skills.yaml
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.name}
              className="px-7 py-[26px] border-r border-b border-white/10"
            >
              <p className="font-mono text-accent text-sm mb-[14px]">
                {group.name}:
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[13px] text-text-secondary bg-white/[.05] border border-white/[.09] px-[11px] py-[5px] rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
