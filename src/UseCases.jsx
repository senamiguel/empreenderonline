import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './styles/UseCases.css';
import { Pagination, A11y, Autoplay} from 'swiper/modules';
import { text } from 'framer-motion/client';

function UseCases() {
  return (
    <section className="use-cases">
      <h2>Exemplos e caso de uso</h2>

      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        slidesPerView={3}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="use-case-card">
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ex laboriosam ea voluptate ipsam beatae perferendis sint, assumenda natus provident eius maiores at nihil tempora minus iusto? Dicta, impedit doloribus!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="use-case-card">
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam sequi et, placeat asperiores dignissimos dolorum neque sint sapiente veritatis voluptate in quam ducimus temporibus? Corporis consequatur enim omnis deleniti dicta?</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="use-case-card">
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente aperiam eligendi eius incidunt similique reprehenderit, atque repellendus dolor iure recusandae voluptatem et ratione commodi totam, culpa deleniti ex sunt doloribus.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="use-case-card">
            <h3>Relatórios Dinâmicos</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum deleniti reprehenderit cupiditate voluptates fuga fugiat nesciunt maxime laboriosam asperiores nisi quos, molestiae aperiam cumque suscipit nam provident neque amet natus!</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default UseCases;
