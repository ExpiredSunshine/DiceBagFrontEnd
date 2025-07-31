import { useEffect } from 'react';

function useModalClose(isOpen, handleCloseClick) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = e => {
      if (e.key === 'Escape') {
        handleCloseClick();
      }
    };

    const handleOverlayClick = e => {
      if (e.target.classList.contains('modal')) {
        handleCloseClick();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleOverlayClick);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleOverlayClick);
    };
  }, [isOpen, handleCloseClick]);
}

export default useModalClose;
