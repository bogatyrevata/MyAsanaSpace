import React, { useState, useEffect } from "react";
function WelcomeSection() {
    const [message, setMessage] = useState("");

    // Загрузка сообщения из Django API
    useEffect(() => {
    fetch("/api/hello/")
        .then((res) => res.json())
        .then((data) => setMessage(data.message))
        .catch((err) => console.error(err));
    }, []);

    return (
        <section className="text-center mb-16">
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
  );
}

export default WelcomeSection;