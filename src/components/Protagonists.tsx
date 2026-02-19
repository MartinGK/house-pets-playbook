import { useMemo, useState } from 'react';
import type { PetProfile } from '../data/siteConfig';
import { FallbackImage } from './FallbackImage';
import { ImageModal } from './ImageModal';
import { Section } from './Section';

interface ProtagonistsProps {
  pets: PetProfile[];
}

function pickRandomImage(imageSources: string[]) {
  if (imageSources.length === 0) {
    return '';
  }

  const randomIndex = Math.floor(Math.random() * imageSources.length);
  return imageSources[randomIndex];
}

export function Protagonists({ pets }: ProtagonistsProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const randomPhotosByPet = useMemo(
    () =>
      pets.map((pet) => ({
        ...pet,
        selectedImage: pickRandomImage(pet.imageSources)
      })),
    [pets]
  );

  return (
    <Section id="protagonistas" title="Los protagonistas">
      <div className="grid three-cols">
        {randomPhotosByPet.map((pet) => (
          <article key={pet.name} className="card pet-card">
            <FallbackImage
              src={pet.selectedImage}
              alt={pet.imageAlt}
              label={pet.name}
              onPress={() => setSelectedImage({ src: pet.selectedImage, alt: pet.imageAlt })}
            />
            <h3>{pet.name}</h3>
            <p className="pet-subtitle">{pet.subtitle}</p>
            <p>{pet.description}</p>
          </article>
        ))}
      </div>
      <ImageModal
        src={selectedImage?.src ?? ''}
        alt={selectedImage?.alt ?? 'Imagen ampliada de mascota'}
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
      />
    </Section>
  );
}
