import { useState, useCallback } from 'react';
import { useAuth } from '../../contexts/useAuth';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './RegisterModal.css';

function RegisterModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    avatarUrl: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { signUp } = useAuth();

  const handleSubmit = async data => {
    setIsSubmitting(true);
    setError('');

    try {
      const result = await signUp({
        name: data.name,
        email: data.email,
        password: data.password,
        avatar: data.avatarUrl || '',
      });

      if (result.success) {
        onClose();
        // Reset form
        setFormData({
          name: '',
          email: '',
          password: '',
          avatarUrl: '',
        });
      } else {
        setError(result.error);
      }
    } catch {
      setError('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormDataChange = useCallback(newData => {
    setFormData(newData);
    setError('');
  }, []);

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.password &&
    formData.password.length >= 6 &&
    !isSubmitting;

  return (
    <ModalWithForm
      isOpen={isOpen}
      handleCloseClick={onClose}
      title="Create Account"
      buttonText={isSubmitting ? 'Creating...' : 'Register'}
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
          {error && (
            <div className="modal__error modal__error--global">{error}</div>
          )}

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
