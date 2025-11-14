import {levelLabels, levelGradients } from '../data/constants';

function PoseCard({ currentLevel, currentPose }) {

  const styles = levelGradients[currentLevel];

  return (
    <div
      className={[
        "min-w-full rounded-3xl shadow-2xl overflow-hidden card-hover slide-in",
        styles.card,
      ].join(" ")}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Левая часть — картинка */}
        <div className={`aspect-square flex items-center justify-center p-8 ${styles.image}`}>
          <img
            src={currentPose.img.src}
            alt={currentPose.img.alt}
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Правая часть — текст */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          {/* Бейдж уровня */}
          <div
            className={[
              "inline-block px-4 py-2 rounded-full text-sm font-bold mb-6 border border-white/0",
              styles.badge,
            ].join(" ")}
          >
            {levelLabels[currentLevel]}
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {currentPose.title}
          </h3>

          <h4 className={`text-2xl font-semibold mb-4 ${styles.text}`}>
            {currentPose.tagEmoji} {currentPose.tag}
          </h4>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {currentPose.desc}
          </p>

          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⏱️</span>
              <span className="font-semibold">{currentPose.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{currentPose.tagEmoji}</span>
              <span className="font-semibold">{currentPose.tag}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoseCard;