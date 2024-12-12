export const createGradient = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  color: string
): CanvasGradient => {
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 2);
  gradient.addColorStop(0, color);
  gradient.addColorStop(1, 'transparent');
  return gradient;
};