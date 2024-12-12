import React from 'react';
import HandTracking from './components/HandTracking';
import Controls from './components/Controls';

function App() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <HandTracking />
      <Controls />
    </div>
  );
}

export default App;