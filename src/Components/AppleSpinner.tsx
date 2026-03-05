export default function IOSSpinner({ size = 20 }: { size?: number }) {
  const dots = 12;
  const radius = 16;
  const center = 20;

  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      {Array.from({ length: dots }).map((_, i) => {
        const angle = (i * 360) / dots;
        const x = center + radius * Math.cos((angle * Math.PI) / 180);
        const y = center + radius * Math.sin((angle * Math.PI) / 180);

        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="3"
            fill="currentColor"
            className="ios-dot"
            style={{ animationDelay: `${i * 0.08}s` }}
          />
        );
      })}
    </svg>
  );
}
