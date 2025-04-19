import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../../styles/UseCases.css';
import { Pagination, A11y, Autoplay } from 'swiper/modules';

function UseCases() {
  const useCases = [
    {
      title: "Criação do Site",
      description: "Nossa IA desenvolve um site profissional completo, com design moderno, otimizado para conversões e pronto para vender."
    },
    {
      title: "Tráfego Pago",
      description: "Campanhas de anúncios otimizadas desde o primeiro dia, com IA gerenciando orçamentos e maximizando resultados."
    },
    {
      title: "Automação de Marketing",
      description: "Sistema completo de marketing digital, incluindo email marketing, redes sociais e geração de leads qualificados."
    },
    {
      title: "Gestão Completa",
      description: "Soluções integradas para gestão financeira, atendimento ao cliente e análise de resultados do seu negócio."
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
