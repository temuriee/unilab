"use client";

import Image from "next/image";
import { FlashSaleProduct } from "../types";
import { CountdownTimer } from "./CountdownTimer";
import { StarRating } from "./StarRating";

interface FlashSaleCardProps {
  product: FlashSaleProduct;
}

export function FlashSaleCard({ product }: FlashSaleCardProps) {
  return (
    <div className="flex flex-col mx-auto border border-gray-100 rounded-sm bg-white hover:shadow-md transition-shadow duration-200 cursor-pointer group lg:max-w-75 max-h-95 min-h-95 lg:min-w-75 shadow-xl md:max-w-99 md:min-w-99 overflow-hidden max-w-50 min-w-50  ">
      {/* Countdown */}
      <div className="px-4 pt-4 pb-2 border-b border-gray-100 flex">
        <CountdownTimer endsAt={product.endsAt} />
      </div>

      {/* Image */}
      <div className="relative flex items-center justify-center px-4 py-6 bg-gray-50 overflow-hidden ">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={162}
          className="object-contain h-36 w-36 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="px-4 py-3 lg:flex flex-col gap-1.5 mx-auto hidden">
        <p className="font-bold text-gray-900 text-sm">{product.name}</p>
        <p className="text-gray-400 text-xs">{product.description}</p>
        <StarRating rating={product.rating} reviewCount={product.reviewCount} />

        {/* Price row */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-orange-500 font-bold text-base">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-gray-400 text-sm line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
          <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm ml-auto">
            -{product.discount}%
          </span>
        </div>
      </div>

      {/* Laptop Info */}
      <div className="px-4 py-3 hidden md:flex lg:hidden gap-1.5 justify-between items-center max-h-32 min-h-32 ">
        <div className="max-w-37.5 min-w-37.5 flex flex-col">
          <p className="font-bold text-gray-900 text-sm">{product.name}</p>
          <StarRating
            rating={product.rating}
            reviewCount={product.reviewCount}
          />
        </div>
        <div className="flex flex-col gap-2 mt-1">
          <p className="text-gray-400 text-xs">{product.description}</p>
          <div className="flex max-w-37.75 min-w-37.75 items-center justify-between">
            <div className="space-x-1">
              <span className="text-orange-500 font-bold text-base">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-gray-400 text-sm line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            </div>
            <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm ml-auto">
              -{product.discount}%
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Info */}

      <div className="px-4 py-3 flex flex-col gap-1.5 mx-auto md:hidden">
        <p className="font-bold text-gray-900 text-sm">{product.name}</p>
        <p className="text-gray-400 text-xs">{product.description}</p>
        <StarRating rating={product.rating} reviewCount={product.reviewCount} />

        {/* Price row */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-orange-500 font-bold text-base">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-gray-400 text-sm line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
          <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm ml-auto">
            -{product.discount}%
          </span>
        </div>
      </div>
    </div>
  );
}
