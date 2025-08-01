import { useState } from 'react';
import './RollHistory.css';
import trashImage from '../../../assets/images/Trash.png';
import RollDetailModal from '../../RollDetailModal/RollDetailModal';

function RollHistory() {
  const [selectedRoll, setSelectedRoll] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Sample roll data - in a real app, this would come from props or state
  const rollEntries = [
    { timestamp: '2:45 PM', details: '2D6: 3, 5 (Total: 8)' },
    { timestamp: '2:42 PM', details: '1D20: 17' },
    { timestamp: '2:38 PM', details: '3D4: 2, 4, 1 (Total: 7)' },
    { timestamp: '2:35 PM', details: '1D12: 9' },
    { timestamp: '2:30 PM', details: '2D10: 7, 3 (Total: 10)' },
    { timestamp: '2:25 PM', details: '1D8: 6' },
    { timestamp: '2:20 PM', details: '1D100: 73' },
    { timestamp: '2:15 PM', details: '4D6: 5, 2, 6, 1 (Total: 14)' },
  ];

  const handleRollClick = roll => {
    setSelectedRoll(roll);
    setIsDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedRoll(null);
  };

  return (
    <div className="roll_history__section">
      <div className="roll_history__header">
        <img src={trashImage} alt="clear history" className="history_trash" />
        <h2 className="roll_history__title">Roll History</h2>
      </div>
      <div className="roll_history__entries">
        {rollEntries.map((roll, index) => (
          <div
            key={index}
            className="roll_history__entry"
            onClick={() => handleRollClick(roll)}
            style={{ cursor: 'pointer' }}
          >
            <div className="roll_history__timestamp">{roll.timestamp}</div>
            <div className="roll_history__details">{roll.details}</div>
          </div>
        ))}
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
