import { EffectOptions } from '../types/effects';
import { createGradient } from '../utils/canvas';

export const drawFireEffect = (
  ctx: CanvasRenderingContext2D,
  landmarks: { x: number; y: number }[],
  options: EffectOptions
) => {
  const { intensity, color, size } = options;
  
  landmarks.forEach((point) => {
    const x = point.x * ctx.canvas.width;
    const y = point.y * ctx.canvas.height;
    
    for (let i = 0; i < 10 * intensity; i++) {
      const radius = Math.random() * size;
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 30 * intensity;
      
      ctx.beginPath();
      ctx.arc(
        x + Math.cos(angle) * distance,
        y + Math.sin(angle) * distance,
        radius,
        0,
        Math.PI * 2
      );
      
      ctx.fillStyle = createGradient(ctx, x, y, radius, color);
      ctx.fill();
    }
  });
};