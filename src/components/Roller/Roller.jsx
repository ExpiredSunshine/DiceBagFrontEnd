import './Roller.css';
import DiceCards from './DiceCards/index.jsx';
import RollHistory from './RollHistory/index.jsx';

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
