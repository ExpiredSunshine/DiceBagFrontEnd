import './Roller.css';
import DiceCards from './DiceCards/DiceCards.jsx';
import RollHistory from './RollHistory/RollHistory.jsx';

function Roller() {
  return (
    <div className="main">
      <div className="roller_container">
        <DiceCards />
        <RollHistory />
      </div>
    </div>
  );
}

export default Roller;
