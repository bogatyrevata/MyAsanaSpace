import React, { useState, useEffect } from "react";
import logoLotos from './logo-lotos.png';
import mountainPose from './mountain-pose.png';
import treePose from './tree-pose.png';
import dogPose from './dog-pose.png';
import warriorPose from './warrior-pose.png';
import crownPose from './crown-pose.png';
import childPose from './child-pose.png';
import yogaTreeBackground from './yoga-trees-background.jfif';
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLevel, setCurrentLevel] = useState("beginner");

  // Загружаем сообщение из Django API
  useEffect(() => {
    fetch("/api/hello/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  // Массив поз по уровням
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

  const nextPose = () => {
    setCurrentIndex((prev) => (prev + 1) % poses.length);
  };

  const prevPose = () => {
    setCurrentIndex((prev) => (prev - 1 + poses.length) % poses.length);
  };

  const goToPose = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative text-stone-800 min-h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(250, 250, 249, 0.7), rgba(250, 250, 249, 0.8)), url(${yogaTreeBackground})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10">
              <img
                src={logoLotos}
                alt="MyAsanaSpace Logo"
                className="w-full h-full object-contain"
                style={{ background: 'transparent' }}
              />
            </div>
            <h1 className="text-2xl font-semibold">MyAsanaSpace</h1>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-stone-600 hover:text-stone-800 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="text-stone-600 hover:text-stone-800 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </a>
            <a href="#" className="text-stone-600 hover:text-stone-800 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017.017z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-400 rounded-full pulse-ring"></div>
            <h2 className="relative text-4xl font-light text-stone-800">Откройте ваше пространство гармонии</h2>
          </div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Изучайте асаны, развивайте гибкость и находите баланс между телом и разумом в вашем личном пространстве практики.
          </p>
          {message && (
            <p className="mt-4 text-emerald-700 font-semibold">
              Ответ от Django: {message}
            </p>
          )}
        </section>

        {/* Difficulty Filter */}
        <section className="mb-12 flex justify-center space-x-8">
          <button
            onClick={() => handleLevelChange("beginner")}
            className={`difficulty-btn px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all ${
              currentLevel === "beginner"
                ? "bg-emerald-100 text-emerald-800"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200"
            }`}
            data-level="beginner"
          >
            Начальный
          </button>
          <button
            onClick={() => handleLevelChange("intermediate")}
            className={`difficulty-btn px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all ${
              currentLevel === "intermediate"
                ? "bg-amber-100 text-amber-800"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200"
            }`}
            data-level="intermediate"
          >
            Средний
          </button>
          <button
            onClick={() => handleLevelChange("advanced")}
            className={`difficulty-btn px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all ${
              currentLevel === "advanced"
                ? "bg-red-100 text-red-800"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200"
            }`}
            data-level="advanced"
          >
            Продвинутый
          </button>
        </section>

        {/* Carousel */}
        <section className="mb-16">
          <div className="relative">
            <div className="carousel-container bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-stone-200 overflow-hidden card-hover">
              <div className={`grid grid-cols-1 lg:grid-cols-2 fade-in`}>
                <div className="aspect-square flex items-center justify-center p-8">
                  <img
                    src={poses[currentIndex].img.src}
                    alt={poses[currentIndex].img.alt}
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 border border-stone-200 ${
                      currentLevel === "beginner"
                        ? "bg-white-80 text-stone-600"
                        : currentLevel === "intermediate"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {currentLevel === "beginner"
                      ? "Начальный уровень"
                      : currentLevel === "intermediate"
                      ? "Средний уровень"
                      : "Продвинутый уровень"}
                  </div>
                  <h3 className="text-2xl font-medium mb-4">{poses[currentIndex].title}</h3>
                  <p className="text-stone-600 mb-6">{poses[currentIndex].desc}</p>
                  <div className="flex items-center space-x-4">
                    <span className="font-medium text-stone-700">⏱️ {poses[currentIndex].time}</span>
                    <span className="font-medium text-stone-700">
                      {poses[currentIndex].tagEmoji} {poses[currentIndex].tag}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <button
              onClick={prevPose}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-3 shadow-xl hover:scale-110 transition-all text-stone-600 hover:text-stone-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextPose}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-3 shadow-xl hover:scale-110 transition-all text-stone-600 hover:text-stone-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Progress Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {poses.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPose(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-green-600' : 'bg-green-300 hover:bg-green-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-stone-800 mb-4">Обучение</h4>
              <ul className="space-y-2 text-stone-600">
                <li><a href="#" className="hover:text-stone-800 transition-colors">Основы йоги</a></li>
                <li><a href="#" className="hover:text-stone-800 transition-colors">Дыхательные практики</a></li>
                <li><a href="#" className="hover:text-stone-800 transition-colors">Медитация</a></li>
                <li><a href="#" className="hover:text-stone-800 transition-colors">Анатомия йоги</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-stone-800 mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-stone-600">
                <li><a href="#" className="hover:text-stone-800 transition-colors">Yoga Journal</a></li>
                <li><a href="#" className="hover:text-stone-800 transition-colors">Iyengar Yoga</a></li>
                <li><a href="#" className="hover:text-stone-800 transition-colors">Yoga Alliance</a></li>
                <li><a href="#" className="hover:text-stone-800 transition-colors">Mindfulness Apps</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-stone-800 mb-4">Сообщество</h4>
              <ul className="space-y-2 text-stone-600">
                <li><a href="#" className="hover:text-stone-800 transition-colors">Форум практиков</a></li>
                <li><a href="#" className="hover:text-stone-800 transition-colors">Мастер-классы</a></li>
                <li><a href="#" className="hover:text-stone-800 transition-colors">Ретриты</a></li>
                <li><a href="#" className="hover:text-stone-800 transition-colors">Сертификация</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-200 mt-8 pt-8 text-center text-stone-500">
            <p>&copy; 2024 MyAsanaSpace. Создано с любовью для развития внутренней гармонии.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;