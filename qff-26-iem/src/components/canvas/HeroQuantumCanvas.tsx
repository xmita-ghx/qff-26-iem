"use client";

import React, { useEffect, useRef } from "react";

export const HeroQuantumCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth / 2);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Dynamic flocking birds
    const birds = Array.from({ length: 35 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.3) * 1.5 - 0.5,
      vy: -Math.random() * 1.2 - 0.5,
      size: Math.random() * 4 + 4,
      flapSpeed: Math.random() * 0.15 + 0.08,
      flapPhase: Math.random() * Math.PI * 2,
    }));

    let rotationAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Rotating Dilution Refrigerator (Cryostat) Wireframe
      rotationAngle += 0.008;
      const centerX = width * 0.65;
      const startY = height * 0.08;

      const tiers = [
        { radius: 110, y: startY },
        { radius: 95, y: startY + 80 },
        { radius: 80, y: startY + 170 },
        { radius: 60, y: startY + 270 },
        { radius: 45, y: startY + 370 },
        { radius: 28, y: startY + 460 },
      ];

      ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
      ctx.lineWidth = 1;

      // Central axis rod
      ctx.beginPath();
      ctx.moveTo(centerX, startY - 40);
      ctx.lineTo(centerX, startY + 490);
      ctx.strokeStyle = "rgba(224, 170, 255, 0.4)";
      ctx.stroke();

      // Plates and rings
      tiers.forEach((tier, index) => {
        ctx.save();
        ctx.translate(centerX, tier.y);
        ctx.beginPath();
        ctx.ellipse(0, 0, tier.radius, tier.radius * 0.28, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.75)";
        ctx.stroke();

        // Inner disc
        ctx.beginPath();
        ctx.ellipse(0, 0, tier.radius * 0.85, tier.radius * 0.22, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(224, 170, 255, 0.35)";
        ctx.stroke();

        // Vertical spoke struts
        const spokes = 8;
        for (let s = 0; s < spokes; s++) {
          const spokeAngle = rotationAngle + (s / spokes) * Math.PI * 2;
          const px = Math.cos(spokeAngle) * tier.radius;
          const py = Math.sin(spokeAngle) * (tier.radius * 0.28);
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(px, py);
          ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
          ctx.stroke();
        }
        ctx.restore();

        // Connecting coaxial lines to next stage
        if (index < tiers.length - 1) {
          const nextTier = tiers[index + 1];
          const lines = 6;
          for (let l = 0; l < lines; l++) {
            const lAngle = rotationAngle + (l / lines) * Math.PI * 2;
            const x1 = centerX + Math.cos(lAngle) * (tier.radius * 0.7);
            const y1 = tier.y + Math.sin(lAngle) * (tier.radius * 0.18);
            const x2 = centerX + Math.cos(lAngle) * (nextTier.radius * 0.7);
            const y2 = nextTier.y + Math.sin(lAngle) * (nextTier.radius * 0.18);

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            const cx = (x1 + x2) / 2 + Math.sin(rotationAngle * 2 + l) * 12;
            ctx.quadraticCurveTo(cx, (y1 + y2) / 2, x2, y2);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.45)";
            ctx.stroke();
          }
        }
      });

      // Bottom mixing chamber cylinder
      const bottom = tiers[tiers.length - 1];
      ctx.save();
      ctx.translate(centerX, bottom.y + 25);
      ctx.beginPath();
      ctx.rect(-15, 0, 30, 45);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
      ctx.stroke();
      ctx.restore();

      // 2. White Flocking Silhouette Birds
      birds.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;
        b.flapPhase += b.flapSpeed;

        if (b.y < -20) {
          b.y = height + 20;
          b.x = Math.random() * width;
        }
        if (b.x < -20) b.x = width + 20;
        if (b.x > width + 20) b.x = -20;

        const flap = Math.sin(b.flapPhase) * 0.5;

        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        // V-wing bird silhouette
        ctx.moveTo(-b.size, flap * b.size);
        ctx.lineTo(0, -flap * (b.size * 0.3));
        ctx.lineTo(b.size, flap * b.size);
        ctx.stroke();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block pointer-events-none"
    />
  );
};

export default HeroQuantumCanvas;
