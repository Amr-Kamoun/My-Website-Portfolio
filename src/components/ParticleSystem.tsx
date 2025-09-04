import { useRef, useEffect } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
};

const ParticleSystem = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // --- helpers (flat, single-responsibility) -------------------------------

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      color: Math.random() > 0.5 ? '#00D4FF' : '#7C3AED',
    });

    const initParticles = () => {
      const count = Math.floor((canvas.width * canvas.height) / 15000);
      particlesRef.current = Array.from({ length: count }, createParticle);
    };

    const updateParticles = () => {
      const w = canvas.width;
      const h = canvas.height;

      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
    };

    const drawSingleParticle = (p: Particle) => {
      ctx.beginPath();
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1; // reset
    };

    const drawParticles = () => {
      for (const p of particlesRef.current) {
        drawSingleParticle(p);
      }
    };

    const drawConnections = () => {
      const particles = particlesRef.current;
      const n = particles.length;

      for (let i = 0; i < n; i++) {
        const a = particles[i];
        for (let j = i + 1; j < n; j++) {
          const b = particles[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);

          if (distance >= 100) continue;

          const opacity = ((100 - distance) / 100) * 0.3;

          ctx.beginPath();
          ctx.strokeStyle = `rgba(0,212,255,${opacity})`;
          ctx.lineWidth = 1;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    };

    const renderFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateParticles();
      drawParticles();
      drawConnections();
      animationFrameRef.current = requestAnimationFrame(renderFrame);
    };

    // --- lifecycle -----------------------------------------------------------

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    resizeCanvas();
    initParticles();
    renderFrame();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default ParticleSystem;
