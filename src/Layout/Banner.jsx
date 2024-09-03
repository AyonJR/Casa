import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="h-screen">
      <Swiper
        centeredSlides={true}
        direction={"vertical"}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-full"
      >
        <SwiperSlide className="h-full">
          <img
            src="https://i.ibb.co/KmTVf1k/jared-rice-Ahi-Unolb7cg-unsplash.jpg"
            alt="Movie Night"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-5xl font-bold">
              Find Your Future Home
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <img
            src="https://i.ibb.co/cyNF0Lz/todd-kent-178j8t-Jr-Nlc-unsplash.jpg"
            alt="Wooden House"
            className="w-full  h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-5xl font-bold">
              Find Your Future Home
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <img
            src="https://i.ibb.co/xgX1Q61/florian-schmidinger-b-79n-Oqf95-I-unsplash.jpg"
            alt="Wooden House"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-5xl font-bold">
              Find Your Future Home
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
