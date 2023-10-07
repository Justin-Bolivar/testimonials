import { useState } from 'react';
import './App.css'
import drivers from './Drivers';
import Testimony from './testimony';

function App() {
  const [currentDriverIndex, setCurrentDriverIndex] = useState(0);

  const nextDriver = () => {
    setCurrentDriverIndex((prevIndex) =>
      prevIndex === drivers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousDriver = () => {
    setCurrentDriverIndex((prevIndex) =>
      prevIndex === 0 ? drivers.length - 1 : prevIndex - 1
    );
  };

  const randomDriver = () => {
    const randomIndex = Math.floor(Math.random() * drivers.length);
    setCurrentDriverIndex(randomIndex);
  };

  const currentDriver = drivers[currentDriverIndex];

  return (
    <main>
      <Testimony
        driver={currentDriver}
        nextDriver={nextDriver}
        previousDriver={previousDriver}
        randomDriver={randomDriver}
      />
    </main>
  );
}

export default App;
