import { useState } from 'react';

interface FallbackImageProps {
  src: string;
  alt: string;
  label: string;
  onPress?: () => void;
}

export function FallbackImage({ src, alt, label, onPress }: FallbackImageProps) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div className="image-placeholder" role="img" aria-label={`Placeholder de ${label}`}>
        <span>{label}</span>
        <small>Foto pendiente</small>
      </div>
    );
  }

  if (onPress) {
    return (
      <button type="button" className="image-trigger" onClick={onPress} aria-label={`Ver imagen de ${label}`}>
        <img src={src} alt={alt} onError={() => setErrored(true)} loading="lazy" />
      </button>
    );
  }

  return <img src={src} alt={alt} onError={() => setErrored(true)} loading="lazy" />;
}
