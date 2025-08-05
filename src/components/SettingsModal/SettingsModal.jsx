import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/useAuth';
import { updateUserProfile } from '../../api/authApi';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './SettingsModal.css';

function SettingsModal({ isOpen, onClose }) {
  const { currentUser, updateCurrentUser } = useAuth();
  const [formData, setFormData] = useState({
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    avatarUrl: currentUser?.avatar || '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Update form data when currentUser changes
  useEffect(() => {
    if (currentUser) {
      setFormData({
        name: currentUser.name || '',
        email: currentUser.email || '',
        avatarUrl: currentUser.avatar || '',
      });
    }
  }, [currentUser]);

  const handleSubmit = async data => {
    setIsSubmitting(true);
    setError('');

    try {
      const token = localStorage.getItem('jwt');
      const result = await updateUserProfile(
        {
          name: data.name,
          email: data.email,
          avatar: data.avatarUrl || '',
        },
        token
      );

      // Update the current user in context
      updateCurrentUser(result.user);

      onClose();
    } catch (err) {
      setError(err.message || 'Failed to update profile');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormDataChange = newData => {
    setFormData(newData);
    setError('');
  };

  const isFormValid = formData.name && formData.email && !isSubmitting;

  return (
    <ModalWithForm
      isOpen={isOpen}
      handleCloseClick={onClose}
      title="Settings"
      buttonText={isSubmitting ? 'Saving...' : 'Save Changes'}
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
          {error && (
            <div className="modal__error modal__error--global">{error}</div>
          )}

          <div className="modal__form-group">
            <label htmlFor="name" className="modal__label">
              Username *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name || ''}
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
