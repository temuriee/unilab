"use client";

import { TOP100_PRODUCTS } from "../data/top100Data";
import { Top100Card } from "./Top100Card";
import { Swiper, SwiperSlide } from "swiper/react";

export function Top100() {
  return (
    <section className="w-full lg:max-w-7xl mx-auto lg:mt-20 md:max-w-[811px] max-w-[440px] mt-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Top100</h2>
        <a
          href="/top100"
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

      {/* Mobile: swiper 2 slides */}
      <div className="md:hidden w-full overflow-hidden">
        <Swiper spaceBetween={12} slidesPerView={2} className="pb-10">
          {TOP100_PRODUCTS.map((product) => (
            <SwiperSlide key={product.id}>
              <Top100Card product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Tablet: 2x2 grid */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
        {TOP100_PRODUCTS.slice(0, 4).map((product) => (
          <Top100Card key={product.id} product={product} />
        ))}
      </div>

      {/* Desktop: 4 in a row */}
      <div className="hidden lg:grid grid-cols-4 gap-6">
        {TOP100_PRODUCTS.slice(0, 4).map((product) => (
          <Top100Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
