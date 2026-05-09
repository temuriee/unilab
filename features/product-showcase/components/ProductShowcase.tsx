"use client";

import { SHOWCASE_PRODUCTS } from "../data/showcaseData";
import { ShowcaseCard } from "./ShowcaseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function ProductShowcase() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Trending must-haves</h2>
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
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          className="pb-10"
        >
          {SHOWCASE_PRODUCTS.map((product) => (
            <SwiperSlide key={product.id}>
              <ShowcaseCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Tablet: 2 columns */}
      <div className="hidden md:grid lg:hidden grid-cols-1 gap-4">
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
