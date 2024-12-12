import { create } from 'zustand';

export type EffectType = 'fire' | 'water' | 'floral';

interface EffectsState {
  currentEffect: EffectType;
  intensity: number;
  color: string;
  size: number;
  setEffect: (effect: EffectType) => void;
  setIntensity: (intensity: number) => void;
  setColor: (color: string) => void;
  setSize: (size: number) => void;
}

export const useEffectsStore = create<EffectsState>((set) => ({
  currentEffect: 'fire',
  intensity: 0.5,
  color: '#ff4400',
  size: 20,
  setEffect: (effect) => set({ currentEffect: effect }),
  setIntensity: (intensity) => set({ intensity }),
  setColor: (color) => set({ color }),
  setSize: (size) => set({ size }),
}));