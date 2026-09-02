import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import { contact, profile } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="pt-[100px] pb-[140px] px-[6vw] max-w-[1100px] mx-auto border-t border-[#ffffff10]"
    >
      <SectionHeading title="Contact" />
      <p className="text-text-muted text-base max-w-[520px] mb-8 leading-[1.7]">
        {contact.blurb}
      </p>

      <ContactForm />

      <div className="flex flex-wrap gap-4 mt-10">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2.5 border border-border-strong px-5 py-3 rounded-md font-mono text-sm text-text-primary hover:border-accent transition-colors"
        >
          <span className="text-accent">✉</span> {profile.email}
        </a>
        <a
          href={profile.githubUrl}
          className="flex items-center gap-2.5 border border-border-strong px-5 py-3 rounded-md font-mono text-sm text-text-primary hover:border-accent transition-colors"
        >
          <span className="text-accent">💻</span> {profile.githubLabel}
        </a>
        <a
          href={profile.linkedinUrl}
          className="flex items-center gap-2.5 border border-border-strong px-5 py-3 rounded-md font-mono text-sm text-text-primary hover:border-accent transition-colors"
        >
          <span className="text-accent">🔗</span> {profile.linkedinLabel}
        </a>
      </div>
    </section>
  );
}
