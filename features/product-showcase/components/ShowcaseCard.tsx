"use client";

import Image from "next/image";
import { ShowcaseProduct } from "../types";

interface ShowcaseCardProps {
  product: ShowcaseProduct;
}

export function ShowcaseCard({ product }: ShowcaseCardProps) {
  return (
    <div className="relative group cursor-pointer rounded-lg overflow-hidden max-h-110 md:max-w-[811px]">
      {/* Image */}
      <div className="relative w-full max-h-[440px] min-h-[440px] aspect-[4/3] bg-gray-100 max-h-110">
        <Image
          src={product.image}
          alt={product.name}
          width={410}
          height={344}
          className="object-cover group-hover:scale-105 transition-transform duration-500 md:max-w-[811px] md:max-h-[344px] md:min-w-[811px] md:min-h-[811px] lg:max-w-[410px] lg:min-w-[410px] lg:max-h-[375px] lg:min-h-[375px] max-w-[357px] min-w-[357px] max-w-92 min-w-92 min-h-93 "
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
          <div className="flex flex-col gap-2">
            <p className="text-white font-semibold text-sm leading-tight">
              {product.name}
            </p>
            <p className="text-gray-300 text-xs mt-0.5">
              {product.description}
            </p>
          </div>

          {/* Price + Shop Now button */}
          <div className="flex items-center bg-[#262626] border border-white max-w-[145px] min-w-[145px] max-h-[44px] min-h-[44px] gap-2 shrink-0 hover:bg-orange-500 transition-colors duration-200 whitespace-nowrap rounded-lg">
            <button className=" max-w-[105px] min-w-[105px] max-h-[20px] min-h-[20px] mx-auto text-white text-xs font-semibold hover:text-white space-x-2">
              <span>${product.price}</span>
              <span className="font-bold">Shop Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
