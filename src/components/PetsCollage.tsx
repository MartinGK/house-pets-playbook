import { useMemo, useState } from 'react';
import type { PetProfile } from '../data/siteConfig';
import { ImageModal } from './ImageModal';
import { Section } from './Section';

interface PetsCollageProps {
  pets: PetProfile[];
}

function shuffleImages(images: string[]) {
  const shuffled = [...images];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export function PetsCollage({ pets }: PetsCollageProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const mixedImages = useMemo(() => {
    const allImages = pets.flatMap((pet) => pet.imageSources);
    return shuffleImages(allImages);
  }, [pets]);

  return (
    <Section id="collage-fotos" title="Collage de fotos">
      <div className="collage-grid">
        {mixedImages.map((imageSrc, index) => (
          <figure key={`${imageSrc}-${index}`} className="collage-item">
            <button
              type="button"
              className="image-trigger"
              onClick={() =>
                setSelectedImage({
                  src: imageSrc,
                  alt: `Foto del collage ${index + 1}`
                })
              }
              aria-label={`Ver foto ${index + 1} en grande`}
            >
              <img src={imageSrc} alt={`Foto del collage ${index + 1}`} loading="lazy" />
            </button>
          </figure>
        ))}
      </div>
      <ImageModal
        src={selectedImage?.src ?? ''}
        alt={selectedImage?.alt ?? 'Imagen ampliada del collage'}
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
      />
    </Section>
  );
}
