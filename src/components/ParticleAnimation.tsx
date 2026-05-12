import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

interface ParticleAnimationProps {
  theme?: 'dark' | 'light';
}

export const ParticleAnimation: React.FC<ParticleAnimationProps> = ({ theme = 'dark' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      particles.current = [];
      const particleCount = 2000;
      const colors = theme === 'dark' 
        ? ['#2ecab7', '#3b82f6', '#ffffff', '#1e293b'] 
        : ['#2ecab7', '#3b82f6', '#000000', '#94a3b8'];

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * Math.max(canvas.width, canvas.height) * 0.5;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        particles.current.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: 0,
          vy: 0,
          size: Math.random() * 1.5,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p) => {
        // Move towards origin
        p.vx += (p.originX - p.x) * 0.01;
        p.vy += (p.originY - p.y) * 0.01;

        // Mouse interaction
        if (mouse.current.active) {
          const dx = mouse.current.x - p.x;
          const dy = mouse.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 150;

          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            const angle = Math.atan2(dy, dx);
            p.vx -= Math.cos(angle) * force * 5;
            p.vy -= Math.sin(angle) * force * 5;
          }
        }

        p.vx *= 0.95; // friction
        p.vy *= 0.95;

        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.active = true;
    };

    const handleMouseLeave = () => {
      mouse.current.active = false;
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};
