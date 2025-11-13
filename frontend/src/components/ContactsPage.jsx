import React from "react";

function contactsPage() { 

    return  (
        <section className="text-center mb-20">
            <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pulse-ring" />
                    <h2 className="relative text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                        Свяжитесь с нами!
                    </h2>
                </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Если у вас есть вопросы или предложения, не стесняйтесь обращаться к нам!
            </p>

        </section>
    );
}

export default contactsPage;