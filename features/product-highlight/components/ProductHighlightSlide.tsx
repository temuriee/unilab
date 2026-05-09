import Image from "next/image";
import { ProductHighlight } from "../types";

interface ProductHighlightSlideProps {
  highlight: ProductHighlight;
}

export function ProductHighlightSlide({
  highlight,
}: ProductHighlightSlideProps) {
  return (
    <div
      className="flex items-center justify-between w-full h-[160px] md:h-[180px] lg:h-[200px] px-6 md:px-10 lg:px-16 rounded-sm overflow-hidden"
      style={{ backgroundColor: highlight.bgColor }}
    >
      {/* Text */}
      <div className="flex flex-col gap-2 max-w-[45%] md:max-w-[40%] lg:max-w-[35%]">
        <h3 className="font-bold text-gray-900 text-base md:text-lg lg:text-xl tracking-wide">
          {highlight.title}
        </h3>
        <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
          {highlight.description}
        </p>
      </div>

      {/* Image */}
      <div className="relative h-full flex items-center">
        <div className="relative h-[130px] md:h-[155px] lg:h-[175px] w-[220px] md:w-[280px] lg:w-[340px]">
          <Image
            src={highlight.image}
            alt={highlight.imageAlt}
            fill
            className="object-contain object-right"
          />
        </div>
      </div>
    </div>
  );
}
