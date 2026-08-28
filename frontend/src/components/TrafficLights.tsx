export default function TrafficLights({ size = 11 }: { size?: number }) {
  const dot = { width: size, height: size };
  return (
    <>
      <span className="rounded-full bg-[#ff5f56]" style={dot} />
      <span className="rounded-full bg-[#ffbd2e]" style={dot} />
      <span className="rounded-full bg-[#27c93f]" style={dot} />
    </>
  );
}
