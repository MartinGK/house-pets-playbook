import { FaCheck } from 'react-icons/fa6';
import type { RoutineItem } from '../data/siteConfig';
import { Section } from './Section';

interface DailyRoutineProps {
  items: RoutineItem[];
}

export function DailyRoutine({ items }: DailyRoutineProps) {
  return (
    <Section id="rutina" title="Rutina diaria">
      <ul className="list clean-list">
        {items.map((item) => (
          <li key={item.id} className="card list-item">
            <FaCheck aria-hidden="true" />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
