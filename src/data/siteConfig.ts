export interface PetProfile {
  name: string;
  subtitle: string;
  imageSources: string[];
  imageAlt: string;
  description: string;
}

export interface RoutineItem {
  id: string;
  text: string;
}

export interface FoodRule {
  id: string;
  text: string;
  isWarning?: boolean;
}

export interface SpecialCaseItem {
  id: string;
  title: string;
  text: string;
}

export interface SiteConfig {
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  protagonists: PetProfile[];
  routine: {
    title: string;
    items: RoutineItem[];
  };
  specialCall: {
    title: string;
    audioSrc: string;
    playLabel: string;
    stopLabel: string;
    rewardTip: string;
    diegoNote: string;
  };
  foodAndWarnings: {
    title: string;
    items: FoodRule[];
  };
  litterBox: {
    title: string;
    text: string;
  };
  thingsHappen: {
    title: string;
    items: SpecialCaseItem[];
  };
  forbiddenFoodsGuide: {
    title: string;
    text: string;
    buttonLabel: string;
    href: string;
  };
  closing: {
    title: string;
    text: string;
  };
  signature: {
    maca: string;
    siblings: string;
  };
}

export const siteConfig: SiteConfig = {
  hero: {
    title: 'Manual de Convivencia 🏠🐾',
    subtitle:
      'Guía oficial para cuidar casa + peludos sin drama. Humor sí, reglas también.',
    primaryCta: 'Ver rutina',
    secondaryCta: 'Llamado especial 🔊'
  },
  protagonists: [
    {
      name: 'Maca',
      subtitle: 'Perra jefa de logística emocional',
      imageSources: ['/maca_1.jpeg', '/maca_2.jpeg', '/maca_3.jpeg', '/maca_4.jpeg', '/maca_5.jpeg'],
      imageAlt: 'Maca mirando a cámara',
      description: 'Ama el paseo diario y que todo esté en orden.'
    },
    {
      name: 'Sócrates',
      subtitle: 'Filósofo del patio',
      imageSources: [
        '/socrates_1.jpeg',
        '/socrates_2.jpeg',
        '/socrates_3.jpeg',
        '/socrates_4.jpeg',
        '/socrates_5.jpeg',
        '/socrates_6.jpeg',
        '/socrates_7.jpeg',
        '/socrates_8.jpeg'
      ],
      imageAlt: 'Sócrates descansando',
      description: 'Sale, vuelve y evalúa tus decisiones silenciosamente.'
    },
    {
      name: 'Diego Armando',
      subtitle: 'Explorador profesional',
      imageSources: [
        '/diego_1.jpeg',
        '/diego_2.jpeg',
        '/diego_3.jpeg',
        '/diego_4.jpeg',
        '/diego_5.jpeg',
        '/diego_6.jpeg'
      ],
      imageAlt: 'Diego Armando mirando de costado',
      description: 'Puede irse lejos, pero vuelve cuando escucha el llamado.'
    }
  ],
  routine: {
    title: 'Rutina diaria',
    items: [
      { id: 'cats-out', text: 'Gatos afuera 09:00-13:00.' },
      { id: 'sunscreen', text: 'Protector solar azul SPF 70.' },
      { id: 'walk', text: 'Paseo diario de Maca (sin falta).' },
      { id: 'bags', text: 'Llevar 2 bolsas en cada paseo.' },
      {
        id: 'pee-alert',
        text: 'Si Maca queda sola adentro, puede hacer pis. Mejor prevenir.'
      }
    ]
  },
  specialCall: {
    title: 'Llamado especial',
    audioSrc: '/sonido_para_gatos.m4a',
    playLabel: 'Reproducir',
    stopLabel: 'Detener',
    rewardTip: 'Cuando vuelven, refuerzo positivo con premio.',
    diegoNote: 'A veces Diego Armando no escucha porque se va más lejos.'
  },
  foodAndWarnings: {
    title: 'Comida y advertencias',
    items: [
      {
        id: 'maca-food',
        text: 'Maca come Royal Canin hipoalergénico.'
      },
      {
        id: 'siblings-food',
        text: 'Los Macana comen Old Prince cordero (su favorito), pero pueden variar.'
      },
      {
        id: 'steal-maca-food',
        text: 'También se comen la comida de Maca.'
      },
      {
        id: 'proportional',
        text: 'Repartir comida proporcional para cada uno.'
      },
      {
        id: 'cookies',
        text: 'NO dejar comida o galletitas al alcance.',
        isWarning: true
      },
      {
        id: 'bones',
        text: 'OJO: nada con espinas.',
        isWarning: true
      }
    ]
  },
  litterBox: {
    title: 'Arenero',
    text: 'Limpiar mínimo 1 vez por semana.'
  },
  thingsHappen: {
    title: 'Pasan que cosas',
    items: [
      {
        id: 'socrates-eye',
        title: 'SÓCRATES',
        text: 'A veces le llora el ojo izquierdo. El veterinario dijo que se le acumulan moquitos. Ya no pasa tan seguido; a veces cuando está debajo del aire.'
      },
      {
        id: 'diego-nose',
        title: 'DIEGO ARMANDO',
        text: 'Tiene puntitos en la nariz por un hongo viejo. No parece molestarle ni ser grave.'
      },
      {
        id: 'cats-escape',
        title: 'GATOS ESCAPISTAS',
        text: 'No hace falta buscarlos. Solo llamarlos si ustedes se tienen que ir.'
      },
      {
        id: 'maca-eye',
        title: 'MACA',
        text: "Tiene una 'bolsita de sangre' en el ojo. A veces crece y después ella se la rasca y drena. El veterinario dijo que es más estético que problemático. Solo atentos a que no se infecte."
      },
      {
        id: 'maca-food-thief',
        title: 'MACA FOOD POLICE',
        text: 'Ojo con Maca que siempre busca comerse la comida de los gatos. Ella tiene que comer su comida o comida humana en su defecto.'
      }
    ]
  },
  forbiddenFoodsGuide: {
    title: 'Comidas prohibidas (guía rápida)',
    text: 'Hay una guía separada con alimentos prohibidos para perros y gatos, con explicación de por qué cada uno hace mal.',
    buttonLabel: 'Ver guía de alimentos prohibidos',
    href: '/alimentos-prohibidos.html'
  },
  closing: {
    title: 'Cierre',
    text: 'Si pasa algo raro, me escriben sin dudar.'
  },
  signature: {
    maca: 'Maca',
    siblings: 'Los hermanos Macana'
  }
};
