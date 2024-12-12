# Interactive Hand Tracking Visual Effects by Stephan 

A real time hand tracking application that creates stunning visual effects based on hand movements. Built with React, TypeScript, and MediaPipe Hands.

![Hand Tracking Demo](https://images.unsplash.com/photo 1527430253228 e93688616381?auto=format&fit=crop&q=80&w=1200&h=400)

## ✨ Features

  **Real time Hand Tracking**: Utilizes MediaPipe Hands for accurate hand detection and tracking
  **Multiple Visual Effects**:
    🔥 Fire: Dynamic flame trails following hand movements
    💧 Water: Ripple effects emanating from hand positions
    🌸 Floral: Blossoming flowers along hand movement paths
  **Customizable Parameters**:
    Intensity control
    Color selection
    Size adjustment
  **Privacy Focused**: No video data stored or transmitted
  **Optimized Performance**: Smooth rendering and minimal latency
  **Responsive Design**: Works across different screen sizes

## 🚀 Getting Started

### Prerequisites

  Node.js (v14 or higher)
  npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/hand tracking effects.git
cd hand tracking effects
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Technology Stack

  **Frontend Framework**: React 18
  **Language**: TypeScript
  **Hand Tracking**: MediaPipe Hands
  **State Management**: Zustand
  **Styling**: Tailwind CSS
  **Icons**: Lucide React
  **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Controls.tsx    # Effect control panel
│   ├── HandTracking.tsx# Main tracking component
│   └── PrivacyNotice.tsx
├── effects/            # Visual effect implementations
│   ├── fireEffect.ts
│   ├── waterEffect.ts
│   └── floralEffect.ts
├── hooks/              # Custom React hooks
│   └── useHandTracking.ts
├── store/              # State management
│   └── effectsStore.ts
├── types/              # TypeScript definitions
│   └── effects.ts
├── utils/              # Utility functions
│   └── canvas.ts
└── App.tsx            # Root component
```

## 🎨 Available Effects

### Fire Effect
  Creates dynamic flame particles that follow hand movements
  Adjustable intensity affects particle count and spread
  Customizable color and size

### Water Effect
  Generates concentric ripples around hand positions
  Intensity controls ripple size and transparency
  Configurable color and ring count

### Floral Effect
  Spawns flower like patterns along hand movement paths
  Intensity affects petal size and density
  Customizable color and bloom size

## 🎮 Controls

The application provides an intuitive control panel at the bottom of the screen:

  **Effect Selection**: Choose between Fire, Water, and Floral effects
  **Intensity Slider**: Adjust the strength of the effect (0 100%)
  **Color Picker**: Select custom colors for the effects
  **Size Control**: Modify the scale of the visual effects

## 🔒 Privacy

This application:
  Only processes hand tracking data in real time
  Does not store or transmit any video data
  Runs entirely in your browser
  Requires camera permissions for hand tracking

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout  b feature/AmazingFeature`)
3. Commit your changes (`git commit  m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License   see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

  [MediaPipe](https://mediapipe.dev/) for the hand tracking technology
  [Tailwind CSS](https://tailwindcss.com/) for the styling system
  [Lucide](https://lucide.dev/) for the beautiful icons
