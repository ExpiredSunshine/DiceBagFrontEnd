import { useState } from 'react';
import './Roller.css';
import DiceCards from './DiceCards/DiceCards.jsx';
import RollHistory from './RollHistory/RollHistory.jsx';

function Roller() {
  const [rollHistory, setRollHistory] = useState([]);

  const addRollToHistory = rollData => {
    const formattedRoll = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      diceRolled: rollData.rolls
        .map(roll => `${roll.quantity}${roll.diceType}`)
        .join(', '),
      total: rollData.grandTotal,
      details: rollData.rolls,
    };

    setRollHistory(prev => [formattedRoll, ...prev.slice(0, 49)]);
  };

  const clearRollHistory = () => {
    setRollHistory([]);
  };

  return (
    <div className="main">
      <div className="roller_container">
        <DiceCards onAddRollToHistory={addRollToHistory} />
        <RollHistory
          rollHistory={rollHistory}
          onClearHistory={clearRollHistory}
        />
      </div>
    </div>
  );
}

export default Roller;
