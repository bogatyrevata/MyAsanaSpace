import PageIntro from "./PageIntro";

function MeditationPage() { 

    return  (
      <PageIntro 
        title="Медитации для вашей энергии!" 
        description="В этом разделе вы найдете медитации, которые помогут вам расслабиться и восстановить энергию." 
      >
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">Больше медитаций смотрите на нашем Youtube.</p>
      </PageIntro>
    );
}

export default MeditationPage;