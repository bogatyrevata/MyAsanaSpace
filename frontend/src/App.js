import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Асаны
import logoLotos from "./logo-lotos.png";
import mountainPose from "./mountain-pose.png";
import treePose from "./tree-pose.png";
import dogPose from "./dog-pose.png";
import warriorPose from "./warrior-pose.png";
import crownPose from "./crown-pose.png";
import childPose from "./child-pose.png";

import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLevel, setCurrentLevel] = useState("beginner");

  // Загрузка сообщения из Django API
  useEffect(() => {
    fetch("/api/hello/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  // Данные поз
  const posesData = {
    beginner: [
      {
        title: "Тадасана (Поза горы)",
        img: { src: mountainPose, alt: "Mountain Pose" },
        desc: "Базовая поза стоя, которая учит правильному выравниванию тела и является основой для всех остальных асан. Помогает улучшить осанку, укрепляет ноги и развивает чувство баланса.",
        time: "2-5 мин",
        tag: "Основа",
        tagEmoji: "💚",
      },
      {
        title: "Баласана (Поза ребенка)",
        img: { src: childPose, alt: "Child Pose" },
        desc: "Восстанавливающая поза, которая успокаивает нервную систему и снимает напряжение в спине. Идеальна для отдыха между более сложными асанами и для глубокого расслабления.",
        time: "3-10 мин",
        tag: "Релаксация",
        tagEmoji: "🧘",
      },
    ],
    intermediate: [
      {
        title: "Вирабхадрасана I (Поза воина I)",
        img: { src: warriorPose, alt: "Warrior Pose" },
        desc: "Мощная поза стоя, которая развивает силу ног, раскрывает грудную клетку и улучшает концентрацию. Помогает развить уверенность и внутреннюю стабильность.",
        time: "30-60 сек",
        tag: "Сила",
        tagEmoji: "💪",
      },
      {
        title: "Врикшасана (Поза дерева)",
        img: { src: treePose, alt: "Tree Pose" },
        desc: "Балансовая поза, которая укрепляет ноги и улучшает координацию. Развивает умственную концентрацию и помогает найти внутреннее равновесие.",
        time: "30-90 сек",
        tag: "Баланс",
        tagEmoji: "⚖️",
      },
    ],
    advanced: [
      {
        title: "Бакасана (Поза ворона)",
        img: { src: crownPose, alt: "Crown Pose" },
        desc: "Продвинутый баланс на руках, который требует значительной силы рук и корпуса. Развивает концентрацию, укрепляет запястья и учит преодолевать страх падения.",
        time: "15-30 сек",
        tag: "Мастерство",
        tagEmoji: "🔥",
      },
      {
        title: "Ширшасана (Стойка на голове)",
        img: { src: dogPose, alt: "Gogo Pose" },
        desc: "Король всех асан - инверсионная поза, которая улучшает кровообращение, укрепляет руки и корпус. Требует терпения и постепенной подготовки.",
        time: "1-5 мин",
        tag: "Король асан",
        tagEmoji: "👑",
      },
    ],
  };

  const poses = posesData[currentLevel];

  const handleLevelChange = (level) => {
    setCurrentLevel(level);
    setCurrentIndex(0);
  };

  const nextPose = () => setCurrentIndex((p) => (p + 1) % poses.length);
  const prevPose = () => setCurrentIndex((p) => (p - 1 + poses.length) % poses.length);
  const goToPose = (i) => setCurrentIndex(i);

  // Вспомогательные классы активной кнопки по уровню (как во 2-м проекте)
  const activeLevelGradient = {
    beginner: "bg-gradient-to-r from-green-400 to-green-600 text-white",
    intermediate: "bg-gradient-to-r from-orange-400 to-red-600 text-white",
    advanced: "bg-gradient-to-r from-purple-400 to-pink-600 text-white",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 font-poppins text-gray-800">
      {/* Header — градиентная шапка */}
      <header className="gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-10 h-10">
                  <img
                    src={logoLotos}
                    alt="MyAsanaSpace Logo"
                    className="w-full h-full object-contain"
                    style={{ background: 'transparent' }}
                  />
                </div>
              </div>
              <h1 className="text-3xl font-bold">MyAsanaSpace</h1>
            </div>

            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-8">
                <Link to="/" className="hover:text-purple-200 transition-colors">
                  Главная
                </Link>
                <Link to="/asanas" className="hover:text-purple-200 transition-colors">
                  Асаны
                </Link>
                <Link to="/meditation" className="hover:text-purple-200 transition-colors">
                  Медитация
                </Link>
                <Link to="/contacts" className="hover:text-purple-200 transition-colors">
                  Контакты
                </Link>
              </nav>

              {/* Соц. иконки */}
              <div className="flex space-x-4">
                <Link className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
                <Link className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors" aria-label="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </Link>
                <Link className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero */}
        <section className="text-center mb-20">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pulse-ring" />
            <h2 className="relative text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Пробуди свою энергию!
            </h2>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Откройте для себя мир йоги с нашими интенсивными и вдохновляющими практиками.
            Трансформируйте свое тело и разум уже сегодня!
          </p>

          {/* Кнопка для демонстрации ответа от Django */}
          <button
            onClick={() => setMessage("555")}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all shadow-lg"
          >
            Начать путешествие ✨
          </button>

          {message && (
            <p className="mt-6 text-lg font-semibold text-purple-700">
              Ответ от Django: {message}
            </p>
          )}
        </section>

        {/* Фильтр сложностей — стили второго проекта, логика первого */}
        <section className="mb-16">
          <div className="flex justify-center gap-4 md:space-x-6 flex-wrap">
            {["beginner", "intermediate", "advanced"].map((lvl) => {
              const isActive = currentLevel === lvl;
              return (
                <button
                  key={lvl}
                  onClick={() => handleLevelChange(lvl)}
                  className={[
                    "difficulty-btn px-8 py-4 rounded-xl font-bold shadow-lg transform hover:scale-105 transition-all",
                    isActive
                      ? activeLevelGradient[lvl]
                      : "bg-gray-200 text-gray-600",
                  ].join(" ")}
                  data-level={lvl}
                >
                  {lvl === "beginner" && "🌱 Новички"}
                  {lvl === "intermediate" && "🔥 Средний"}
                  {lvl === "advanced" && "💪 Эксперты"}
                </button>
              );
            })}
          </div>
        </section>

        {/* Карусель */}
        <section className="mb-20">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div className="bg-white/0">
                {/* Карточка текущей позы */}
                <div
                  key={`${currentLevel}-${currentIndex}`}
                  className={[
                    "min-w-full rounded-3xl shadow-2xl overflow-hidden card-hover slide-in",
                    currentLevel === "beginner" &&
                      "bg-gradient-to-br from-white to-green-50",
                    currentLevel === "intermediate" &&
                      "bg-gradient-to-br from-white to-orange-50",
                    currentLevel === "advanced" &&
                      "bg-gradient-to-br from-white to-purple-50",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div
                      className={[
                        "aspect-square flex items-center justify-center p-8",
                        currentLevel === "beginner" &&
                          "bg-gradient-to-br from-green-200 to-emerald-300",
                        currentLevel === "intermediate" &&
                          "bg-gradient-to-br from-orange-200 to-red-300",
                        currentLevel === "advanced" &&
                          "bg-gradient-to-br from-purple-200 to-pink-300",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      <img
                        src={poses[currentIndex].img.src}
                        alt={poses[currentIndex].img.alt}
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                      />
                    </div>

                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div
                        className={[
                          "inline-block px-4 py-2 rounded-full text-sm font-bold mb-6 border border-white/0",
                          currentLevel === "beginner" &&
                            "bg-green-100 text-green-800",
                          currentLevel === "intermediate" &&
                            "bg-orange-100 text-orange-800",
                          currentLevel === "advanced" &&
                            "bg-purple-100 text-purple-800",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        {currentLevel === "beginner" && "🌱 НОВИЧКИ"}
                        {currentLevel === "intermediate" && "🔥 СРЕДНИЙ"}
                        {currentLevel === "advanced" && "💪 ЭКСПЕРТЫ"}
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        {poses[currentIndex].title}
                      </h3>

                      {/* Подзаголовок — берём из тэга */}
                      <h4
                        className={[
                          "text-2xl font-semibold mb-4",
                          currentLevel === "beginner" && "text-green-600",
                          currentLevel === "intermediate" && "text-orange-600",
                          currentLevel === "advanced" && "text-purple-600",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        {poses[currentIndex].tagEmoji} {poses[currentIndex].tag}
                      </h4>

                      <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        {poses[currentIndex].desc}
                      </p>

                      <div className="flex items-center gap-6 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">⏱️</span>
                          <span className="font-semibold">
                            {poses[currentIndex].time}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">
                            {poses[currentIndex].tagEmoji}
                          </span>
                          <span className="font-semibold">
                            {poses[currentIndex].tag}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /карточка */}
              </div>
            </div>

            {/* Стрелки управления */}
            <button
              onClick={prevPose}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white shadow-xl rounded-full p-4 text-purple-600 hover:text-purple-800 hover:scale-110 transition-all"
              aria-label="Предыдущая поза"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button
              onClick={nextPose}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white shadow-xl rounded-full p-4 text-purple-600 hover:text-purple-800 hover:scale-110 transition-all"
              aria-label="Следующая поза"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>

            {/* Точки прогресса */}
            <div className="flex justify-center mt-8 space-x-3">
              {poses.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPose(i)}
                  aria-label={`Перейти к слайду ${i + 1}`}
                  className={
                    i === currentIndex
                      ? "w-3 h-3 bg-purple-600 rounded-full transition-all"
                      : "w-3 h-3 bg-purple-300 rounded-full transition-all hover:bg-purple-500"
                  }
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-6 text-purple-300">📚 Обучение</h4>
              <ul className="space-y-3">
                <li><Link to="/courses" className="hover:text-purple-300 transition-colors text-lg">Курсы для начинающих</Link></li>
                <li><Link to="/pranayama" className="hover:text-purple-300 transition-colors text-lg">Пранаяма</Link></li>
                <li><Link to="/meditation" className="hover:text-purple-300 transition-colors text-lg">Медитация</Link></li>
                <li><Link to="/philosophy" className="hover:text-purple-300 transition-colors text-lg">Философия йоги</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-6 text-pink-300">🌟 Ресурсы</h4>
              <ul className="space-y-3">
                <li><Link className="hover:text-pink-300 transition-colors text-lg">Yoga Journal Russia</Link></li>
                <li><Link  className="hover:text-pink-300 transition-colors text-lg">Isha Foundation</Link></li>
                <li><Link  className="hover:text-pink-300 transition-colors text-lg">Yogapedia</Link></li>
                <li><Link className="hover:text-pink-300 transition-colors text-lg">DoYogaWithMe</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-6 text-green-300">🎯 Практика</h4>
              <ul className="space-y-3">
                <li><Link className="hover:text-green-300 transition-colors text-lg">Утренние сессии</Link></li>
                <li><Link className="hover:text-green-300 transition-colors text-lg">Вечерний релакс</Link></li>
                <li><Link className="hover:text-green-300 transition-colors text-lg">Воркшопы</Link></li>
                <li><Link className="hover:text-green-300 transition-colors text-lg">Персональные тренировки</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-6 text-yellow-300">💫 Сообщество</h4>
              <ul className="space-y-3">
                <li><Link className="hover:text-yellow-300 transition-colors text-lg">Telegram группа</Link></li>
                <li><Link className="hover:text-yellow-300 transition-colors text-lg">Йога-туры</Link></li>
                <li><Link className="hover:text-yellow-300 transition-colors text-lg">Фестивали</Link></li>
                <li><Link className="hover:text-yellow-300 transition-colors text-lg">Инструкторские курсы</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-purple-800 mt-12 pt-8 text-center">
            <p className="text-lg text-purple-200">
              &copy; 2024 YogaFlow. Создано с ❤️ для трансформации жизни через йогу.
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <span className="text-2xl">🧘‍♀️</span>
              <span className="text-2xl">✨</span>
              <span className="text-2xl">🌙</span>
              <span className="text-2xl">☀️</span>
              <span className="text-2xl">🕉️</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;