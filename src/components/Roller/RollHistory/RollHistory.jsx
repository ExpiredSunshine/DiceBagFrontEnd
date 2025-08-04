import { useState } from 'react';
import './RollHistory.css';
import trashImage from '../../../assets/images/Trash.png';
import RollDetailModal from '../../RollDetailModal/RollDetailModal';

function RollHistory({
  rollHistory = [],
  onClearHistory,
  isLoading = false,
  error = null,
  historyLimit = 50,
  isLoggedIn = false,
}) {
  const [selectedRoll, setSelectedRoll] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const handleRollClick = roll => {
    setSelectedRoll(roll);
    setIsDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedRoll(null);
  };

  const handleClearHistory = () => {
    if (onClearHistory) {
      onClearHistory();
    }
  };

  return (
    <div className="roll_history__section">
      <div className="roll_history__header">
        <div className="roll_history__header_top">
          <img
            src={trashImage}
            alt="clear history"
            className="history_trash"
            onClick={handleClearHistory}
            style={{ cursor: 'pointer' }}
          />
          <h2 className="roll_history__title">Roll History</h2>
        </div>
      </div>
      <div className="roll_history__entries">
        {isLoading ? (
          <div className="roll_history__loading">Loading history...</div>
        ) : error ? (
          <div className="roll_history__error">{error}</div>
        ) : rollHistory.length === 0 ? (
          <div className="roll_history__empty">no history yet</div>
        ) : (
          rollHistory.map(roll => (
            <div
              key={roll.id}
              className="roll_history__entry"
              onClick={() => handleRollClick(roll)}
              style={{ cursor: 'pointer' }}
            >
              <div className="roll_history__timestamp">
                {new Date(roll.timestamp).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
              <div className="roll_history__details">
                {roll.diceRolled} (Total: {roll.total})
              </div>
            </div>
          ))
        )}
      </div>

      <RollDetailModal
        isOpen={isDetailModalOpen}
        onClose={handleCloseDetailModal}
        rollData={selectedRoll}
      />
    </div>
  );
}

export default RollHistory;
