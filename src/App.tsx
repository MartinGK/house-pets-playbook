import { Closing } from './components/Closing';
import { DailyRoutine } from './components/DailyRoutine';
import { FoodWarnings } from './components/FoodWarnings';
import { ForbiddenFoodsGuide } from './components/ForbiddenFoodsGuide';
import { Hero } from './components/Hero';
import { LitterBox } from './components/LitterBox';
import { PetsCollage } from './components/PetsCollage';
import { Protagonists } from './components/Protagonists';
import { SpecialCall } from './components/SpecialCall';
import { ThingsHappen } from './components/ThingsHappen';
import { siteConfig } from './data/siteConfig';

function App() {
  return (
    <div className="app-shell">
      <Hero
        title={siteConfig.hero.title}
        subtitle={siteConfig.hero.subtitle}
        primaryCta={siteConfig.hero.primaryCta}
        secondaryCta={siteConfig.hero.secondaryCta}
      />

      <main>
        <Protagonists pets={siteConfig.protagonists} />
        <PetsCollage pets={siteConfig.protagonists} />
        <DailyRoutine items={siteConfig.routine.items} />
        <SpecialCall
          title={siteConfig.specialCall.title}
          audioSrc={siteConfig.specialCall.audioSrc}
          playLabel={siteConfig.specialCall.playLabel}
          stopLabel={siteConfig.specialCall.stopLabel}
          rewardTip={siteConfig.specialCall.rewardTip}
          diegoNote={siteConfig.specialCall.diegoNote}
        />
        <FoodWarnings title={siteConfig.foodAndWarnings.title} items={siteConfig.foodAndWarnings.items} />
        <ForbiddenFoodsGuide
          title={siteConfig.forbiddenFoodsGuide.title}
          text={siteConfig.forbiddenFoodsGuide.text}
          buttonLabel={siteConfig.forbiddenFoodsGuide.buttonLabel}
          href={siteConfig.forbiddenFoodsGuide.href}
        />
        <LitterBox text={siteConfig.litterBox.text} />
        <ThingsHappen items={siteConfig.thingsHappen.items} />
        <Closing />
      </main>
    </div>
  );
}

export default App;
