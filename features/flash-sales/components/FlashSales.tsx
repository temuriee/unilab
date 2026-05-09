"use client";

import { FLASH_SALE_PRODUCTS } from "../data/flashSaleData";
import { FlashSaleCard } from "./FlashSaleCard";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export function FlashSales() {
  const visibleProducts = FLASH_SALE_PRODUCTS.slice(0, 6);

  return (
    <section className="w-full max-w-110 min-w-110 md:max-w-7xl mx-auto px-4 py-8 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Flash Sales</h2>
        <a
          href="/flash-sales"
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
      <div className="md:hidden  overflow-hidden ">
        <Swiper
          spaceBetween={16}
          slidesPerView={2}
          pagination={{ clickable: true }}
          className="pb-10"
        >
          {visibleProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <FlashSaleCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* TABLET: 2x2 */}
      <div className="hidden md:grid lg:hidden grid-cols-2 max-w-202.75 min-w-202.75 gap-2 mx-auto">
        {visibleProducts.map((product) => (
          <FlashSaleCard key={product.id} product={product} />
        ))}
      </div>

      {/* DESKTOP: 4 IN ROW */}
      <div className="hidden lg:grid grid-cols-4 gap-4">
        {visibleProducts.map((product) => (
          <FlashSaleCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
