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
      className="flex items-center justify-between w-full max-h-[221px] min-h-[221px]  px-6 md:px-10 lg:px-16 rounded-sm overflow-hidden"
      style={{ backgroundColor: highlight.bgColor }}
    >
      {/* Text */}
      <div className="flex flex-col gap-2 max-w-[268.5px] lg:max-w-[400px] ml-[150px]">
        <h3 className="font-bold text-[#465D6B] text-2xl md:text-lg lg:text-xl tracking-wide">
          {highlight.title}
        </h3>
        <p className="text-[#555555] text-[20px] font-medium leading-relaxed">
          {highlight.description}
        </p>
      </div>

      {/* Image */}
      <div className="relative h-full flex items-center">
        <div className="relative h-[130px] md:h-[155px] lg:h-[175px] w-[220px] md:w-[280px] lg:w-[340px] mr-[150px]">
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
