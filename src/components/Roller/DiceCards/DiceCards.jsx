import './DiceCards.css';
import { useState } from 'react';
import d4Image from '../../../assets/images/d4.png';
import d6Image from '../../../assets/images/d6.png';
import d8Image from '../../../assets/images/d8.png';
import d10Image from '../../../assets/images/d10.png';
import d12Image from '../../../assets/images/d12.png';
import d20Image from '../../../assets/images/d20.png';
import d100Image from '../../../assets/images/d100.png';
import arrowUp from '../../../assets/images/arrow_up.png';
import arrowDown from '../../../assets/images/arrow_down.png';
import trashImage from '../../../assets/images/Trash.png';

function DiceCards() {
  // Initialize state for all dice quantities
  const [diceQuantities, setDiceQuantities] = useState({
    d4: 0,
    d6: 0,
    d8: 0,
    d10: 0,
    d12: 0,
    d20: 0,
    d100: 0,
  });

  // Dice configuration array
  const diceConfig = [
    { type: 'd4', image: d4Image, maxValue: 4 },
    { type: 'd6', image: d6Image, maxValue: 6 },
    { type: 'd8', image: d8Image, maxValue: 8 },
    { type: 'd10', image: d10Image, maxValue: 10 },
    { type: 'd12', image: d12Image, maxValue: 12 },
    { type: 'd20', image: d20Image, maxValue: 20 },
    { type: 'd100', image: d100Image, maxValue: 100 },
  ];

  // Handle quantity increase
  const handleIncrease = diceType => {
    setDiceQuantities(prev => ({
      ...prev,
      [diceType]: prev[diceType] + 1,
    }));
  };

  // Handle quantity decrease (never go below 0)
  const handleDecrease = diceType => {
    setDiceQuantities(prev => ({
      ...prev,
      [diceType]: Math.max(0, prev[diceType] - 1),
    }));
  };

  // Handle reset quantity to 0
  const handleReset = diceType => {
    setDiceQuantities(prev => ({
      ...prev,
      [diceType]: 0,
    }));
  };

  // Handle reset all dice quantities to 0
  const handleResetAll = () => {
    setDiceQuantities({
      d4: 0,
      d6: 0,
      d8: 0,
      d10: 0,
      d12: 0,
      d20: 0,
      d100: 0,
    });
  };

  // Handle continuous increment/decrement on mouse hold
  const [holdInterval, setHoldInterval] = useState(null);

  const startHold = (diceType, action) => {
    // Initial action
    action(diceType);

    // Set up interval for continuous action
    const interval = setInterval(() => {
      action(diceType);
    }, 100); // Repeat every 100ms

    setHoldInterval(interval);
  };

  const stopHold = () => {
    if (holdInterval) {
      clearInterval(holdInterval);
      setHoldInterval(null);
    }
  };

  return (
    <div className="dice_card__section">
      <div className="dice_cards_container">
        {diceConfig.map(dice => (
          <div key={dice.type} className="dice_card">
            <div className="dice_image">
              <img src={dice.image} alt={`${dice.type.toUpperCase()} dice`} />
            </div>
            <div className="dice_label">
              <div className="dice_card__arrows">
                <img
                  src={arrowUp}
                  alt="arrow up"
                  className="up_arrow"
                  onMouseDown={() => startHold(dice.type, handleIncrease)}
                  onMouseUp={stopHold}
                  onMouseLeave={stopHold}
                />
                <img
                  src={arrowDown}
                  alt="arrow down"
                  className={`down_arrow ${diceQuantities[dice.type] === 0 ? 'disabled' : ''}`}
                  onMouseDown={() =>
                    diceQuantities[dice.type] > 0 &&
                    startHold(dice.type, handleDecrease)
                  }
                  onMouseUp={stopHold}
                  onMouseLeave={stopHold}
                />
              </div>
              <h3 className="dice_title">
                {diceQuantities[dice.type]}D{dice.maxValue}
              </h3>
              <img
                src={trashImage}
                alt="delete"
                className="trash_icon"
                onClick={() => handleReset(dice.type)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="roll_section">
        <button className="roll_button">roll all</button>
        <img
          src={trashImage}
          alt="clear all"
          className="clear_all_icon"
          onClick={handleResetAll}
        />
      </div>
    </div>
  );
}

export default DiceCards;
