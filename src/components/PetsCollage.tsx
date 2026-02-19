import { useMemo, useState } from 'react';
import { MasonryPhotoAlbum, type Photo } from 'react-photo-album';
import 'react-photo-album/masonry.css';
import type { PetProfile } from '../data/siteConfig';
import { ImageModal } from './ImageModal';
import { Section } from './Section';

interface PetsCollageProps {
  pets: PetProfile[];
}

const ART_ASPECTS = [
  { width: 4, height: 5 },
  { width: 1, height: 1 },
  { width: 4, height: 3 },
  { width: 3, height: 4 }
];

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

  const mixedImages = useMemo<Photo[]>(() => {
    const allImages = pets.flatMap((pet) => pet.imageSources);
    return shuffleImages(allImages).map((imageSrc, index) => ({
      src: imageSrc,
      width: ART_ASPECTS[index % ART_ASPECTS.length].width,
      height: ART_ASPECTS[index % ART_ASPECTS.length].height,
      alt: `Foto del collage ${index + 1}`
    }));
  }, [pets]);

  return (
    <Section id="collage-fotos" title="Collage de fotos">
      <div className="collage-album-shell">
        <MasonryPhotoAlbum
          photos={mixedImages}
          spacing={12}
          padding={0}
          columns={(containerWidth) => {
            if (containerWidth < 640) return 2;
            if (containerWidth < 980) return 3;
            return 4;
          }}
          onClick={({ photo }) => setSelectedImage({ src: photo.src, alt: photo.alt ?? 'Foto del collage' })}
          componentsProps={{
            wrapper: () => ({ className: 'collage-item' }),
            button: { className: 'image-trigger collage-photo-trigger', type: 'button' },
            image: { className: 'collage-album-image', loading: 'lazy' }
          }}
        />
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
