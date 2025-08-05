import './RollDetailModal.css';
import { useEffect } from 'react';

function RollDetailModal({ isOpen, onClose, rollData }) {
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

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="roll_detail_modal_overlay" onClick={handleOverlayClick}>
      <div className="roll_detail_modal">
        <div className="roll_detail_modal_header">
          <h2 className="roll_detail_modal_title">Roll Details</h2>
          <button className="roll_detail_modal_close_button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="roll_detail_modal_content">
          {rollData && rollData.details ? (
            <>
              <div className="roll_detail_modal_summary">
                <div className="roll_detail_modal_total">
                  Total:{' '}
                  <span className="roll_detail_modal_total_value">
                    {rollData.total}
                  </span>
                </div>
                <div className="roll_detail_modal_notation">
                  {rollData.diceRolled}
                </div>
                <div className="roll_detail_modal_timestamp">
                  {new Date(rollData.timestamp).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              </div>

              {rollData.details.map((roll, index) => (
                <div key={index} className="roll_detail_modal_section">
                  <div className="roll_detail_modal_dice_results">
                    {roll.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="roll_detail_modal_die_result"
                      >
                        <div className="roll_detail_modal_die_type">
                          d{roll.diceType.replace('d', '')}
                        </div>
                        <div className="roll_detail_modal_die_number">
                          {result}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="roll_detail_modal_error">
              Unable to display roll data
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RollDetailModal;
