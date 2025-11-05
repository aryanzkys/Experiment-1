import { useState } from 'react';
import './index.css';
import CountdownTimer from './components/CountdownTimer';
import LifeStats from './components/LifeStats';
import { Button } from './components/ui/button';
import BackgroundParticles from './components/BackgroundParticles';

function App() {
  // State to control the pause/resume functionality for all timers
  const [isPaused, setIsPaused] = useState(false);

  // Toggles the paused state
  const togglePause = () => {
    setIsPaused(prev => !prev);
  };

  return (
    // The main container, applying a grayscale filter when paused
    <div className={`relative bg-[#F5EDE3] min-h-screen flex flex-col items-center justify-center font-sans text-gray-800 p-4 overflow-hidden transition-colors duration-500 ${isPaused ? 'filter grayscale-[50%]' : ''}`}>
      <BackgroundParticles />

      {/* Header Section */}
      <header className="text-center my-8 z-10">
        <h1 className="text-4xl md:text-5xl font-bold">Aryan’s Life Clock</h1>
        <p className="text-md md:text-lg mt-2 text-gray-600">Celebrating every heartbeat since 2007.</p>
      </header>

      {/* Main Content Section */}
      <main className="w-full max-w-5xl mx-auto p-4 flex flex-col items-center z-10">
        <div className="mb-8">
          <CountdownTimer isPaused={isPaused} />
        </div>

        <div className="mb-8">
          <Button onClick={togglePause} variant="outline" className="rounded-full px-8 py-4 bg-white/20 backdrop-blur-sm shadow-lg">
            {isPaused ? 'Resume Life Clock' : 'Pause Life Clock'}
          </Button>
        </div>

        <LifeStats isPaused={isPaused} />
      </main>

      {/* Footer Section */}
      <footer className="text-center my-8 z-10">
        <p className="text-md md:text-lg italic text-gray-500">“Every second counts - make it timeless.”</p>
      </footer>
    </div>
  );
}

export default App;
