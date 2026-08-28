import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[88vh] flex flex-col md:flex-row items-center gap-12 justify-center px-[6vw] max-w-[1100px]"
    >
      <div className="flex-1">
        <p
          className="font-mono text-accent text-base mb-[18px] animate-fade-up"
          style={{ animationDelay: "0s" }}
        >
          <span className="text-text-faint">$</span> whoami
        </p>
        <h1
          className="font-mono font-bold text-text-primary leading-[1.1] mb-[14px] animate-fade-up text-[clamp(36px,6vw,64px)]"
          style={{ animationDelay: "0.1s" }}
        >
          {profile.name}
        </h1>
        <h2
          className="font-mono font-medium text-text-muted mb-[22px] animate-fade-up text-[clamp(18px,2.4vw,26px)]"
          style={{ animationDelay: "0.2s" }}
        >
          {profile.title} <span className="text-accent">|</span> {profile.role}
        </h2>
        <p
          className="text-[17px] text-text-muted max-w-[560px] mb-9 leading-[1.7] animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          {profile.tagline}
        </p>
        <div
          className="flex gap-4 flex-wrap animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#projects"
            className="bg-accent text-panel-dark font-semibold font-mono px-[26px] py-[13px] rounded text-[15px] hover:bg-accent-hover transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-border-strong text-text-primary font-medium font-mono px-[26px] py-[13px] rounded text-[15px] hover:border-accent transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div
        className="shrink-0 animate-fade-up"
        style={{ animationDelay: "0.2s" }}
      >
        <Image
          src="/Gemini_Generated_Image_usl54musl54musl5.png"
          alt={profile.name}
          width={1133}
          height={944}
          priority
          className="w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full object-cover border-2 border-border-strong"
        />
      </div>
    </section>
  );
}
