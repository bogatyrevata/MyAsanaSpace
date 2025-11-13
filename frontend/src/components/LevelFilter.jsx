import React from 'react';
import { levels, levelLabels } from '../data/constants';

function LevelFilter({ currentLevel, onLevelChange, gradients }) {
  return (
    
    <section className="mb-16">
      <div className="flex justify-center gap-4 md:space-x-6 flex-wrap">
        {levels.map((lvl) => {
          const isActive = currentLevel === lvl;
          
          return (
            <button
              key={lvl}
              onClick={() => onLevelChange(lvl)}
              className={[
                "difficulty-btn px-8 py-4 rounded-xl font-bold shadow-lg transform hover:scale-105 transition-all",
                isActive ? gradients[lvl] : "bg-gray-200 text-gray-600",
              ].join(" ")}
              data-level={lvl}
            >
              {levelLabels[lvl]}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default LevelFilter;