import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-[6vw] py-7 border-t border-[#ffffff10] text-center">
      <p className="font-mono text-text-faint text-[13px] m-0">
        {`// built by ${profile.name} — ${new Date().getFullYear()}`}
      </p>
    </footer>
  );
}
