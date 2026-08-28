export default function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <>
      <p className="font-mono text-text-faint text-sm mb-2">{number}</p>
      <h3 className="font-mono text-[28px] text-text-primary mb-7 flex items-center gap-3">
        <span className="text-accent">&gt;</span>
        {title}
      </h3>
    </>
  );
}
