import React, { useState } from 'react';
import LevelFilter from './LevelFilter';

// Данные поз
import { posesData } from "../data/posesData";

// Вспомогательные константы
import { activeLevelGradient } from "../data/constants";

function PoseGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentLevel, setCurrentLevel] = useState("beginner");

    const poses = posesData[currentLevel];

    const handleLevelChange = (level) => {
        setCurrentLevel(level);
        setCurrentIndex(0);
    };

    const nextPose = () => setCurrentIndex((p) => (p + 1) % poses.length);
    const prevPose = () => setCurrentIndex((p) => (p - 1 + poses.length) % poses.length);
    const goToPose = (i) => setCurrentIndex(i);
    
    return (
        <div>
            {/* Фильтр уровней сложности */}
            <LevelFilter
                currentLevel={currentLevel}
                onLevelChange={handleLevelChange}
                gradients={activeLevelGradient}
            />
            
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
        </div>
    );
}

export default PoseGallery;