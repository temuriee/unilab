"use client";

import { SHOWCASE_PRODUCTS } from "../data/showcaseData";
import { ShowcaseCard } from "./ShowcaseCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function ProductShowcase() {
  return (
    <section className="w-full lg:max-w-7xl mx-auto max-w-[440px] max-h-[480px] md:max-h-[1420px] md:min-h-[1420px] md:max-w-[811px] lg:max-h-[510px] lg:min-h-[510px] mt-12 md:mt-17">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 md:mb-12">
        <h2 className="text-[28px] font-semibold leading-5 text-gray-900">
          Trending must-haves
        </h2>
        <a
          href="/products"
          className="text-sm text-gray-500 hover:text-orange-500 transition-colors duration-150 flex items-center gap-1"
        >
          View all
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
      {/* Mobile: swiper 1 slide */}
      <div className="md:hidden w-full overflow-hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          className="pb-10"
        >
          {SHOWCASE_PRODUCTS.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="mx-auto max-w-[440px] min max-h-[440px] min-h-[400px]">
                <ShowcaseCard product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Tablet: 2 columns */}
      <div className=" hidden md:flex lg:hidden flex-col gap-4  mx-auto w-full max-w-[811px] ">
        {SHOWCASE_PRODUCTS.slice(0, 4).map((product) => (
          <ShowcaseCard key={product.id} product={product} />
        ))}
      </div>
      {/* Desktop: 3 columns */}
      <div className="hidden lg:grid grid-cols-3 gap-6">
        {SHOWCASE_PRODUCTS.slice(0, 3).map((product) => (
          <ShowcaseCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
