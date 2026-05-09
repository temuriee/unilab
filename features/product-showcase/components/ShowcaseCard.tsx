"use client";

import Image from "next/image";
import { ShowcaseProduct } from "../types";

interface ShowcaseCardProps {
  product: ShowcaseProduct;
}

export function ShowcaseCard({ product }: ShowcaseCardProps) {
  return (
    <div className="relative group cursor-pointer rounded-lg overflow-hidden max-h-110  md:max-w-[811px]">
      {/* Image */}
      <div className="relative w-full aspect-[4/3] bg-gray-100 max-h-110">
        <Image
          src={product.image}
          alt={product.name}
          width={410}
          height={344}
          className="object-cover group-hover:scale-105 transition-transform duration-500 md:max-w-[811px] md:max-h-[344px] md:min-w-[811px] md:min-h-[811px] lg:max-w-[410px] lg:min-w-[410px] lg:max-h-[344px] lg:min-h-[344px] max-w-[357px] min-w-[357px] max-w-89.25 min-w-89.25 min-h-86 "
        />

        {/* Dark gradient overlay at bottom */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        {/* Tag top-left */}
        {product.tag && (
          <span
            className={`absolute top-3 left-3 ${product.tagColor} text-white text-[10px] font-semibold px-2 py-1 rounded-sm flex gap-1`}
          >
            {product.tag === "New Arrival" && (
              <Image
                src={"/Arivals.svg"}
                alt="Arivals"
                width={16}
                height={16}
              />
            )}
            {product.tag}
          </span>
        )}
        {/* Bottom info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-2 bg-[#262626]">
          <div>
            <p className="text-white font-semibold text-sm leading-tight">
              {product.name}
            </p>
            <p className="text-gray-300 text-xs mt-0.5">
              {product.description}
            </p>
          </div>

          {/* Price + Shop Now button */}
          <div className="flex items-center gap-2 shrink-0 ">
            <button className="bg-[#262626] border border-white text-white text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-orange-500 hover:text-white transition-colors duration-200 whitespace-nowrap flex items-center gap-2">
              ${product.price}
              <span className="w-px h-3 bg-white/50"></span>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
