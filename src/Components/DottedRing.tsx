// export  function OneDot() {
//   return (
//     <svg width="100" height="100">
//       <circle cx="50" cy="50" r="5" fill="blue" />
//     </svg>
//   );
// }
export  function DotCircle2({width,height}: {width:number,height:number}) {
  const dots = 40;
  const radius = 80;
  const cx = 100;
  const cy = 100;

  return (
    <svg width={width} height={height} viewBox="0 0 200 200">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5ac8fa" />
          <stop offset="10%" stopColor="#A134F5" />
          <stop offset="20%" stopColor="#F54F76" />
          {/* <stop offset="40%" stopColor="#56CCF3" />s */}
          <stop offset="70%" stopColor="#CE1EDA" />
        </linearGradient>
      </defs>

      {Array.from({ length: dots }).map((_, i) => {
        const angle = (i / dots) * Math.PI * 2;

        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);

        return <circle key={i} cx={x} cy={y} r="4" fill="url(#grad)" />;
      })}
    </svg>
  );
}

export default function DotCircle({ width, height }: { width: number; height: number }) {
  const dots = 40;
  const radius = 80;
  const cx = 100;
  const cy = 100;

  return (
    <svg width={width} height={height} viewBox="0 0 200 200">
      {Array.from({ length: dots }).map((_, i) => {
        const angle = (i / dots) * 360; // degrees
        const rad = (angle * Math.PI) / 180;

        const x = cx + radius * Math.cos(rad);
        const y = cy + radius * Math.sin(rad);

        // 🎯 Map angle → hue (blue → purple → pink → orange)
        let hue;

        if (angle < 90) hue = 200 + (angle / 90) * 40;        // blue → indigo
        else if (angle < 120) hue = 220 + (angle / 90) * 40;        // blue → indigo
        else if (angle < 180) hue = 240 + ((angle - 90) / 90) * 40; // indigo → purple
        else if (angle < 240) hue = 260 + ((angle - 180) / 90) * 20; // purple → deep purple
        else if (angle < 270) hue = 280 + ((angle - 180) / 90) * 40; // purple → pink
        else if (angle < 300) hue = 300 + ((angle - 270) / 90) * 20; // pink → magenta
        else hue = 320 + ((angle - 270) / 90) * 30;            // pink → orange

        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="4"
            fill={`hsl(${hue}, 85%, 65%)`}
          />
        );
      })}
    </svg>
  );
}
