import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Advertisement = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/houses").then((res) => {
      setHouses(res.data);
    });
  }, []);

  return (
    <div className="lg:mx-0 mx-5">
      <div className="flex flex-col lg:ml-40">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-customGreen">Featured</span> Properties
        </h2>
        <p className="font-semibold mt-2">
          Browse our latest hot offers
        </p>
      </div>

      {/* Conditional rendering */}
      {houses.length > 0 ? (
        <div className="mt-8 lg:ml-40">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            {houses.map((house) => (
              <SwiperSlide key={house._id} className="relative">
                <img
                  src={house.images[0]}
                  alt={house.city}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-70"></div>
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-lg md:text-xl font-bold">{house.city}</h3>
                  <p className="text-sm md:text-base">
                    ${house.starting_price} - ${house.ending_price}
                  </p>
                  <Link to={`/details/${house._id}`}>
                    <button className="mt-2 px-2 py-1 bg-customGreen text-white font-bold rounded text-sm md:text-base">
                      Details
                    </button>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="flex justify-center mt-8">
          <p>Loading properties...</p>
        </div>
      )}
    </div>
  );
};

export default Advertisement;
