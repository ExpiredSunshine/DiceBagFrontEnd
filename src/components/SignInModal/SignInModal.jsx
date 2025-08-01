import { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './SignInModal.css';

function SignInModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = data => {
    console.log('Sign in form submitted:', data);
    // TODO: Add actual sign in functionality
    onClose();
  };

  const handleFormDataChange = newData => {
    setFormData(newData);
  };

  const isFormValid = formData.email && formData.password;

  return (
    <ModalWithForm
      isOpen={isOpen}
      handleCloseClick={onClose}
      title="Sign In"
      buttonText="Sign In"
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
      initialFormData={formData}
      onFormDataChange={handleFormDataChange}
      secondaryAction={{
        text: 'Cancel',
        onClick: onClose,
      }}
      className="signin-modal"
    >
      {(formData, handleInputChange) => (
        <>
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
              placeholder="Enter your password"
              required
            />
          </div>
        </>
      )}
    </ModalWithForm>
  );
}

export default SignInModal;
