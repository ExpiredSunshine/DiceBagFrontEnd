import { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './SettingsModal.css';

function SettingsModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    username: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: '',
  });

  const handleSubmit = data => {
    console.log('Settings form submitted:', data);
    // TODO: Add actual settings update functionality
    onClose();
  };

  const handleFormDataChange = newData => {
    setFormData(newData);
  };

  const isFormValid = formData.username && formData.email;

  return (
    <ModalWithForm
      isOpen={isOpen}
      handleCloseClick={onClose}
      title="Settings"
      buttonText="Save Changes"
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
      initialFormData={formData}
      onFormDataChange={handleFormDataChange}
      secondaryAction={{
        text: 'Cancel',
        onClick: onClose,
      }}
      className="settings-modal"
    >
      {(formData, handleInputChange) => (
        <>
          <div className="modal__form-group">
            <label htmlFor="username" className="modal__label">
              Username *
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username || ''}
              onChange={handleInputChange}
              className="modal__input"
              placeholder="Enter your username"
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
            <label htmlFor="avatarUrl" className="modal__label">
              Avatar URL
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

export default SettingsModal;
