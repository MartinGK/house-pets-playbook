import { FaBullhorn, FaListCheck } from 'react-icons/fa6';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Hero({ title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  return (
    <header className="hero reveal visible">
      <p className="badge">House & Pets Playbook</p>
      <h1>{title}</h1>
      <p className="hero-subtitle">{subtitle}</p>
      <div className="hero-actions">
        <button type="button" className="btn btn-primary" onClick={() => scrollToId('rutina')}>
          <FaListCheck aria-hidden="true" />
          {primaryCta}
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => scrollToId('llamado-especial')}
        >
          <FaBullhorn aria-hidden="true" />
          {secondaryCta}
        </button>
      </div>
    </header>
  );
}
