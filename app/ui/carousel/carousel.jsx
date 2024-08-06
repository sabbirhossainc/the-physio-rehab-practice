"use client";

import { images } from "@/lib/images";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  return (
    <>
      <div className="mt-28 bg-gray-200">
        {/* hero Title */}
        <div className="hidden lg:block absolute z-10 h-auto p-32 min-w-7xl bg-transparent text-gray-50 text-center top-52 lg:left-[4rem] md:left-[3rem] xl:left-[25rem] mx-auto">
          <p className="font-bold text-4xl drop-shadow-xl uppercase">
            wellcome to The physio rehab practice
          </p>
          <br />
          <p className="font-medium text-lg drop-shadow-xl">
            A MULTI-DISCIPLINARY GROUP PRACTICE OFFERING OSTEOPATHY,
            PHYSIOTHERAPY
          </p>
          <p className="font-medium text-lg drop-shadow-xl subtitle">
             IN BIRMINGHAM.
          </p>
        </div>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 5000,
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
                className={`block h-[36rem] w-full object-cover ${image.addClass}`}
                property="true"
                width={400}
                height={100}
                quality={100}
              />
              <div className="absolute inset-0 bg-black opacity-50" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
