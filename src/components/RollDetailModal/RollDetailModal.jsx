import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './RollDetailModal.css';

function RollDetailModal({ isOpen, onClose, rollData }) {
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
          {rollData && rollData.details ? (
            <>
              <div className="roll-detail-modal__header">
                <div className="roll-detail-modal__timestamp">
                  {new Date(rollData.timestamp).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
                <div className="roll-detail-modal__notation">
                  {rollData.diceRolled}
                </div>
              </div>

              <div className="roll-detail-modal__summary">
                <div className="roll-detail-modal__total">
                  Total:{' '}
                  <span className="roll-detail-modal__total-value">
                    {rollData.total}
                  </span>
                </div>
              </div>

              {rollData.details.map((roll, index) => (
                <div key={index} className="roll-detail-modal__section">
                  <h3 className="roll-detail-modal__section-title">
                    {roll.quantity}D{roll.diceType.replace('d', '')} - Total:{' '}
                    {roll.total}
                  </h3>
                  <div className="roll-detail-modal__dice-results">
                    {roll.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="roll-detail-modal__die-result"
                      >
                        <div className="roll-detail-modal__die-type">
                          d{roll.diceType.replace('d', '')}
                        </div>
                        <div className="roll-detail-modal__die-number">
                          {result}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="roll-detail-modal__error">
              Unable to display roll data
            </div>
          )}
        </>
      )}
    </ModalWithForm>
  );
}

export default RollDetailModal;
