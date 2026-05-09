"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { PRODUCT_HIGHLIGHTS } from "../data/productHighlightData";
import { ProductHighlightSlide } from "./ProductHighlightSlide";

export function ProductHighlight() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          navigation={{
            prevEl: ".highlight-prev",
            nextEl: ".highlight-next",
          }}
          loop
          className="w-full"
        >
          {PRODUCT_HIGHLIGHTS.map((highlight) => (
            <SwiperSlide key={highlight.id}>
              <ProductHighlightSlide highlight={highlight} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom nav arrows */}
        <button
          className="highlight-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors duration-150"
          aria-label="Previous"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="highlight-next absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors duration-150"
          aria-label="Next"
        >
          <svg
            className="w-5 h-5"
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
        </button>
      </div>
    </section>
  );
}
