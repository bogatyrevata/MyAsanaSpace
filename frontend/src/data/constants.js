// Список уровней
export const levels = ['beginner', 'intermediate', 'advanced'];

// Названия уровней для UI
export const levelLabels = {
  beginner: '🌱 Новички',
  intermediate: '🔥 Средний',
  advanced: '💪 Эксперты'
};

// Градиенты для активной кнопки по уровню
export const activeLevelGradient = {
  beginner: "bg-gradient-to-r from-green-400 to-green-600 text-white",
  intermediate: "bg-gradient-to-r from-orange-400 to-red-600 text-white",
  advanced: "bg-gradient-to-r from-purple-400 to-pink-600 text-white",
};

// Градиенты для карточек поз по уровню
export const levelGradients = {
    beginner: {
      card: "bg-gradient-to-br from-white to-green-50",
      image: "bg-gradient-to-br from-green-200 to-emerald-300",
      badge: "bg-green-100 text-green-800",
      text: "text-green-600",
    },
    intermediate: {
      card: "bg-gradient-to-br from-white to-orange-50",
      image: "bg-gradient-to-br from-orange-200 to-red-300",
      badge: "bg-orange-100 text-orange-800",
      text: "text-orange-600",
    },
    advanced: {
      card: "bg-gradient-to-br from-white to-purple-50",
      image: "bg-gradient-to-br from-purple-200 to-pink-300",
      badge: "bg-purple-100 text-purple-800",
      text: "text-purple-600",
    },
  };