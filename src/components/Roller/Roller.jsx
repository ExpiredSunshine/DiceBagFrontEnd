import './Roller.css';
import DiceCards from './DiceCards/DiceCards.jsx';
import RollHistory from './RollHistory/RollHistory.jsx';
import { useRollHistory } from '../../utils/useRollHistory';

function Roller() {
  const {
    rollHistory,
    addRoll,
    clearHistory,
    isLoading,
    error,
    getHistoryLimit,
    isLoggedIn,
  } = useRollHistory();

  return (
    <div className="main">
      <div className="roller_container">
        <DiceCards onAddRollToHistory={addRoll} />
        <RollHistory
          rollHistory={rollHistory}
          onClearHistory={clearHistory}
          isLoading={isLoading}
          error={error}
          historyLimit={getHistoryLimit()}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </div>
  );
}

export default Roller;
