import { FaPumpSoap } from 'react-icons/fa6';
import { Section } from './Section';

interface LitterBoxProps {
  text: string;
}

export function LitterBox({ text }: LitterBoxProps) {
  return (
    <Section id="arenero" title="Arenero">
      <article className="card simple-card">
        <FaPumpSoap aria-hidden="true" />
        <p>{text}</p>
      </article>
    </Section>
  );
}
