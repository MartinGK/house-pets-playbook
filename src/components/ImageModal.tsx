import { useEffect } from 'react';

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageModal({ src, alt, isOpen, onClose }: ImageModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="image-modal-backdrop" role="dialog" aria-modal="true" aria-label={alt}>
      <button type="button" className="image-modal-close" onClick={onClose} aria-label="Cerrar imagen">
        ×
      </button>
      <button type="button" className="image-modal-overlay" onClick={onClose} aria-label="Cerrar modal" />
      <img className="image-modal-content" src={src} alt={alt} />
    </div>
  );
}
