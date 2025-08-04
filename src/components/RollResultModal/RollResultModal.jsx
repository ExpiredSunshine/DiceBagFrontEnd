import './RollResultModal.css';
import { useEffect } from 'react';
import { formatRollResults } from '../../utils/diceRoller';

function RollResultModal({ isOpen, onClose, rollData, dailyLimitMessage }) {
  const formattedResults = formatRollResults(rollData);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Handle overlay click
  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Return null AFTER all hooks are called
  if (!isOpen) return null;

  return (
    <div className="roll_result_modal_overlay" onClick={handleOverlayClick}>
      <div className="roll_result_modal">
        <div className="roll_result_modal_header">
          <h2 className="roll_result_modal_title">Roll Results</h2>
          <button className="roll_result_modal_close_button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="roll_result_modal_content">
          {dailyLimitMessage && (
            <div className="roll_result_daily_limit_message">
              <p>{dailyLimitMessage}</p>
            </div>
          )}
          {rollData && rollData.grandTotal !== undefined ? (
            <>
              <div className="roll_result_summary">
                <h3 className="roll_result_total">
                  Total: {rollData.grandTotal}
                </h3>
                <p className="roll_result_timestamp">
                  {new Date(rollData.timestamp).toLocaleString()}
                </p>
              </div>
              <div className="roll_result_details">
                {formattedResults.map((result, index) => (
                  <div key={index} className="roll_result_item">
                    <span className="roll_result_text">
                      {result.displayText}
                    </span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="roll_result_placeholder">
              Roll results will be displayed here...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RollResultModal;
