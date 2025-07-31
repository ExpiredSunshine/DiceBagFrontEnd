import { useState } from 'react';
import ModalWithForm from './ModalWithForm';

function ModalExample() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = data => {
    console.log('Form submitted with data:', data);
    // Handle form submission here
    handleCloseModal();
  };

  const handleFormDataChange = newData => {
    setFormData(newData);
  };

  const isFormValid = formData.name && formData.email;

  return (
    <div>
      <button
        onClick={handleOpenModal}
        style={{
          padding: '12px 24px',
          backgroundColor: '#860000',
          color: 'white',
          border: '3px solid #000000',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '600',
        }}
      >
        Open Example Modal
      </button>

      <ModalWithForm
        isOpen={isModalOpen}
        handleCloseClick={handleCloseModal}
        title="Example Form"
        buttonText="Submit"
        onSubmit={handleSubmit}
        isFormValid={isFormValid}
        initialFormData={{
          name: '',
          email: '',
          message: '',
          agree: false,
        }}
        onFormDataChange={handleFormDataChange}
        secondaryAction={{
          text: 'Cancel',
          onClick: handleCloseModal,
        }}
      >
        {(formData, handleInputChange) => (
          <>
            <div className="modal__form-group">
              <label htmlFor="name" className="modal__label">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name || ''}
                onChange={handleInputChange}
                className="modal__input"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="modal__form-group">
              <label htmlFor="email" className="modal__label">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email || ''}
                onChange={handleInputChange}
                className="modal__input"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="modal__form-group">
              <label htmlFor="message" className="modal__label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message || ''}
                onChange={handleInputChange}
                className="modal__textarea"
                placeholder="Enter your message"
                rows="4"
              />
            </div>

            <div className="modal__checkbox-group">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={formData.agree || false}
                onChange={handleInputChange}
                className="modal__checkbox"
              />
              <label htmlFor="agree" className="modal__checkbox-label">
                I agree to the terms and conditions
              </label>
            </div>
          </>
        )}
      </ModalWithForm>
    </div>
  );
}

export default ModalExample;
