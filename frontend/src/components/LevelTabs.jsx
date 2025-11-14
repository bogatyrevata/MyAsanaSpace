import React from 'react';
import { levels, levelLabels } from '../data/constants';
import LevelButton from './LevelButton';

function LevelTabs({ currentLevel, onLevelChange, gradients }) {
  return (
    <section className="mb-16">
      <div className="flex justify-center gap-4 md:space-x-6 flex-wrap">
        {levels.map((lvl) => (
          <LevelButton
            key={lvl}
            level={lvl}
            label={levelLabels[lvl]}
            isActive={currentLevel === lvl}
            onClick={onLevelChange}
            gradient={gradients[lvl]}
          />
        ))}
      </div>
    </section>
  );
}

export default LevelTabs;