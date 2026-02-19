import { FaPaw } from 'react-icons/fa6';
import type { SpecialCaseItem } from '../data/siteConfig';
import { Section } from './Section';

interface ThingsHappenProps {
  items: SpecialCaseItem[];
}

export function ThingsHappen({ items }: ThingsHappenProps) {
  return (
    <Section id="pasan-cosas" title="Pasan que cosas">
      <div className="grid two-cols">
        {items.map((item) => (
          <article key={item.id} className="card humor-card">
            <div className="humor-title">
              <FaPaw aria-hidden="true" />
              <h3>{item.title}</h3>
            </div>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
