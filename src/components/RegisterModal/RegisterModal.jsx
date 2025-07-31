import { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './RegisterModal.css';

function RegisterModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    avatarUrl: '',
  });

  const handleSubmit = data => {
    console.log('Registration form submitted:', data);
    // TODO: Add actual registration functionality
    onClose();
  };

  const handleFormDataChange = newData => {
    setFormData(newData);
  };

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.password &&
    formData.password.length >= 6;

  return (
    <ModalWithForm
      isOpen={isOpen}
      handleCloseClick={onClose}
      title="Create Account"
      buttonText="Register"
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
      initialFormData={formData}
      onFormDataChange={handleFormDataChange}
      secondaryAction={{
        text: 'Cancel',
        onClick: onClose,
      }}
      className="register-modal"
    >
      {(formData, handleInputChange) => (
        <>
          <div className="modal__form-group">
            <label htmlFor="name" className="modal__label">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name || ''}
              onChange={handleInputChange}
              className="modal__input"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="modal__form-group">
            <label htmlFor="email" className="modal__label">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email || ''}
              onChange={handleInputChange}
              className="modal__input"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="modal__form-group">
            <label htmlFor="password" className="modal__label">
              Password *
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password || ''}
              onChange={handleInputChange}
              className="modal__input"
              placeholder="Create a password (min 6 characters)"
              required
            />
            {formData.password && formData.password.length < 6 && (
              <div className="modal__error">
                Password must be at least 6 characters
              </div>
            )}
          </div>

          <div className="modal__form-group">
            <label htmlFor="avatarUrl" className="modal__label">
              Avatar URL (Optional)
            </label>
            <input
              type="url"
              id="avatarUrl"
              name="avatarUrl"
              value={formData.avatarUrl || ''}
              onChange={handleInputChange}
              className="modal__input"
              placeholder="Enter URL for your avatar image"
            />
          </div>
        </>
      )}
    </ModalWithForm>
  );
}

export default RegisterModal;
