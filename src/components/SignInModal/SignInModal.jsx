import { useState, useCallback } from 'react';
import { useAuth } from '../../contexts/useAuth';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './SignInModal.css';

function SignInModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { signIn } = useAuth();

  const handleSubmit = async data => {
    setIsSubmitting(true);
    setError('');

    try {
      const result = await signIn({
        email: data.email,
        password: data.password,
      });

      if (result.success) {
        onClose();
        setFormData({
          email: '',
          password: '',
        });
      } else {
        setError(result.error);
      }
    } catch {
      setError('Sign in failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormDataChange = useCallback(newData => {
    setFormData(newData);
    setError('');
  }, []);

  const isFormValid = formData.email && formData.password && !isSubmitting;

  return (
    <ModalWithForm
      isOpen={isOpen}
      handleCloseClick={onClose}
      title="Sign In"
      buttonText={isSubmitting ? 'Signing In...' : 'Sign In'}
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
          {error && (
            <div className="modal__error modal__error--global">{error}</div>
          )}

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
