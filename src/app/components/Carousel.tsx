"use client";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { PHOTOS as photos } from "../constants/constants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      centeredSlides
      autoplay={{ delay: 2000 }}
      loop={true}
      className="swiper-container"
      setWrapperSize={true}
    >
      {photos.map((photo) => (
        <SwiperSlide key={photo.alt}>
          <Image
            className={photo.className}
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
