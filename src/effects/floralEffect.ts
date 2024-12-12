import { EffectOptions } from '../types/effects';

export const drawFloralEffect = (
  ctx: CanvasRenderingContext2D,
  landmarks: { x: number; y: number }[],
  options: EffectOptions
) => {
  const { intensity, color, size } = options;
  
  landmarks.forEach((point) => {
    const x = point.x * ctx.canvas.width;
    const y = point.y * ctx.canvas.height;
    
    const petalCount = 5;
    const angle = (Math.PI * 2) / petalCount;
    
    ctx.save();
    ctx.translate(x, y);
    
    for (let i = 0; i < petalCount; i++) {
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.ellipse(0, 0, size * intensity, size * intensity / 2, 0, 0, Math.PI * 2);
      ctx.fillStyle = `${color}80`;
      ctx.fill();
    }
    
    ctx.restore();
  });
};