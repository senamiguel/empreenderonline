import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../../styles/UseCases.css';
import { Pagination, A11y, Autoplay } from 'swiper/modules';

function UseCases() {
  const useCases = [
    {
      title: "Gestão de Projetos",
      description: "Organize e acompanhe seus projetos de forma eficiente, com visibilidade clara de prazos, responsáveis e progresso."
    },
    {
      title: "Análise de Dados",
      description: "Transforme dados em insights valiosos com relatórios personalizados e dashboards interativos."
    },
    {
      title: "Comunicação Interna",
      description: "Mantenha sua equipe alinhada com ferramentas de comunicação integradas e compartilhamento de documentos."
    },
    {
      title: "Automação de Processos",
      description: "Reduza tarefas manuais e aumente a produtividade com automação de fluxos de trabalho."
    }
  ];

  return (
    <section className="use-cases">
      <div className="use-cases__container">
        <h2>Como podemos ajudar seu negócio</h2>

        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          fadeEffect={{ crossFade: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          autoplay={{ 
            delay: 3000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true 
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true
          }}
          loop={true}
        >
          {useCases.map((useCase, index) => (
            <SwiperSlide key={index}>
              <div className="use-case-card">
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default UseCases;
