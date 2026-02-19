import { FaCat, FaDog } from 'react-icons/fa6';

interface SignatureProps {
  maca: string;
  siblings: string;
}

export function Signature({ maca, siblings }: SignatureProps) {
  return (
    <div className="signature">
      <p>
        {maca} <FaDog aria-label="icono perro" className="dog-icon" />
      </p>
      <p>
        {siblings} <FaCat aria-label="icono gato" className="cat-icon" />{' '}
        <FaCat aria-hidden="true" className="cat-icon" />
      </p>
    </div>
  );
}
