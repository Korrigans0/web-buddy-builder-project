
import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Dices, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'lucide-react';

interface DieProps {
  position: [number, number, number];
  rotation: [number, number, number];
  value: number;
}

const Die = ({ position, rotation, value }: DieProps) => {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#8c6142" />
    </mesh>
  );
};

const DiceScene = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Die position={[0, 0, 0]} rotation={[0, 0, 0]} value={1} />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

const DiceRoller = () => {
  const [result, setResult] = useState<number>(1);
  const [isRolling, setIsRolling] = useState(false);

  const getDiceIcon = (value: number) => {
    switch (value) {
      case 1: return <Dice1 />;
      case 2: return <Dice2 />;
      case 3: return <Dice3 />;
      case 4: return <Dice4 />;
      case 5: return <Dice5 />;
      case 6: return <Dice6 />;
      default: return <Dices />;
    }
  };

  const rollDice = () => {
    setIsRolling(true);
    const rollDuration = 1000;
    const rolls = 10;
    let currentRoll = 0;

    const rollInterval = setInterval(() => {
      const newValue = Math.floor(Math.random() * 6) + 1;
      setResult(newValue);
      currentRoll++;

      if (currentRoll >= rolls) {
        clearInterval(rollInterval);
        setIsRolling(false);
      }
    }, rollDuration / rolls);
  };

  return (
    <div className="space-y-4">
      <div className="h-[300px] bg-[#2a1810] rounded-lg overflow-hidden">
        <DiceScene />
      </div>
      
      <div className="flex flex-col items-center gap-4">
        <div className="text-4xl text-[#8c6142]">
          {getDiceIcon(result)}
        </div>
        
        <Button
          onClick={rollDice}
          disabled={isRolling}
          className="bg-[#8c6142] hover:bg-[#6d4a34]"
        >
          {isRolling ? "Lancement..." : "Lancer le dé"}
        </Button>
        
        <div className="text-2xl font-bold text-[#50331f]">
          {result}
        </div>
      </div>
    </div>
  );
};

export default DiceRoller;
