export default function SectionHeading({ title }: { title: string }) {
  return (
    <h3 className="font-mono text-[28px] text-text-primary mb-7 flex items-center gap-3">
      <span className="text-accent">&gt;</span>
      {title}
    </h3>
  );
}
