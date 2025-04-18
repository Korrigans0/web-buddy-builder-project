
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

type DiceType = 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20' | 'd100';

const DiceRoller = () => {
  const [selectedDice, setSelectedDice] = useState<DiceType>('d20');
  const [result, setResult] = useState<number | null>(null);
  const [rolling, setRolling] = useState(false);
  const [diceCount, setDiceCount] = useState(1);

  const diceOptions: DiceType[] = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20', 'd100'];
  
  const getMaxValue = (dice: DiceType): number => {
    return parseInt(dice.substring(1));
  };

  const rollDice = () => {
    if (rolling) return;
    
    setRolling(true);
    setResult(null);
    
    // Simulate dice roll animation
    let rollCount = 0;
    const maxRolls = 10; // Number of "animation" frames
    const interval = setInterval(() => {
      const max = getMaxValue(selectedDice);
      const tempResult = Math.floor(Math.random() * max) + 1;
      setResult(tempResult);
      
      rollCount++;
      if (rollCount >= maxRolls) {
        clearInterval(interval);
        setRolling(false);
      }
    }, 100);
  };

  const handleDiceCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0 && value <= 10) {
      setDiceCount(value);
    }
  };

  // Calculate total for multiple dice
  const calculateTotal = (result: number): number => {
    return result * diceCount;
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="mb-6 flex flex-col items-center space-y-2">
        <div className={`dice-container ${rolling ? 'animate-bounce' : ''} bg-[#e8d8c0] rounded-lg w-32 h-32 flex items-center justify-center shadow-lg mb-2`}>
          <span className="text-6xl font-bold text-[#7c2020]">
            {result === null ? '?' : result}
          </span>
        </div>
        
        <div className="text-2xl font-bold">
          {result !== null && diceCount > 1 && (
            <div className="text-center">
              <span>Total: {calculateTotal(result)}</span>
              <div className="text-sm text-gray-600">{diceCount} × {result}</div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {diceOptions.map((dice) => (
          <Button
            key={dice}
            onClick={() => setSelectedDice(dice)}
            variant={selectedDice === dice ? "default" : "outline"}
            className={selectedDice === dice ? "bg-[#7c2020] hover:bg-[#5c1717]" : ""}
          >
            {dice}
          </Button>
        ))}
      </div>

      <div className="mb-4 flex items-center gap-3">
        <label htmlFor="diceCount" className="text-sm font-medium">
          Nombre de dés:
        </label>
        <input
          id="diceCount"
          type="number"
          min="1"
          max="10"
          value={diceCount}
          onChange={handleDiceCount}
          className="w-16 p-2 border rounded"
        />
      </div>

      <Button 
        onClick={rollDice} 
        disabled={rolling}
        className="px-6 py-3 text-lg bg-[#7c2020] hover:bg-[#5c1717]"
      >
        {rolling ? "Lancement..." : "Lancer les dés"}
      </Button>
    </div>
  );
};

export default DiceRoller;
