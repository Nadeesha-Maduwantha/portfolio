import { navLinks, profile } from "@/lib/data";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-[6vw] py-[18px] bg-[#12141ad9] backdrop-blur-md border-b border-border-subtle">
      <a
        href="#hero"
        className="font-mono font-bold text-[17px] text-text-primary"
      >
        {profile.handle}
        <span className="text-accent">.dev</span>
      </a>
      <div className="hidden md:flex items-center gap-7">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-text-muted font-mono text-sm hover:text-accent-hover transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href={profile.resumeUrl}
          className="border border-[#39ff9460] px-3.5 py-1.5 rounded font-mono text-[13px] text-accent hover:text-accent-hover hover:border-accent transition-colors"
        >
          resume.pdf
        </a>
      </div>
    </nav>
  );
}
