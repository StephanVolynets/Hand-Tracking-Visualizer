import { EffectOptions } from '../types/effects';

export const drawWaterEffect = (
  ctx: CanvasRenderingContext2D,
  landmarks: { x: number; y: number }[],
  options: EffectOptions
) => {
  const { intensity, color, size } = options;
  
  landmarks.forEach((point) => {
    const x = point.x * ctx.canvas.width;
    const y = point.y * ctx.canvas.height;
    
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(x, y, (size + i * 10) * intensity, 0, Math.PI * 2);
      ctx.strokeStyle = `${color}40`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  });
};