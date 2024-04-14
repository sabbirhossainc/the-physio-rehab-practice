"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { images } from "@/lib/images";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Page() {
  return (
    <>
      <div className="mt-28 bg-gray-200">
        {/* hero Title */}
        <div className="hidden lg:block absolute z-10 h-auto p-32 min-w-7xl bg-transparent text-gray-50 text-center top-52 lg:left-[4rem] md:left-[3rem] xl:left-[25rem] mx-auto">
          <p className="font-bold text-3xl drop-shadow-xl">
            WELCOME TO THE GUILDHALL PRACTICE
          </p>
          <br />
          <p className="font-medium text-xl drop-shadow-xl">
            A MULTI-DISCIPLINARY GROUP PRACTICE OFFERING OSTEOPATHY,
            PHYSIOTHERAPY
          </p>
          <p className="font-medium text-xl drop-shadow-xl subtitle">
            AND SPORTS MASSAGE IN BIRMINGHAM.
          </p>
        </div>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
            1280: {
              slidesPerView: 1,
            },
            1536: {
              slidesPerView: 1,
            },
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="h-[36rem] w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                className="block h-[36rem] w-full object-cover"
                property="true"
              />
              <div className="absolute inset-0 bg-black opacity-50" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
