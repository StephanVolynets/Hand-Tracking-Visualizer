import React from 'react';

export const PrivacyNotice: React.FC = () => (
  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm rounded-lg p-4">
    <p className="text-sm">
      This application uses your camera for hand tracking.
      <br />
      No video data is stored or transmitted.
    </p>
  </div>
);