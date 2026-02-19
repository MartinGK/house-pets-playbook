import { FaUpRightFromSquare } from 'react-icons/fa6';
import { Section } from './Section';

interface ForbiddenFoodsGuideProps {
  title: string;
  text: string;
  buttonLabel: string;
  href: string;
}

export function ForbiddenFoodsGuide({ title, text, buttonLabel, href }: ForbiddenFoodsGuideProps) {
  return (
    <Section id="comidas-prohibidas" title={title}>
      <article className="card guide-card">
        <p>{text}</p>
        <a className="btn btn-primary guide-link" href={href}>
          <FaUpRightFromSquare aria-hidden="true" />
          {buttonLabel}
        </a>
      </article>
    </Section>
  );
}
