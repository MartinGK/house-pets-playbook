import { FaCat, FaDog } from 'react-icons/fa6';
import { Section } from './Section';

export function Closing() {
  return (
    <Section id="cierre" title="Cierre">
      <article className="card closing-card signature">
        <p>
          Hecho con ❤️ por Maca <FaDog aria-label="icono perro" className="dog-icon" /> y los Macanas{' '}
          <FaCat aria-label="icono gato" className="cat-icon" /> <FaCat aria-hidden="true" className="cat-icon" />
        </p>
      </article>
    </Section>
  );
}
