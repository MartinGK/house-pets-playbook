import { FaTriangleExclamation } from 'react-icons/fa6';
import type { FoodRule } from '../data/siteConfig';
import { Section } from './Section';

interface FoodWarningsProps {
  title: string;
  items: FoodRule[];
}

export function FoodWarnings({ title, items }: FoodWarningsProps) {
  return (
    <Section id="comida" title={title}>
      <ul className="list clean-list">
        {items.map((item) => (
          <li key={item.id} className={`card list-item ${item.isWarning ? 'warning-item' : ''}`}>
            {item.isWarning ? <FaTriangleExclamation aria-hidden="true" /> : <span>•</span>}
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
