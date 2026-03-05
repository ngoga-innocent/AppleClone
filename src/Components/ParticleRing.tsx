import { useEffect, useRef } from "react";

type Particle = {
  angle: number;
  orbitRadius: number;
  size: number;
  hue: number;
  opacity: number;
  speed: number;
};

export default function ParticleHalo() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const width = (canvas.width = 500);
    const height = (canvas.height = 500);

    const cx = width / 2;
    const cy = height / 2;

    const particles: Particle[] = [];
    const total = 180;

    // 🎯 Create particle field
    for (let i = 0; i < total; i++) {
      const depth = Math.random(); // 0 → far, 1 → near

      particles.push({
        angle: Math.random() * Math.PI * 2,
        orbitRadius: 100 + depth * 80, // different radii = layers
        size: 1 + depth * 5,           // near = bigger
        hue: 210 + depth * 60,         // blue → purple
        opacity: 0.2 + depth * 0.8,    // far = faint
        speed: 0.0005 + depth * 0.001, // subtle motion
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.angle += p.speed;

        // organic wobble
        const wobble = Math.sin(p.angle * 3) * 10;

        const x = cx + (p.orbitRadius + wobble) * Math.cos(p.angle);
        const y = cy + (p.orbitRadius + wobble) * Math.sin(p.angle);

        ctx.shadowBlur = 25;
        ctx.shadowColor = `hsla(${p.hue}, 90%, 70%, 0.5)`;
        ctx.fillStyle = `hsla(${p.hue}, 85%, 70%, ${p.opacity})`;

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return <canvas ref={canvasRef} className="mx-auto block" />;
}
