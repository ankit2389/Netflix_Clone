// components/MovieCarousel.tsx
"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import SwiperCore from "swiper";

const movies = [
  { title: "Movie 1", image: "/movies/m1.png" },
  { title: "Movie 2", image: "/movies/m2.png" },
  { title: "Movie 3", image: "/movies/m3.png" },
  { title: "Movie 4", image: "/movies/m4.png" },
  { title: "Movie 5", image: "/movies/m5.png" },
  { title: "Movie 6", image: "/movies/m6.png" },
  { title: "Movie 7", image: "/movies/m7.png" },
  { title: "Movie 8", image: "/movies/m8.png" },
  { title: "Movie 9", image: "/movies/m9.png" },
];

export default function MovieCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<SwiperCore>();

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.params.navigation
    ) {
      const navigation = swiperRef.current.params.navigation;
      if (typeof navigation !== "boolean" && navigation) {
        navigation.prevEl = prevRef.current;
        navigation.nextEl = nextRef.current;
        swiperRef.current.navigation.destroy();
        swiperRef.current.navigation.init();
        swiperRef.current.navigation.update();
      }
    }
  }, []);

  return (
    <div className="py-8 bg-black text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-6">Popular Movies</h2>

      <div className="w-full max-w-6xl relative px-12 overflow-visible">
        {/* Navigation buttons */}
        <div
          ref={prevRef}
          className="absolute left-0 top-1/2 z-20 text-white text-3xl cursor-pointer -translate-y-1/2"
        >
          &#10094;
        </div>
        <div
          ref={nextRef}
          className="absolute right-0 top-1/2 z-20 text-white text-3xl cursor-pointer -translate-y-1/2"
        >
          &#10095;
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="swiper-container pb-12"
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-gray-900 rounded shadow-lg p-2 relative w-[180px] h-[270px]">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  className="object-contain rounded"
                />
                <h3 className="text-sm font-medium text-center mt-2">{movie.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="swiper-pagination absolute -bottom-8 left-0 right-0 flex justify-center z-10" />
      </div>
    </div>
  );
}
