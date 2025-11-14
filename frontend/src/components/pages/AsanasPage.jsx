import React from "react";
import PageIntro from './PageIntro';

function AsanasPage() { 

    return  (
      <PageIntro 
        title="Асаны для вашей энергии!" 
        description="Откройте для себя мир йоги с нашими интенсивными и вдохновляющими практиками. Трансформируйте свое тело и разум уже сегодня!" 
      >
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">Наша команда объединяет мастеров из разных стран...</p>
      </PageIntro>
    );
}

export default AsanasPage;
