import React, { useRef } from 'react';
import { useHandTracking } from '../hooks/useHandTracking';
import { PrivacyNotice } from './PrivacyNotice';

const HandTracking: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useHandTracking({ videoRef, canvasRef });

  return (
    <div className="relative w-full h-screen">
      <video
        ref={videoRef}
        className="hidden"
        playsInline
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        width={1280}
        height={720}
      />
      <PrivacyNotice />
    </div>
  );
};

export default HandTracking;