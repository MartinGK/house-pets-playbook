import type { PropsWithChildren } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

interface SectionProps extends PropsWithChildren {
  id: string;
  title: string;
}

export function Section({ id, title, children }: SectionProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>();

  return (
    <section id={id} ref={ref} className={`section reveal ${isVisible ? 'visible' : ''}`}>
      <h2>{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
}
