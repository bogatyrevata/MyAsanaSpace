import React, { useState } from 'react';
import LevelTabs from './LevelTabs';
import PoseCard from './PoseCard';

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
            <LevelTabs
                currentLevel={currentLevel}
                onLevelChange={handleLevelChange}
                gradients={activeLevelGradient}
            />
            
            {/* Карусель */}
            <section className="mb-20">
                <div className="relative">
                    <div className="overflow-hidden rounded-3xl">
                        <div className="bg-white/0">
                        <PoseCard
                          currentLevel={currentLevel}
                          currentPose={poses[currentIndex]}
                        />
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