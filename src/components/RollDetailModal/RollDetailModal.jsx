import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './RollDetailModal.css';

function RollDetailModal({ isOpen, onClose, rollData }) {
  // Parse roll data to extract individual die results
  const parseRollData = details => {
    // Example: "2D6: 3, 5 (Total: 8)" or "1D20: 17"
    const match = details.match(
      /(\d+)D(\d+):\s*(.+?)(?:\s*\(Total:\s*(\d+)\))?$/
    );
    if (!match) return null;

    const [, count, sides, results, total] = match;
    const individualResults = results.split(',').map(r => parseInt(r.trim()));

    return {
      count: parseInt(count),
      sides: parseInt(sides),
      results: individualResults,
      total: total ? parseInt(total) : individualResults[0],
    };
  };

  const parsedRoll = rollData ? parseRollData(rollData.details) : null;

  const handleClose = () => {
    onClose();
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      handleCloseClick={handleClose}
      title="Roll Details"
      buttonText=""
      onSubmit={handleClose}
      isFormValid={true}
      className="roll-detail-modal"
      hideButtons={true}
    >
      {() => (
        <>
          {rollData && parsedRoll ? (
            <>
              <div className="roll-detail-modal__header">
                <div className="roll-detail-modal__timestamp">
                  {rollData.timestamp}
                </div>
                <div className="roll-detail-modal__notation">
                  {parsedRoll.count > 1
                    ? `${parsedRoll.count}d${parsedRoll.sides}`
                    : `d${parsedRoll.sides}`}
                </div>
              </div>

              <div className="roll-detail-modal__summary">
                <div className="roll-detail-modal__total">
                  Total:{' '}
                  <span className="roll-detail-modal__total-value">
                    {parsedRoll.total}
                  </span>
                </div>
                <div className="roll-detail-modal__average">
                  Average:{' '}
                  <span className="roll-detail-modal__average-value">
                    {(parsedRoll.total / parsedRoll.count).toFixed(1)}
                  </span>
                </div>
              </div>

              <div className="roll-detail-modal__section">
                <h3 className="roll-detail-modal__section-title">
                  Individual Results
                </h3>
                <div className="roll-detail-modal__dice-results">
                  {parsedRoll.results.map((result, index) => (
                    <div key={index} className="roll-detail-modal__die-result">
                      <div className="roll-detail-modal__die-type">
                        d{parsedRoll.sides}
                      </div>
                      <div className="roll-detail-modal__die-number">
                        {result}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="roll-detail-modal__error">
              Unable to parse roll data
            </div>
          )}
        </>
      )}
    </ModalWithForm>
  );
}

export default RollDetailModal;
