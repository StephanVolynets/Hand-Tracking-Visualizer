import { useEffect, useRef, MutableRefObject } from 'react';
import { Camera } from '@mediapipe/camera_utils';
import { Hands } from '@mediapipe/hands';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import { useEffectsStore } from '../store/effectsStore';
import { drawFireEffect, drawWaterEffect, drawFloralEffect } from '../effects';

interface UseHandTrackingProps {
  videoRef: MutableRefObject<HTMLVideoElement | null>;
  canvasRef: MutableRefObject<HTMLCanvasElement | null>;
}

export const useHandTracking = ({ videoRef, canvasRef }: UseHandTrackingProps) => {
  const { currentEffect, intensity, color, size } = useEffectsStore();

  useEffect(() => {
    if (!videoRef.current || !canvasRef.current) return;

    const hands = new Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    const camera = new Camera(videoRef.current, {
      onFrame: async () => {
        if (!canvasRef.current) return;
        await hands.send({ image: videoRef.current! });
      },
      width: 1280,
      height: 720,
    });

    hands.onResults((results) => {
      if (!canvasRef.current) return;
      const ctx = canvasRef.current.getContext('2d')!;
      
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.drawImage(results.image, 0, 0, canvasRef.current.width, canvasRef.current.height);

      if (results.multiHandLandmarks) {
        for (const landmarks of results.multiHandLandmarks) {
          drawConnectors(ctx, landmarks, Hands.HAND_CONNECTIONS, {
            color: '#00000030',
            lineWidth: 2,
          });
          drawLandmarks(ctx, landmarks, { color: '#FF0000', lineWidth: 1 });

          const effectOptions = { intensity, color, size };
          
          switch (currentEffect) {
            case 'fire':
              drawFireEffect(ctx, landmarks, effectOptions);
              break;
            case 'water':
              drawWaterEffect(ctx, landmarks, effectOptions);
              break;
            case 'floral':
              drawFloralEffect(ctx, landmarks, effectOptions);
              break;
          }
        }
      }
    });

    camera.start();

    return () => {
      camera.stop();
      hands.close();
    };
  }, [currentEffect, intensity, color, size]);
};