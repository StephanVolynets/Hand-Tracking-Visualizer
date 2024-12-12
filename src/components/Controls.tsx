import React from 'react';
import { Flame, Droplets, Flower } from 'lucide-react';
import { useEffectsStore, EffectType } from '../store/effectsStore';

const Controls: React.FC = () => {
  const { currentEffect, intensity, color, size, setEffect, setIntensity, setColor, setSize } = useEffectsStore();

  const effects: { type: EffectType; icon: React.ReactNode; label: string }[] = [
    { type: 'fire', icon: <Flame className="w-6 h-6" />, label: 'Fire' },
    { type: 'water', icon: <Droplets className="w-6 h-6" />, label: 'Water' },
    { type: 'floral', icon: <Flower className="w-6 h-6" />, label: 'Floral' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 shadow-lg">
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="flex justify-center gap-4">
          {effects.map(({ type, icon, label }) => (
            <button
              key={type}
              onClick={() => setEffect(type)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                currentEffect === type
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {icon}
              <span>{label}</span>
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Intensity</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={intensity}
              onChange={(e) => setIntensity(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Color</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="h-10 w-20"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Size</label>
            <input
              type="range"
              min="5"
              max="50"
              value={size}
              onChange={(e) => setSize(parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;