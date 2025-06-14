import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
  const slides = ['/banner-1.jpg', '/banner-2.jpg'];
  return (
    <section className="w-full h-[90vh]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-top object-cover"
              />
              {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30">
                <h2 className="text-4xl font-bold">Slide {index + 1}</h2>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
