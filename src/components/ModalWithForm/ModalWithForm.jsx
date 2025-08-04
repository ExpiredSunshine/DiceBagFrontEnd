import { useState, useEffect, useCallback, useRef } from 'react';
import './ModalWithForm.css';
import useModalClose from '../../utils/useModalClose';

function ModalWithForm({
  children,
  buttonText = 'Submit',
  title = 'Modal',
  isOpen,
  handleCloseClick,
  onSubmit,
  isFormValid = true,
  secondaryAction,
  initialFormData = {},
  onFormDataChange,
  className = '',
  hideButtons = false,
}) {
  const [formData, setFormData] = useState(initialFormData);
  const previousFormDataRef = useRef(formData);

  // Stabilize the close handler to prevent infinite re-renders
  const stableHandleClose = useCallback(() => {
    setFormData(initialFormData);
    handleCloseClick();
  }, [handleCloseClick, initialFormData]);

  useModalClose(isOpen, stableHandleClose);

  // Reset form data when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData(initialFormData);
    }
  }, [isOpen, initialFormData]);

  // Call onFormDataChange when formData changes (only if provided)
  useEffect(() => {
    if (onFormDataChange && formData !== previousFormDataRef.current) {
      previousFormDataRef.current = formData;
      onFormDataChange(formData);
    }
  }, [formData, onFormDataChange]); // Add onFormDataChange to dependencies

  const handleInputChange = useCallback(e => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: newValue,
    }));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const handleClose = stableHandleClose;

  return (
    <div className={`modal ${isOpen && 'modal_opened'}`}>
      <div className={`modal__content ${className}`}>
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={handleClose}
          type="button"
          className="modal__close"
          aria-label="Close modal"
        />
        <form onSubmit={handleSubmit} className="modal__form">
          {typeof children === 'function'
            ? children(formData, handleInputChange)
            : children}
          {!hideButtons && (
            <div className="modal__buttons">
              <button
                type="submit"
                className="modal__submit"
                disabled={!isFormValid}
              >
                {buttonText}
              </button>
              {secondaryAction && (
                <button
                  type="button"
                  className="modal__secondary-btn"
                  onClick={secondaryAction.onClick}
                >
                  {secondaryAction.text}
                </button>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
