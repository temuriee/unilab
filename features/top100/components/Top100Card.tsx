"use client";

import Image from "next/image";
import { useState } from "react";
import { Top100Product } from "../types";

interface Top100CardProps {
  product: Top100Product;
}

export function Top100Card({ product }: Top100CardProps) {
  const [wished, setWished] = useState(false);

  return (
    <div className="bg-white rounded-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group overflow-hidden w-full max-h-[480px] min-h-[480px]">
      {/* Image */}
      <div className="relative w-full h-[327px] overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.brand}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex flex-col gap-0.5">
            <p className="font-semibold text-gray-900 text-sm">
              {product.brand}
            </p>
            <p className="text-gray-400 text-xs">{product.description}</p>
          </div>
          {/* Wishlist */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setWished((prev) => !prev);
            }}
            className="shrink-0 mt-0.5"
            aria-label="Add to wishlist"
          >
            <svg
              className={`w-5 h-5 transition-colors duration-150 ${
                wished ? "text-red-500 fill-red-500" : "text-gray-300 fill-none"
              }`}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={
                  star <= product.rating ? "opacity-100" : "opacity-25"
                }
              >
                <path
                  d="M5.01641 1.63571C5.41875 0.788099 6.58125 0.788098 6.98359 1.6357L7.67895 3.10059C7.83872 3.43717 8.14755 3.67047 8.50481 3.72444L10.0597 3.95935C10.9593 4.09527 11.3186 5.24477 10.6676 5.90454L9.54246 7.0448C9.28394 7.30679 9.16598 7.68427 9.22701 8.05421L9.49261 9.66427C9.64629 10.5959 8.70581 11.3063 7.90112 10.8665L6.51041 10.1063C6.19087 9.93164 5.80913 9.93164 5.48959 10.1063L4.09888 10.8665C3.2942 11.3063 2.35371 10.5959 2.50739 9.66428L2.77299 8.05421C2.83402 7.68427 2.71606 7.30679 2.45754 7.0448L1.33244 5.90454C0.681433 5.24477 1.04066 4.09527 1.94033 3.95935L3.49519 3.72444C3.85244 3.67047 4.16128 3.43717 4.32105 3.10059L5.01641 1.63571Z"
                  fill="#FFC000"
                />
              </svg>
            ))}
          </div>
          <span className="text-gray-400 text-xs">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-orange-500 font-bold text-sm">
            ${product.price}
          </span>
          <span className="text-gray-400 text-xs line-through">
            ${product.originalPrice}
          </span>
          <span className="text-red-500 text-xs font-semibold">
            -{product.discount}%
          </span>
        </div>
      </div>
    </div>
  );
}
