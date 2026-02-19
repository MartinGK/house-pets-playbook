import { useEffect, useRef, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa6';
import { Section } from './Section';

interface SpecialCallProps {
  title: string;
  audioSrc: string;
  playLabel: string;
  stopLabel: string;
  rewardTip: string;
  diegoNote: string;
}

export function SpecialCall({
  title,
  audioSrc,
  playLabel,
  stopLabel,
  rewardTip,
  diegoNote
}: SpecialCallProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioAvailable, setAudioAvailable] = useState(Boolean(audioSrc));

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    const onEnded = () => setIsPlaying(false);
    const onError = () => {
      setAudioAvailable(false);
      setIsPlaying(false);
    };

    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);

    return () => {
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
    };
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio || !audioAvailable) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setAudioAvailable(false);
      setIsPlaying(false);
    }
  };

  return (
    <Section id="llamado-especial" title={title}>
      <div className="card special-call-card">
        <audio ref={audioRef} src={audioSrc} preload="none" />
        <button
          type="button"
          className="btn btn-primary"
          onClick={togglePlayback}
          disabled={!audioAvailable}
        >
          {isPlaying ? <FaPause aria-hidden="true" /> : <FaPlay aria-hidden="true" />}
          {isPlaying ? stopLabel : playLabel}
        </button>
        {!audioAvailable && (
          <p className="helper-error">Audio no disponible por ahora (faltante o con error).</p>
        )}
        <p>{rewardTip}</p>
        <p className="note">{diegoNote}</p>
      </div>
    </Section>
  );
}
